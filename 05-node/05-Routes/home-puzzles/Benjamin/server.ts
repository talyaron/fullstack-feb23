import express from "express";
const app = express();

class Task {
    title: string;
    category: string;
    status: string;
    id: string;

    constructor({ title, category, status, id }) {
        this.title = title;
        this.category = category;
        this.status = status;
        this.id = id;
    }
}


app.use(express.static(("public")));
app.use(express.json());



let tasks: Task[] = [];

app.post("/API/add-task", (req: any, res: any) => {
    const task: Task = req.body;
    task.id = Math.random().toString();
    tasks.push(new Task(task));
    res.send({ task });
})

app.get("/API/get-tasks", (req: any, res: any) => {
    try {
        res.send({ tasks })
    } catch (error) {
        console.error(error);
    }
})
//update status

app.patch("/API/change-status", (req: any, res: any) => {
    try {
        debugger;
        const { id, status } = req.body;
        if (!id) throw new Error("no id!");
        if (!status ) throw new Error("no status!");
        console.log(tasks)
        console.log(id)
        const task: Task = tasks.find((task) => task.id == id);
        if (!task) throw new Error("Task not found");
        task.status = status;
        console.log(task, status);
        const previousID = id;
        task.id = Math.random().toString();
        res.send({ task , previousID })
        
    } catch (error) {
        console.error(error);
    }
})

app.delete("/API/delete-task", (req:any, res:any) => {
   try {
        const { id } = req.body;

        tasks = tasks.filter(task => task.id !== id);

        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
})





app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
