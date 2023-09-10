
async function handleLogin(ev:any){
    try {
        ev.preventDefault();
        const dateUser = {
            email: ev.target.email.value,
            password: ev.target.password.value
        }

        if(!dateUser.email || !dateUser.password) throw new Error("please fill all fileds");
        const response = await fetch('/API/users/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dateUser)
        });

        const {error, email} = await response.json()
        console.log(error);
        if(error){
            throw new Error(error)
        }
        
        window.location.href = `./crossfit.html?email=${email}`
    } catch (error) {
        console.error(error)
    }
}