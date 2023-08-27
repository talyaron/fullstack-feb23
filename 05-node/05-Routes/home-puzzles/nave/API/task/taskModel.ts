export class Task {
    title: string;
    description: string;
    status: string;
    id: string;
    constructor({ title, description, status }: {title:string, description:string, status:string}) {
      this.title = title;
      this.description = description;
      this.status = status;
      this.id = Math.random().toString();
    }
  };