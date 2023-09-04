async function handleLogIn(event) {
    try {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        debugger;
        const user = { email, password };
        if (!user.email || !user.password)
            throw new Error("missing some details");
        const response = await fetch("API/user/log-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(data);
        
        // if data is not ok
        if (!data.ok) {
            throw new Error(data.message);
        }

       // go to home page   with user email
         window.location.href = `homePage.html`;
        
    } catch (error) {
        console.error(error);
        
    }
    
}