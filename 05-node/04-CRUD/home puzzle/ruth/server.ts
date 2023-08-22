import { bodyParser } from "body-parser";
import express from "express";
const app = express();
const port = process.env.PORT || 3001;

class Task {
  id: number;

  constructor(
    public name: string,
    public time: string,
    public isDone: boolean = false,
  ) {
    this.id = Date.now();
  }
}

let tasks: Task[] = [];

//static files
app.use(express.static("public"));
app.use(express.json());

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
  if (inputChange == "taskNameInList") thisTask.name = inputValue;
  if (inputChange == "isDone") thisTask.isDone = !thisTask.isDone;
  else thisTask.time = inputValue;

  res.send({ tasks });
});

app.get("/API/get-all-done-tasks", (req, res) => {
  const doneTasks = tasks.filter((task) => task.isDone);
  console.log(doneTasks);

  res.send({ doneTasks });
});

app.get("/API/get-all-tasks", (req, res) => {
  res.send({ tasks });
});
