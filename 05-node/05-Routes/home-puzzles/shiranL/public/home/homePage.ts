
// homepage.ts  
let correntUser = null;

  // Get the username from the URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }


async function getCorrentUser(username) {
    try {
        const response = await fetch(`/API/users/get-user-details?userName=${username}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
        const user= await response.json();
      
        // save the user in a global variable
        correntUser =   user;
       
       const correntUserDiv = document.getElementById("correntUserDiv");
       correntUserDiv.innerHTML = `Hello ${correntUser.userName}`;
    } catch (error) {
      console.error(error);
    }
  }
  
function renderHelloUser() {
    try {
   const userName = getQueryParam('userName'); // get from url
    // Check if the userName is available
  if (!userName)  throw new Error("Username not found.");
    // Call the function to fetch user details
    getCorrentUser(userName);
     
    } catch (error) {
        console.error(error);   
    }
    
}
  
renderHelloUser();
async function handleAddUserTask(event){
    try {
        event.preventDefault();
        const titel=event.target.title.value;
        const discripton=event.target.taskDescription.value;  
        const taskUserId = correntUser.id ;
        const taskObj = {titel,discripton,id:taskUserId};
        const response = await fetch('/API/tasks/add-user-task', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskObj),
          });
        const result = await response.json();
        if(result.success){
            alert("Task added successfully");
        }else{
            alert("Task not added");
        }
    } catch (error) {
        console.error(error);
    }
}

  
  