import {Task} from "./model";

let tasks: Task[] = [new Task("ksjdvnksjvb","ksjdvnks")];

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
        tasks.push(new Task(task.text, task.id))
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

export const updateTaskDescription = (req, res)=>{
    try {
        const {description,id} = req.body
        if(!description||!id) throw new Error("Please complete all details");
        const task = tasks.find((task)=>task.id===id)

        if(!task) throw new Error("Task not found");
        task.text = description
        res.send({tasks})
    } catch (error) {
        console.error(error.massage)  
        
    }
}

