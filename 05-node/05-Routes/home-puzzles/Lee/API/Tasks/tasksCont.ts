import { users } from '../Users/usersModel';
import { tasks, TaskStatus, Task, userTasks, UserTasks } from './tasksModel';

export function getTasks(req: any, res: any) {
  try {
    res.send({ tasks })
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



export const deleteTask = (req: any, res: any) => {
    try {
      const { id } = req.body
      const index = tasks.findIndex((task) => task.id === id)
      if (index === -1) {
        throw new Error("task not found")
      }
      tasks.splice(index, 1)
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


export function getUserTasks(req: any, res: any) {
  try {

    const { email } = req.query
    if (!email) {
      throw new Error("email is required")
    }

    const _userTasks = userTasks.filter((usertask) => usertask.user.email === email)
    const _tasks = _userTasks.map((usertask) => usertask.task)

    res.send({ tasks: _tasks })

  } catch (error) {
    console.error(error)
    res.status(500).send({error: error.message})
  }
}