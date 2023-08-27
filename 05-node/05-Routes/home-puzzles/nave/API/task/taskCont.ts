import { Task } from "./taskModel";

let tasks: Task[] = [
    new Task ({title:"test", description:"tevst", status:"bla"})
];

//add product controler
export const addTask = (req: any, res: any) => {
    const task: Task = req.body;
    console.log(task);
    //add to products array
    tasks.push(new Task(task)); // --> add to Database
    console.log(tasks);
    res.send({ task });
};

//get products
export const getTask = (req, res) => {
    try {
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
};

export const deleteTask = (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        tasks = tasks.filter((task) => task.id !== id);
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateTaskDecription = (req: any, res: any) => {
    try {
        const { decription, id } = req.body;
        console.log(req.body);
        if (!decription || !id) throw new Error("Please complete all fields");
        const task = tasks.find((task) => task.id === id);

        if (!tasks) throw new Error("Product not found");
        task.description = decription;
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}

export const updateTaskStatus = (req: any, res: any) => {
    try {
        const { status, id } = req.body;
        console.log(req.body);
        if (!status || !id) throw new Error("Please complete all fields");
        const task = tasks.find((task) => task.id === id);

        if (!tasks) throw new Error("task not found");
        task.status = status;
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.send({ error });
    }
}




