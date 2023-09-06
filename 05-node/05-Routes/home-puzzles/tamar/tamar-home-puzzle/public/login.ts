
async function handleLogin(ev: any) {
    try {
        ev.preventDefault(); // stop form from submitting

        const user = {  // get data from form
            name: ev.target.name.value,
            password: ev.target.password.value,

        }
        if (!user.name || !user.password) throw new Error("Please complete all fields");

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

        const result = await response.json(); // get data from server
        console.log(result);
        if (result.ok) {
            // if everthink is OK, redirect to main page of the user and pass the id of this user
            window.location.href = `/main.html?resultId=${result.id}`;
        }
        const loginForm :any = document.getElementById("loginForm");
        loginForm.reset();
    } catch (error) {
        console.error(error);
    }
}