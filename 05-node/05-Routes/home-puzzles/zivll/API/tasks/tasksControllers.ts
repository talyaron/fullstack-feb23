import { Task } from "./tasksModel";
const tasks: Task[] = [];
export const getTasks = (req: any, res: any) => {
  try {
    res.send({ tasks });
  } catch (error) {
    console.error(error);
  }
};
export const addTasks = (req: any, res: any) => {
  const task = req.body;
  console.log(task);
};
export const deleteTasks = (req: any, res: any) => {};
export const updateTasks = (req: any, res: any) => {};
