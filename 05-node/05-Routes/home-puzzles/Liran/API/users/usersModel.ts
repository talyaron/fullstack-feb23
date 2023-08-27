import { Task } from '../task/taskModel';

export class User {
    taskList: Task[] = [];
    id?: string;
    constructor(public userName: string, public password: string, public phoneNumber: string, public email: string) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}