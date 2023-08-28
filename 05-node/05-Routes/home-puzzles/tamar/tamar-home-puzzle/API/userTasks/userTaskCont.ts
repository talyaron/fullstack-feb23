import { User, users } from "../users/usersModel";
import { Task, tasks, TaskStatus } from "../tasks/tasksModel";
import { UserTasks, userTasks } from "./userTsksModle";

//how to comine between the user and the tasks??

export const getTasksOfUser = (req: any, res: any) => {
    try {
        const {id} = req.body

        const searchUser = userTasks.filter(user => user.id == id)
        res.send(searchUser)
    } catch (error) {
        console.error(error);
    }
}

export const saveNewTaskToUser = (req:any, res:any) =>{
    try {
        const {id, title, description, status} = req.body

        const newTask = new Task(title, description, status)

        const findUser = userTasks.find(user=> user.id === id)

        // findUser.task.push(newTask)


    } catch (error) {
        console.error(error);
    }
}