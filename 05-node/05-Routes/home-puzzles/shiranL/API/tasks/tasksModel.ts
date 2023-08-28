//usersModel.ts

import { User } from "../users/usersModel";

export enum TaskStatus {
    open = "open",
    inProgress = "inProgress",
    done = "done"
}
export class Task {
    id: string
    constructor(public titel: string, public discripton: string,public status:TaskStatus)
     {
        this.id = Math.random().toString()
     }
}

export class UserTasks{
    id:string
    constructor(public user:User ,public tasks:Task[]){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}
export const userTasks:UserTasks[] = [];