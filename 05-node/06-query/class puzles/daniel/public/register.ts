
async function handleRegister(ev:any){
    try {
        ev.preventDefault()
        const data = {
            email: ev.target.email.value,
            password: ev.target.password.value
        };
        const response = await fetch('/API/users/register',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });

        const result = await response.json();
        const { error } = result;
        console.log(error);
        if(error) {
            throw new Error(error)
        }
        window.location.href = `/login.html`
    } catch (error) {
        console.error(error);
    }
}
