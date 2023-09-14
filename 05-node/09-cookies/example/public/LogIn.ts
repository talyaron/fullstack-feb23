async function handleLogIn(event) {
    try {
        event.preventDefault();
        console.dir(event.target)
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { email, password };
        console.log(user)
        if (!user.email || !user.password)
            throw new Error("missing some details");
        const response = await fetch("API/user/log-in", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(data)
        // if data is not ok
        if (!data.ok) {
            throw new Error(data.message);
        } else {
            // go to home page   with user email
            window.location.href = `homePage.html`;
        }

        // go to home page   with user email
        //  window.location.href = `homePage.html?email=${data.user.email}`;
        
    } catch (error) {
        console.error(error);
        
    }
    
}