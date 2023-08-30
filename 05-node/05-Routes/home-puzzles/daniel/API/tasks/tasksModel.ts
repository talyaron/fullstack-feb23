export interface _Task{
    title: string;
    description: string;
    status: string;
    id? :string;
}

export class Task {
    title: string;
    description: string;
    status: string;
    id:string;
    constructor({title, description, status}: _Task){
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString();
    }
}

// If I want to use the another way for updating:
// export const update_Task = Task;