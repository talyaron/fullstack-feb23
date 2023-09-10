async function handleRegister(ev: any) {
    try {
        ev.preventDefault();
        const user = {
            name: ev.target.name.value,
            password: ev.target.password.value,
            email: ev.target.email.value,
            date: ev.target.date.value,

        }
        console.log(user);
        if (!user.email || !user.password) throw new Error("Please complete all fields");

        const response = await fetch('/API/user2/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const { error, userDB } = await response.json();
        console.log(userDB)

        if (error) throw new Error(error);
        window.location.href = '/logIn.html'
    } catch (error) {
        console.error(error.message);
    }
}