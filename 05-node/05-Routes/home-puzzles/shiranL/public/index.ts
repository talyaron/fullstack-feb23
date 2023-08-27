// index.ts
function handleRegisterPage(){
  debugger;
     location.href = "/register.html";
}
function handleLoginPage(){
  
    location.href = "/login.html";  
}

async function  handleGetAllUsers(){
    const response = await fetch('/API/users/get-all-users');
    const result = await response.json();
    
    console.log(result);
    const users = result.users;
    const ul = document.getElementById("users");
    ul.innerHTML = "";
    users.forEach((user:any) => {
        const li = document.createElement("li");
        li.innerHTML = `userName: ${user.userName} password: ${user.password}`;
        ul.appendChild(li);
    }); 
}

