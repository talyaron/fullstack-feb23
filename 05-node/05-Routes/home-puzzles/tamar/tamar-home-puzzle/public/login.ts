async function handleLogin(ev:any){
    try {
        ev.preventDefault(); // stop form from submitting
        
        const user = {  // get data from select-form
            name: ev.target.name.value,
            id: ev.target.id.value
        }
        console.log(ev.target.value)
        // if(!user.name) throw new Error("Please chose user");
        // const response = await fetch('/API/users/login', { // send data to server
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // });

        // const {error, id} = await response.json(); // get data from server
        // console.log(error);
        // if (error) {
        //     throw new Error(error);
        // }
        //if everthink is OK, redirect to main page of the user and pass the id of this user
        // window.location.href = `/main.html?id=${id}`;
    } catch (error) {
        console.error(error);
    }
}