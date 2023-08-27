import { Task } from "./taskModel";
import { users } from "../users/usersCont";

let tasks: Task[] = [
    // new user("Google", "054-1234567", 100, [])
];

//add Task controler
export const addTask = (req: any, res: any) => {
    try {
        const { title, description, status, id } = req.body;
        if (!title || !description || !status || !id) throw new Error("Please complete all fields");
        //add to users array
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const task: Task = { title: title, description: description, status: status };
        user.taskList.push(task); // --> add to Database
        const list = user.taskList;
        res.send({ list });
    } catch (error) {
        console.error(error);
    }
}

//get users
export const getTasks = (req, res) => {
    try {
        const { id } = req.query;
        if (!id) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const tasks = user.taskList;
        debugger;
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
}

export const deleteTask = (req, res) => {
    try {
        const { title, id } = req.body;
        if (!id || !title) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.taskList.findIndex((task) => task.title === title);
        if (indx === -1) throw new Error("Task not found");
        user.taskList.splice(indx, 1);
        const list = user.taskList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateTask = (req: any, res: any) => {
    try {
        const { title, newDescription, id } = req.body;
        if (!id || !title || !newDescription) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.taskList.findIndex((task) => task.title === title);
        if (indx === -1) throw new Error("task not found");
        user.taskList[indx].description = newDescription;
        const list = user.taskList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export const updateTaskStatus = (req: any, res: any) => {
    try {
        const { title, newStatus, id } = req.body;
        if (!id || !title || !newStatus) throw new Error("Please complete all fields");
        const user = users.find((user) => user.id === id);
        if (!user) throw new Error("user not found");
        const indx = user.taskList.findIndex((task) => task.title === title);
        if (indx === -1) throw new Error("task not found");
        user.taskList[indx].status = newStatus;
        const list = user.taskList;
        res.send({ list });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
