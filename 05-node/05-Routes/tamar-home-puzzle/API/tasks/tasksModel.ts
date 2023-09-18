export class Task {
    title: string;
    description: string;
    status: string;
    id: string;
    constructor({ title, description }: {title:string, description: string}) {
      this.title = title;
      this.description = description;
      this.status = "To-Do" ;
      this.id = Math.random().toString();
    }    
  }
