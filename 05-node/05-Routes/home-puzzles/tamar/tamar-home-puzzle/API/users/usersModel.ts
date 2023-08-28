export class User {
  name: string;
  id: string;

  constructor({ name }: { name: string }) {
    this.name = name;
    this.id = Math.random().toString();
  }
}

export const users: User[] = [
  new User({name:"Tamar"}),
  new User({name:"Amir"}),
  new User({name:"Sivan"}),
  new User({name:"Ofir"}),
  new User({name:"Eliya"})
];