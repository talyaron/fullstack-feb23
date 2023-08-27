import { Task } from "./taskModel";

let tasks: Task[] = [];

export const addTask = (req, res) => {
  const { name, time } = req.body;
  const newTask = new Task(name, time);
  tasks.push(newTask);
  res.send({ newTask });
};

export const removeTask = (req, res) => {
  const { taskId } = req.body;
  tasks = tasks.filter((task) => task.id != taskId);
  res.send({ tasks });
};

export const updateTask = (req, res) => {
  const { inputChange, inputValue, taskId } = req.body;
  const thisTask = tasks.find((task) => task.id == taskId);
  if (inputChange == "taskNameInList") thisTask.name = inputValue;
  if (inputChange == "isDone") thisTask.isDone = !thisTask.isDone;
  else thisTask.time = inputValue;

  res.send({ tasks });
};

export const getAllDoneTasks = (req, res) => {
  const doneTasks = tasks.filter((task) => task.isDone);
  console.log(doneTasks);

  res.send({ doneTasks });
};

export const getAllTask = (req, res) => {
  res.send({ tasks });
};
