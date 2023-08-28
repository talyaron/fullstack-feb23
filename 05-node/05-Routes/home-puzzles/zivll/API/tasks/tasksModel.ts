export const enum taskStatus {
  todo = "todo",
  done = "done",
}

export class Task {
  id: string;
  constructor(
    public title: string,
    public description: string,
    public status: taskStatus
  ) {
    this.id = Math.random().toString(36).substring(2);
  }
  changeStatus(newStatus: taskStatus) {
    this.status = newStatus;
  }
}
export const tasks: Task[] = [];
