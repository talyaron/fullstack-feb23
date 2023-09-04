//home page 


// get user that isLogin = true from  server
async function geLogInUser() {
    
    const response = await fetch("API/user/get-log-in-user", {  
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const user = await response.json();
    return user;

    
}
// render hello user
async function renderHelloUser() {
    const {logInUser} = await geLogInUser();
   debugger;
    const helloUser = document.getElementById("helloUser");
    helloUser.innerHTML = `Hello ${logInUser.email}`;
}
