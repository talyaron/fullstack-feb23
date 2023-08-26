"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
class Task {
    constructor({ title, category, status, id }) {
        this.title = title;
        this.category = category;
        this.status = status;
        this.id = id;
    }
}
app.use(express_1.default.static(("public")));
app.use(express_1.default.json());
let tasks = [];
app.post("/API/add-task", (req, res) => {
    const task = req.body;
    task.id = Math.random().toString();
    tasks.push(new Task(task));
    res.send({ task });
});
app.get("/API/get-tasks", (req, res) => {
    try {
        res.send({ tasks });
    }
    catch (error) {
        console.error(error);
    }
});
//update status
app.patch("/API/change-status", (req, res) => {
    try {
        debugger;
        const { id, status } = req.body;
        if (!id)
            throw new Error("no id!");
        if (!status)
            throw new Error("no status!");
        console.log(tasks);
        console.log(id);
        const task = tasks.find((task) => task.id == id);
        if (!task)
            throw new Error("Task not found");
        task.status = status;
        console.log(task, status);
        const previousID = id;
        task.id = Math.random().toString();
        res.send({ task, previousID });
    }
    catch (error) {
        console.error(error);
    }
});
app.delete("/API/delete-task", (req, res) => {
    try {
        const { id } = req.body;
        tasks = tasks.filter(task => task.id !== id);
        res.send({ tasks });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
