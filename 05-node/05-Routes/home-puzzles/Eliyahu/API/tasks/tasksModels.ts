export class Task {
    id: string
    constructor(public user: string, public title: string, public description:string, public status: string) {
        this.id = Math.random().toString()
    }
}
export const tasks: Task[] = [new Task('eli','test','it`s work?','TO-DO')]
