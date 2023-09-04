import { tasks, Task } from "./taskModel";


export function getTask(req: any, res: any) {
    try {
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
}

export function addTask(req: any, res: any) {
    try {
        const { title, description } = req.body;
        console.log({ title, description })
        if (!title || !description) throw new Error("Please complete all fields");

        const newTask = new Task(title, description, TaskStatus.todo);
        tasks.push(newTask);

    } catch (error) {
        console.error(error);

    }
}
