import { Task } from "../tasks/tasksModel";
import { getTasks } from "../../public/index";
export class User {
  name: string;
  tasks: Task[];
  id: string;

  constructor({ name }: { name: string }) {
    this.name = name;
    this.tasks = []; //initialize with an empty array

    // Call an async function using 'await'
    (async () => {
      try {
        const tasks = await getTasks(); // Assuming getTasks() returns tasks
        this.tasks = tasks;
      } catch (error) {
        console.error(error);
      }
    })();

    this.id = Math.random().toString();
  }
}
