async function handleLogin(ev) {
    try {
        ev.preventDefault();
        
        const user={
            email:ev.target.email.value,
            password:ev.target.password.value
        }
        
        if(!user.email || !user.password) throw new Error("Please complete all fields");
        const response = await fetch('/API/users/login', { // send data to server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        
        
        const {error, email} = await response.json(); // get data from server
        console.log(error);
        if (error) {
            throw new Error(error);
        }
        window.location.href=`../mainMenu/index.html`
    
    } catch (error) {
        console.error(error)
    }
}
