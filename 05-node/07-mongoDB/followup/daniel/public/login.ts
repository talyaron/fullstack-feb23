async function handleLogin(ev:any){
    try {
        ev.preventDefault(); // stop form from submitting
        
        const user = {  // get data from form
            password: ev.target.password.value,
            email: ev.target.email.value
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
        //if everthink is OK, redirect to main page of the user
<<<<<<< Updated upstream:05-node/07-mongoDB/followup/daniel/public/login.ts
        window.location.href = `/main.html?email=${email}`; //query
=======
        window.location.href = `/orders.html`;
        // window.location.href = `/main.html?email=${email}`; //query
>>>>>>> Stashed changes:05-node/08-personal-project/Alex/public/login.ts
    } catch (error) {
        console.error(error);
    }
}