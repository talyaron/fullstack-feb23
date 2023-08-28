import { User } from "../users/usersModel";
import { Task} from "../tasks/tasksModel";


export class UserTasks{
    id:string
    constructor(public user:User,public tasks:Task[]){
        this.id = Math.random().toString(36);
    }
}   

export const userTasks:UserTasks[] = [];