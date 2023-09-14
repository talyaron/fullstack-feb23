async function handleLogin(ev: any) {
    try {
        ev.preventDefault()

        const user = {
            password: ev.target.password.value,
            email: ev.target.email.value
        }
        if (user.email === 'admin@gmail.com' && user.password === 'admin') {
            window.location.href = `/main.html?email=${user.email}`
        }

        if (!user.email || !user.password) throw new Error("Please complete all fields");

        const response = await fetch('/API/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const { error, email } = await response.json()
        console.log(error);
        if (error) throw new Error(error);
        window.location.href = `/main.html`
    } catch (error) {
        console.error(error.message);

    }
}