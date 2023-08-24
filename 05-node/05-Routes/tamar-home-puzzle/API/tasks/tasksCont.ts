import { compileString } from "sass";
import { Task } from "./tasksModel";

let tasks: Task[] = [];

//the cintrollers:
//add task to server
export const addTask = (req: any, res: any) => {
    try {
        const task: Task = req.body; //tack data from user
        console.log(task);
        if (!task) throw new Error("no req.body task found");        
        tasks.push(new Task(task)); //server add the task to tasks array
        console.log(tasks);
        res.send({ tasks }) //server send update array to client
    } catch (error) {
        console.error(error);
    }
}

//get all tasks from server
export const getTasks = (req: any, res: any) => {
    try {
        res.send({ tasks });
    } catch (error) {
        console.error(error); 
    }
}

//update specific task
export const updateTaskStatus = (req: any, res: any) => {
    try {
        const { status, id } = req.body; //get knew status from user and req to update it in the specific task
        console.log(req.body);
        if (!status || !id) throw new Error("please fill status field");
        const task = tasks.find((task) => task.id === id);
        if (!task) throw new Error("no task match found");
        task.status = status; //update the status
        res.send({tasks}) //server send the updated array to client
    } catch (error) {
        console.error(error);
    }
}

//delete specific task
export const deleteTask = (req: any, res: any) => {
   try {
    const { id } = req.body;
    console.log(id);
    tasks = tasks.filter((task) => task.id !== id);
    res.send({ tasks });
   } catch (error) {
    console.error(error);
    res.send({error})
   } 
}
