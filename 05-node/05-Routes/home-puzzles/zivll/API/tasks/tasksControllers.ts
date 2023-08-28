import { Task, tasks, taskStatus } from "./tasksModel";

export const getTasks = (req: any, res: any) => {
  try {
    res.send({ tasks });
  } catch (error) {
    console.error(error);
  }
};
export const addTasks = (req: any, res: any) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task(title, description, taskStatus.todo);
    tasks.push(newTask);
    console.log(tasks);

    res.send({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const deleteTasks = (req: any, res: any) => {
  try {
    const { id } = req.body;
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error(`index not found`);
    tasks.splice(index, 1);
    res.send({ message: `task id-${id} deleted successfully`, tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const updateTasks = (req: any, res: any) => {
  try {
    const { id, status } = req.body;
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error(`index or id is not exist`);
    if (status !== taskStatus.done && status !== taskStatus.todo)
      throw new Error("status is not valid");
    tasks[index].changeStatus(status);
    res.send({ tasks });
  } catch (error) {
    console.error(error);
  }
};
