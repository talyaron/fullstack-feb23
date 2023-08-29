
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
      
    } catch (error) {
      console.error(error);
    }
  }
  
  async function renderHelloUser() {
    try {
   const userName = getQueryParam('userName'); // get from url
    // Check if the userName is available
  if (!userName)  throw new Error("Username not found.");
    // Call the function to fetch user details
    await  getCorrentUser(userName);
     // render hello user with corrent user 
    const correntUserDiv = document.getElementById("correntUserDiv");
    correntUserDiv.innerHTML = `Hello ${correntUser.userName}`;
    renderUserTasks();
     
    } catch (error) {
        console.error(error);   
    }
    
}
  
renderHelloUser();

// 
async function handleAddUserTask(event){
    try {
        event.preventDefault();
        const titel=event.target.title.value;
        const discripton=event.target.taskDescription.value;  
        const taskUserId = correntUser.id ;
        const taskObj = {title: titel, description: discripton, id: taskUserId};
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
            renderUserTasks();
            console.log(result.userTasks);
              
        }else{
            alert("Task not added");
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to fetch and render user tasks
async function renderUserTasks() {
  try {
      // Fetch user tasks from the server
      debugger
      const userId = correntUser.id;
      const response = await fetch(`/API/tasks/get-user-tasks/${userId}`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.status === 200) {
          const result = await response.json();
          const userTasksContainer = document.getElementById('userTasksContainer');

          // Clear existing tasks
          userTasksContainer.innerHTML = '';
          if (!result.userTasks.length) 
          { 
                const noTasks = document.createElement('p');
                noTasks.innerText = 'No tasks found';
                userTasksContainer.appendChild(noTasks);
                return;
          }
          // Loop through the user's tasks and create HTML elements to display them
          result.userTasks.forEach((userTask) => {
              const taskList = document.createElement('ul');
              taskList.innerHTML = `<li>Title: ${userTask.titel}</li><li>Description: ${userTask.discripton}</li>`;
              userTasksContainer.appendChild(taskList);
          });
      } else {
          // Handle non-200 status codes (e.g., 404)
          console.error(`Failed to fetch user tasks. Status code: ${response.status}`);
      }
  } catch (error) {
      // Handle network or other errors
      console.error(error);
  }
}




  
  