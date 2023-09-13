async function handleRegister(ev:any) {
    try {
        ev.preventDefault()
        const userData = {
            email: ev.target.email.value,
            password: ev.target.password.value
        }

        const response = await fetch('/API/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        });
        const {error} = await response.json();
        console.log(error) //if error not exist, you will get undefined
        if(error){
            throw new Error(error);
        }
        window.location.href = "/login.html"
        
    } catch (error) {
        console.error(error);
    }
}