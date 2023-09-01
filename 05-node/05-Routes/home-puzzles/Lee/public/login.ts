async function handleLogin(ev: any) {
    try {
        const user = {
            password: ev.target.password.value,
            email: ev.target.email.value
        }
        if (!user.email || !user.password) throw new Error ("Please complete all fields")
        const response = await fetch('/API/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
    
        })
        
        const {error, email} = await response.json()
        console.log(error)
        if (error) {
            throw new Error (error)
        }

        window.location.href = `/main.html?email=${email}`
    } catch (error) {
        console.error(error)
    }

}