import { User } from "../users/userModel";
import {Schema, model} from 'mongoose';

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

//join collection (class)

export class UserTasks{
    id:string
    constructor(public user:User,public task:Task){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}   

export const userTasks:UserTasks[] = [];

export const TaskSchema= new Schema({
  title: String,
  description: String,
  email: String,
  status:{
    type: String,
    enum: [TaskStatus],
    default: TaskStatus.todo
  }
}) 

export const TaskModel= model("tasks", TaskSchema)