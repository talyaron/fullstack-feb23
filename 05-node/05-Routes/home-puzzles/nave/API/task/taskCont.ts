import { tasks, TaskStatus, Task } from './taskModel';

export function getTasks(req: any, res: any) {
    try {
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
}

export function addTask(req: any, res: any) {
    try {
        const { title, description } = req.body;
        const newTask = new Task(title, description, TaskStatus.todo);

        tasks.push(newTask);
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
}

export function deleteTask(req: any, res: any) {
    try {
        const { id } = req.body;
        const index = tasks.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error("task not found");
        }
        tasks.splice(index, 1);
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }   
}

export function updateTaskStatus(req: any, res: any) {
    try {
        const {id, status} = req.body;
        const index = tasks.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error("task not found");
        }
        if(status !== TaskStatus.done && status !== TaskStatus.todo){
            throw new Error("status not valid");
        }
        tasks[index].changeStatus(status);
        res.send({ tasks });
    } catch (error) {
        
    }
}