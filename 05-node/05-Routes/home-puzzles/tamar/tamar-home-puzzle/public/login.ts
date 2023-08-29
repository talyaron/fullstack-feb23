
async function handleLogin(ev:any){
    try {
        ev.preventDefault(); // stop form from submitting
        
        const user = {  // get data from form
            password: ev.target.password.value,
            name: ev.target.name.value
        }
        if(!user.name || !user.password) throw new Error("Please complete all fields");

        // const user = {  // get data from select-form
        //     name: ev.target.querySelector('select').value,
        //     // id: ev.target.id.value
        // }
        // console.log(user) //you trying to get data from elements in the form
        // if(!user.name) throw new Error("Please chose user");
        
        const response = await fetch('/API/users/login', { // send data to server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const {error, id} = await response.json(); // get data from server
        console.log(error);
        if (error) {
            throw new Error(error);
        }
        // if everthink is OK, redirect to main page of the user and pass the id of this user
        window.location.href = `/main.html?id=${id}`;
    } catch (error) {
        console.error(error);
    }
}