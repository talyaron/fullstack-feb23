export class User {
  name: string;
  id: string;

  constructor({ name }: { name: string }) {
    this.name = name;
    this.id = Math.random().toString();
  }
}
