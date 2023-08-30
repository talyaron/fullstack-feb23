import { users } from '../users/userModel';
import { tasks, TaskStatus, Task, userTasks, UserTasks } from './tasksModel';

export function getTasks(req: any, res: any) {
    try {
        res.send({ tasks });
    } catch (error) {
        console.error(error);
    }
}

export function addTask(req: any, res: any) {
    try {
        const { title, description, email } = req.body;
        console.log({ title, description, email })
        if (!title || !description) throw new Error("Please complete all fields");
        if (!email) throw new Error("no email");

        const newTask = new Task(title, description, TaskStatus.todo);
        tasks.push(newTask);

        //find user
        const user = users.find((user: any) => user.email === email);
        if (!user) throw new Error("user not found");

        userTasks.push(new UserTasks(user, newTask));
        console.log(userTasks);
        const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);

        const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user

        res.send({ tasks: _tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function deleteTask(req: any, res: any) {
    try {
        const { id } = req.body;
        const index = tasks.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error("task not found");
        }
        tasks.splice(index, 1);
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function updateTaskStatus(req: any, res: any) {
    try {
        const { id, status } = req.body;
        const index = tasks.findIndex((task) => task.id === id);
        if (index === -1) {
            throw new Error("task not found");
        }
        if (status !== TaskStatus.done && status !== TaskStatus.todo) {
            throw new Error("status not valid");
        }
        tasks[index].changeStatus(status);
        res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function getUserTasks(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        //get user tasks
        const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);
        const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user

        res.send({ tasks: _tasks });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}