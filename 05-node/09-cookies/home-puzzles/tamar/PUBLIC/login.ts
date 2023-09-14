async function handleLogin(ev) {
    try {
        ev.preventDefault();
        //get user info from the form 
        const user = {
            userName: ev.target.userName.value,
            email: ev.target.email.value,
            password: ev.target.password.value
        };
        console.log(user)
        if (!user.email || !user.userName || !user.password) throw new Error("Please complete all fields");

        //send data to server/DB
        const response = await fetch("/API/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        const answer = await response.json(); //get response (data) from server for the action
        if (!answer.ok) { throw new Error(answer.massage) }
        else {
            //if all ok, redirect to main page of the user by his email
            window.location.href = `/main.html`; 
        }



    } catch (error) {
        console.error(error)
    }
}