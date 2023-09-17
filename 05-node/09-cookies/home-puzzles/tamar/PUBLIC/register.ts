async function handleRegister(ev){
    try {
        ev.preventDefault();
        //get user info from the form 
        const user = {
            userName: ev.target.userName.value,
            email: ev.target.email.value,
            password: ev.target.password.value
        };
        if(!user.userName || !user.email || !user.password) throw new Error("missing details");
        
        //save the user in server/DB
        const response = await fetch("API/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        
        const data = await response.json(); //get response from server to the action (data===ok||error)
        console.log(data);
        if (data) throw new Error("data is error");

        //if all ok, redirect to login page
        window.location.href = "/login.html"
        
    } catch (error) {
        console.error(error)
    }
}