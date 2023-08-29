import { User, users } from "../users/usersModel";
import { Task, tasks, TaskStatus } from "../tasks/tasksModel";
import { UserTasks, userTasks } from "./userTsksModle";

//how to comine between the user and the tasks??

export const getTasksOfUser = (req: any, res: any) => {
    try {
        const {id} = req.body 
        //we found the user in the userTasks array by his id
        const searchUser = userTasks.filter(user => user.id == id)
        res.send(searchUser)
    } catch (error) {
        console.error(error);
    }
}

export const addTaskToUser = (req:any, res:any) =>{
    try {
        const {id, title, description, status} = req.body 
        //bild a new task 
        const newTask = new Task(title, description, status)
        //find the spesific user in the usreTask array 
        const findUser = userTasks.find(user=> user.id === id)
        if (!findUser) throw new Error("user don't found");
        
        //add (push) the new task to the user tasks array
        findUser.tasks.push(newTask)


    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

