// import { Task } from "./tasksModels"
class Task {
    id: string
    constructor(
        public user: string,
        public title: string,
        public description: string,
        public status: string
    ) {
        this.id = Math.random().toString()
    }
}

let tasks: Task[] = [
    new Task('eli', 'test', 'it`s work?', 'toDo')
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
        res.send({ tasks })
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

export const updateTask = (req, res)=>{
    try {
        const {title,description,id} = req.body
        if(!title||!description||!id) throw new Error("Please complete all details");
        const task = tasks.find((task)=>task.id===id)

        if(!task) throw new Error("Task not found");
        task.title = title
        task.description = description
        res.send({tasks})
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
        res.send({tasks})
    } catch (error) {
        console.error(error.massage)  
        
    }
}