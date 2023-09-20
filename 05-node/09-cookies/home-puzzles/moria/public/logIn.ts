async function handleLogin(ev: any) {
    try {
        ev.preventDefault()

        const user = {
            password: ev.target.password.value,
            email: ev.target.email.value
        }
        console.log(user)
        if (user.email === 'admin@gmail.com' && user.password === 'admin') {

            window.location.href = `/main.html?email=${user.email}`
        }

        if (!user.email || !user.password) throw new Error("Please complete all fields");

        const response = await fetch('/API/user2/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.message);
        } else {

            // window.location.href = `PersonalArea.html`;
        }

    } catch (error) {
        console.error(error.message);

    }
}