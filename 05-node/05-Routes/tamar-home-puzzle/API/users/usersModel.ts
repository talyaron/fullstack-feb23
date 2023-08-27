import { Task } from "../tasks/tasksModel";

export class User {
  name: string;
  tasks: Task[];
  id: string;

  constructor({ name }: { name: string }) {
    this.name = name;
    this.tasks = []; //initialize with an empty array

    // Call an async function using 'await'
    
    this.id = Math.random().toString();
  }
  //method
  addTasks(tasks:Task[]){
    this.tasks = [...this.tasks, ...tasks];
  }
}
