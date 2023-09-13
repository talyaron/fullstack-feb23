async function handleAddUser(ev:any) {
    try {
        ev.preventDefault();
        const email = ev.target.email.value; 
        const password = ev.target.password.value;
      
        const user = {email, password};
        if(!user.email || !user.password) throw new Error("missing some details");
        const response = await fetch("API/user/add-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json(); 
        if (!data.ok) {
            alert(data.error);
            throw new Error(data.error);
        }
            
        const {userDB}=data;
        console.log(data,userDB);  
        // go to Log in page   
        window.location.href = `LogIn.html`;

        
    } catch (error) {
        console.error(error);   
    }
    
}