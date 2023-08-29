import { users } from "../users/userModels"
import { Task, tasks, TaskStatus, UserTasks, usersTasks } from "./tasksModels"


export const getTasks = (req, res) => {
    try {
        res.send({ usersTasks })
    } catch (error) {
        console.error(error.massage)
    }
}

export const addTask = (req, res) => {
    try {
        const task = req.body;
        const emailUser=task.emailUser
        const currentTask = new Task(task.title, task.description, task.status)
        tasks.push(currentTask)
       const currentUser = users.find(user=>user.email===emailUser)
       usersTasks.push(new UserTasks(currentUser,currentTask))


        res.send({ usersTasks })
    } catch (error) {
        console.error(error.massage)

    }
}

export const deleteTask = (req, res) => {
    try {
        const { id } = req.body
        const index = usersTasks.findIndex((element) => element.task.id === id);
        if (index === -1) {
            throw new Error("task not found");
        }
        usersTasks.splice(index, 1);
        res.send({ usersTasks })
    } catch (error) {
        console.error(error.massage)

    }
}

export const updateTask = (req, res)=>{
    try {
        const {title,description,id} = req.body
        if(!title||!description||!id) throw new Error("Please complete all details");
        const taskUser = usersTasks.find(element=>element.task.id===id)

        if(!taskUser) throw new Error("Task not found");
        taskUser.task.title = title
        taskUser.task.description = description
        res.send({usersTasks})
    } catch (error) {
        console.error(error.massage)  
        
    }
}



export const updateTaskStatus = (req, res)=>{
    try {
        const {status,id} = req.body
        if(!status||!id) throw new Error("Please complete all details");
        const taskUser = usersTasks.find(element=>element.task.id===id)

        if(!taskUser) throw new Error("Task not found");
        taskUser.task.status = status
        res.send({usersTasks})
    } catch (error) {
        console.error(error.massage)  
        
    }
}