import { User } from "../users/userModel";

export enum TaskStatus {
  done = "done",
  todo = "todo",
}

export class Task {
  id: string;
  constructor(
    public title: string,
    public description: string,
    public status: TaskStatus
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  changeStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  }
}

export const tasks: Task[] = [];

// export class UserTasks {
//   id: string;
//   constructor(public user: User, public task: Task) {
//     this.id = Math.random().toString(36).substr(2, 9);
//   }
// }

// export const userTasks: UserTasks[] = [];

//join collection (class)

export class UserTasks{
    id:string
    constructor(public user:User,public task:Task){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}   

export const userTasks:UserTasks[] = [];