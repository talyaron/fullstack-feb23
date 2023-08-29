import { User } from "../users/userModels";

export enum TaskStatus {
    toDo = "toDo",
    doing = "doing",
    done = "done"
}

export class Task {
    id: string
    constructor(
        public title: string,
        public description: string,
        public status: TaskStatus
    ) {
        this.id = Math.random().toString(36).substr(2, 9);
    }
}


export const tasks: Task[] = []

export class UserTasks{
    id:string
    constructor(public user:User,public task:Task){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}  

export const usersTasks:UserTasks[]=[]