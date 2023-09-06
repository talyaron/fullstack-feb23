
export enum TaskStatus {
    done = "done",
    todo = "todo",
}


export class Task {
    id?: string;
    constructor(
        public title: string,
        public description: string,
        public status: TaskStatus
    ) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}

export const tasks: Task[] = []