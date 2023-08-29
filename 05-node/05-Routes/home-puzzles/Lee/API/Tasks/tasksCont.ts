import {tasks, TaskStatus, Task} from "./tasksModel";

export function getTasks(req:any, res:any) {
  try {
    res.send({tasks})
  } catch (error) {
    console.error(error)
  }
}


export function addTask(req: any, res: any) {
  try {
      const { title, description } = req.body;
      const newTask = new Task(title, description, TaskStatus.todo);

      tasks.push(newTask);
      res.send({ tasks });
  } catch (error) {
      console.error(error);
  }
}

// export const getTasks = (req, res) => {
//     try {
//         res.send({tasks});
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const deleteTask = (req: any, res: any) => {
//     try {
//       const { id } = req.body;
//       console.log(id);
//       tasks = tasks.filter((task) => task.id !== id);
//       res.send({ tasks });
//     } catch (error) {
//       console.error(error);
//       res.send({ error });
//     }
//   }

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
