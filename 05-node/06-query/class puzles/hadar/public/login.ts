async function handleLogin(event){
    try {
        event.preventDefault();
        
        const user = {password: event.target.password.value, email: event.target.email.value}
        if(!user.email || !user.password) throw new Error("Please complete all fields");
        const response = await fetch('/API/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });

        const {error, email} = await response.json();
        console.log(error);
        if (error) {
            throw new Error(error);
        }
       
        window.location.href = `/main.html?email=${email}`;
    } 
    catch (error) {
        console.error(error);
    }
}