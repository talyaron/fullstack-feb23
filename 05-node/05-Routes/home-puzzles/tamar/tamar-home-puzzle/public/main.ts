//--interfaces:--
interface User{

}

interface Task{

}

enum TaskStatus{

}

interface UserTasks{

}

//----hendles functions:-----------


//-----render functions:----------
function renderUserTasks(){

}

//----controller function:---------
 async function getUserTasks(){
    try {
        const response = await fetch('/API/userTask/get-tasks-of-user') 
        //becaous the id pass from the login to main page
        //the getTasksOfUser function in the server will have the id
        //to use it to find the spesific user

        const results = await response.json();

        const {userTasks} = results;
        if(!Array.isArray(userTasks)) throw new Error("User Tasks are not array");
        console.log("userTasks:",userTasks)
        console.log("results:",results)
        return userTasks;
        

    } catch (error) {
        console.error(error)
        return []
    }
}

//---call function:--
getUserTasks();
