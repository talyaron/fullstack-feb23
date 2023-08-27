export class Task {
  id: string;
  title: string;
  description: string;
  status: string;
  constructor({
    title,
    description,
    status,
  }: {
    title: string;
    description: string;
    status: string;
  }) {
    this.id = Math.random().toString(36);
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
