import { users,User } from '../users/usersModel';
import { TaskStatus , Task ,UserTasks,userTasks} from './tasksModel';
import { Request, Response } from 'express'; 

// export function getUserTasks(req: any, res: any) {
//     try {
//         res.send({ userTasks });
//     } catch (error) {
//         console.error(error);
//     }
// }
//controller addUserTask
export function addUserTask(req: any, res: any) {
    try {
        const { title, description, id } = req.body; // get from client
        const user = users.find((user) => user.id === id); // find user by id
        if (!user) {
            res.status(404).send({ success: false, message: "User not found" });
            return;
        }
        // create the task
        const newTask = new Task(title, description, TaskStatus.open);
        // if user already has tasks
        const userTask = userTasks.find((userTask) => userTask.user.id === id);
        if (userTask) {
            // push new task to user tasks
            userTask.tasks.push(newTask);
            res.send({ success: true, userTasks });
        } else {
            const newUserTask = new UserTasks(user, [newTask]);
            userTasks.push(newUserTask);
            res.send({ success: true, userTasks });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
}

// Controller function to get user tasks
export function getUserTasks(req: any, res: any) {
    try {
        // Retrieve user tasks based on the user's ID or any other identifier
        const userId = req.params.userId; // Modify this to get the user ID
        const userTask = userTasks.find((userTask) => userTask.user.id === userId);

        if (!userTask) {
            res.status(404).send({ success: false, message: 'User tasks not found', userTasks: [] });
            return;
        }

        res.send({ success: true, userTasks: userTask.tasks });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}
