async function handleRegister(ev: any) {
    try {
        ev.preventDefault()
        const passwordCheck = ev.target.passwordCheck.value
        const user = {
            name:ev.target.name.value,
            password: ev.target.password.value,
            email: ev.target.email.value
        }
        console.log(user.password);

        if (passwordCheck !== user.password) {
            alert("The passwords do not match")
            throw new Error("The passwords do not match");
        }
        if (!user.email || !user.password) throw new Error("Please complete all fields");

        const response = await fetch('/API/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const { error } = await response.json()
        console.log(error)
        if (error) throw new Error(error);
        window.location.href = '/login.html'
    } catch (error) {
        console.error(error.message);
    }
}