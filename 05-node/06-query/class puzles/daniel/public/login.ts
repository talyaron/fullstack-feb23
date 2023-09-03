async function handleLogin(ev:any){
    try {
        ev.preventDefault()
        const data = {
            email: ev.target.email.value,
            password: ev.target.password.value
        }

        if(!data.email || !data.password) throw new Error("Please complete all fileds");
        const response = await fetch('/API/users/login',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        const { error, email } = await response.json();
        console.log(error);
        if(error) {
            throw new Error("error");
        }
        
        window.location.href = `/index.html?email=${email}`;
    } catch (error) {
        console.error(error);
    }
}