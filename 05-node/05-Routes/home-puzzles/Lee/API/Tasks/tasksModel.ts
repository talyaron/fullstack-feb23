export class Task {
    title: string;
    description: string;
    status: string;
    id?: string;
    constructor(title, description, status, id?) {
      this.title = title;
      this.description = description;
      this.status = status;
      this.id = Math.random().toString();
    }
  }

  export const tasks: Task[] = [new Task("Walk the dog", "take a walk with the dog", "to-do")]