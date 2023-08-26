import { Task } from "./tasksModels"

let tasks: Task[] = [
    new Task('eli', 'test', 'it`s work?', 'TO-DO')
]

export const getTasks = (req, res) => {
    try {
        res.send({ tasks })
    } catch (error) {
        console.error(error.massage)
    }
}

export const addTask = (req, res) => {
    try {
        const task: Task = req.body;
        tasks.push(new Task(task.user, task.title, task.description, task.status))
        res.send({ task })
    } catch (error) {
        console.error(error.massage)

    }
}

export const deleteTask = (req, res) => {
    try {
        const { id } = req.body
        tasks = tasks.filter((task) => task.id !== id)
        res.send({ tasks })
    } catch (error) {
        console.error(error.massage)

    }
}

export const updateTaskTitle = (req, res)=>{
    try {
        const {title,id} = req.body
        if(!title||!id) throw new Error("Please complete all details");
        const task = tasks.find((task)=>task.id===id)

        if(!task) throw new Error("Task not found");
        task.title = title
        res.send({task})
    } catch (error) {
        console.error(error.massage)  
        
    }
}

export const updateTaskDescription = (req, res)=>{
    try {
        const {description,id} = req.body
        if(!description||!id) throw new Error("Please complete all details");
        const task = tasks.find((task)=>task.id===id)

        if(!task) throw new Error("Task not found");
        task.description = description
        res.send({task})
    } catch (error) {
        console.error(error.massage)  
        
    }
}

export const updateTaskStatus = (req, res)=>{
    try {
        const {status,id} = req.body
        if(!status||!id) throw new Error("Please complete all details");
        const task = tasks.find((task)=>task.id===id)

        if(!task) throw new Error("Task not found");
        task.status = status
        res.send({task})
    } catch (error) {
        console.error(error.massage)  
        
    }
}