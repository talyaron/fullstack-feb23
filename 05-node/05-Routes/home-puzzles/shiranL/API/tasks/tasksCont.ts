import { users,User } from '../users/usersModel';
import { TaskStatus , Task ,UserTasks,userTasks} from './tasksModel';

// export function getUserTasks(req: any, res: any) {
//     try {
//         res.send({ userTasks });
//     } catch (error) {
//         console.error(error);
//     }
// }

export function addUserTask(req: any, res: any) {
    try {
        const { title, description,id } = req.body; //get from client
        const user = users.find((user)=>user.id === id); // find user by id
        if(!user){
            throw new Error("user not found");
        }
        // create the task
        const newTask = new Task(title, description, TaskStatus.open);
        //if user already have tasks
        const userTask = userTasks.find((userTask)=>userTask.user.id === id);
        if(userTask){
            // push new task to user tasks
            userTask.tasks.push(newTask);
            res.send({success:true, userTasks });
        }
       else{
        const newUserTask = new UserTasks(user,[newTask]);
        userTasks.push(newUserTask);
        res.send({success:true, userTasks });
       }  
    } catch (error) {
        console.error(error);
    }
}