//home page 
async function handleLogout(){
    debugger;
    const response = await fetch("API/user/log-out", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
            });
    const data = await response.json();
    console.log(data);
    if (!data.ok) {
        throw new Error(data.message);
    }
    BackHome();


    
}
function BackHome(){
    location.href = "/index.html";
}

// rendr hello user to log in user  
async function getCurrentUser() {
    try {
        const response = await fetch("API/user/get-log-in-user");
        const data = await response.json();
        console.log(data);
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { logInUser } = data;
        const helloUser = document.getElementById("helloUser");
        helloUser.innerHTML = `Hello ${logInUser.email}`;
    } catch (error) {
        console.error(error);
    }
}

