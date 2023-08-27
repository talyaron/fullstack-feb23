async function handleAddUser(evevt:any) 
{
    evevt.preventDefault();
    const userName = evevt.target.elements.uesrName.value;  
    const password = evevt.target.elements.password.value; 
    const user = {userName, password};
    const response = await fetch('/API/users/add-user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const result = await response.json();
    console.log(result);

    const addUserForm :any = document.getElementById("addUserForm");
    addUserForm.reset();    
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
    debugger;
    const result = await response.json();
    console.log(result);
    if(result.success){
        // go to home page  
        window.location.href = "../home/homePage.html";    
    }
    const loginForm :any = document.getElementById("loginForm");
    loginForm.reset();    

}