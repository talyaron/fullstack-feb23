import { Task } from "../tasks/taskModel";

export class User{
  constructor(public email: string, public password: string) {}
}

export class UserTasks{
    constructor(public user:User, public tasks:Task[] = []){}
}
