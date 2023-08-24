import { Task, tasks } from "./tasksModels"

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