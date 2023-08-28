//login.ts 

async function handleLogin(event){
   
    event.preventDefault();
    const userName = event.target.elements.uesrName.value;  
    const password = event.target.elements.password.value; 
    const user = {userName, password};
    const response = await fetch('/API/users/log-in', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    
    const result = await response.json();
   
    console.log(result.userName);
    if(result.ok===true){
        // go to home page  with user name
        
        window.location.href = `../home/homePage.html?userName=${result.userName}`;    
    }
    const loginForm :any = document.getElementById("loginForm");
    loginForm.reset();    

}