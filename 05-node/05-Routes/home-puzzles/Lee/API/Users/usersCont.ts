import { Task } from "./usersModel";


let tasks: User[] = [];

export const addTasks = (req: any, res: any) => {
    const task: Task = req.body;
    console.log(task);
    tasks.push(new Task(task.title, task.description, task.status, task.id)); // --> add to Database
    console.log(tasks);
    res.send({task});
}

export const getTasks = (req, res) => {
    try {
        res.send({tasks});
    } catch (error) {
        console.error(error);
    }
}

export const deleteTask = (req: any, res: any) => {
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

  export const updateTaskStatus = (req: any, res: any) => {
    try {
      const { status, id } = req.body;
      console.log(req.body);
      if (!status || !id) throw new Error("Please complete all fields");
      const task = tasks.find((task) => task.id === id);
  
      if (!task) throw new Error("Product not found");
      task.status = status;
      res.send({ tasks });
    } catch (error) {
      console.error(error);
      res.send({ error });
    }
  }
