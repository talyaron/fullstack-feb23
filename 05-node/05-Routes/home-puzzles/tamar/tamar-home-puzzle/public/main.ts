//--interfaces:--
interface User{
    name: string;
    id: string;
}

interface Task{
    id: string;
    title:string;
    description: string;
    status: TaskStatus;
}

interface UserTasks{
    id:string
    user:User;
    tasks:Task[];
}

//----hendles functions:-----------
// a function which get the email from the url query

function getIDFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('resultId');
}

const resultId = getIDFromQuery();
console.log(resultId)

// a function which get the user tasks from the server by email

function handleGetUserTasks(){
    getUserTasks(resultId);
}
async function getUserTasks(resultId:string) {
    try {
        const response = await fetch(`/API/users/get-users-task?resultId=${resultId}`);
        const data = await response.json();
        console.log(data)
        renderTasks(data.tasks, document.querySelector("#tasks"));
    } catch (error) {
        console.error(error);
    }
}


//-----render functions:----------
async function renderUser(){
    try {
        const response = await fetch('/API/users/get-user') //get the chosen user by id
        console.log(response)
        const results = await response.json(); //the result is user
        const Html = document.querySelector("#userName")
        if (!Html) throw new Error("no div element catches");
        
        const userHTML = `<h1>Hello ${results.name}</h1>`
        Html.innerHTML = userHTML
        renderUserTasks();

    } catch (error) {
        console.error(error)
    }
}

async function renderUserTasks(){
    try {
        const response = await fetch('/API/userTask/get-tasks-of-user') //get the tasks of the user by user-id
        const results = await response.json(); //the result is array of tasks
        const Html :HTMLDivElement = document.querySelector("#tasksRoot")
        if (!Html) throw new Error("no div element catches");
       
        renderTasks(results, Html)
    } catch (error) {
        console.error(error)
    }
}

//----controller function:---------
//  async function getUserTasks(){
//     try {
//         const response = await fetch('/API/userTask/get-tasks-of-user') 
//         //becaous the id pass from the login to main page
//         //the getTasksOfUser function in the server will have the id
//         //to use it to find the spesific user

//         const results = await response.json();

//         const {userTasks} = results;
//         if(!Array.isArray(userTasks)) throw new Error("User Tasks are not array");
//         console.log("userTasks:",userTasks)
//         console.log("results:",results)
//         return userTasks;
        

//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }

//---call function:--
//getUserTasks();
