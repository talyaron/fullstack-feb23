"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3001;
class Task {
    constructor(name, time, isDone = false) {
        this.name = name;
        this.time = time;
        this.isDone = isDone;
        this.id = Date.now();
    }
}
let tasks = [];
//static files
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`app run at port ${port}`);
});
app.post("/API/add-task", (req, res) => {
    const { name, time } = req.body;
    const newTask = new Task(name, time);
    tasks.push(newTask);
    res.send({ newTask });
});
app.delete("/API/delete-task", (req, res) => {
    const { taskId } = req.body;
    tasks = tasks.filter((task) => task.id != taskId);
    res.send({ tasks });
});
app.patch("/API/patch-task", (req, res) => {
    const { inputChange, inputValue, taskId } = req.body;
    const thisTask = tasks.find((task) => task.id == taskId);
    if (inputChange == "taskName")
        thisTask.name = inputValue;
    if (inputChange == "isDone")
        thisTask.isDone = !thisTask.isDone;
    else
        thisTask.time = inputValue;
    res.send({ tasks });
});
