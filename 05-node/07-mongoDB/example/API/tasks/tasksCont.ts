import { users } from '../users/userModel';
import { tasks, TaskStatus, Task, userTasks, UserTasks, TaskModel } from './tasksModel';

export async function getTasks(req: any, res: any) {
    try {
        const tasksDB = await TaskModel.find({});
        res.send({ tasks: tasksDB });
    } catch (error) {
        console.error(error);
    }
}

export async function addTask(req: any, res: any) {
    try {
        const { title, description, email } = req.body;
       
        if (!title || !description) throw new Error("Please complete all fields");
        if (!email) throw new Error("no email");
        //add task using mongoose
        const task = new TaskModel({ title, description, email });
        const taskDB = await task.save();
        console.log(taskDB);
        // const newTask = new Task(title, description, TaskStatus.todo);
        // tasks.push(newTask);


        //find user
        // const user = users.find((user: any) => user.email === email);
        // if (!user) throw new Error("user not found");

        // userTasks.push(new UserTasks(user, newTask));
        // console.log(userTasks);
        // const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);

        // const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user

        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function deleteTask(req: any, res: any) {
    try {
        const { id } = req.body;
        const taskDB = await TaskModel.findByIdAndDelete(id);

        // const index = tasks.findIndex((task) => task.id === id);
        // if (index === -1) {
        //     throw new Error("task not found");
        // }
        // tasks.splice(index, 1);
        res.send({ taskDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updateTaskStatus(req: any, res: any) {
    try {
        const { id, status } = req.body;
        //find current tasks status
        const task = await TaskModel.findById(id);
        if (!task) throw new Error("task not found");

        //update task status
        const {status:_status} = task;

        //@ts-ignore
        if (_status === "done") {
            //update to todo
            const taskDB = await TaskModel.findByIdAndUpdate(id, { status: TaskStatus.todo }, { new: true });
            res.send({ taskDB });
        } else {
            //update to done
            const taskDB = await TaskModel.findByIdAndUpdate(id, { status: TaskStatus.done }, { new: true });
            res.send({ taskDB });
        }

        // const index = tasks.findIndex((task) => task.id === id);
        // if (index === -1) {
        //     throw new Error("task not found");
        // }
        // if (status !== TaskStatus.done && status !== TaskStatus.todo) {
        //     throw new Error("status not valid");
        // }
        // tasks[index].changeStatus(status);
        // res.send({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function getUserTasks(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        //get user tasks
        // const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);
        // const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user

        const tasksDB = await TaskModel.find({ email });
        res.send({ tasks: tasksDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}