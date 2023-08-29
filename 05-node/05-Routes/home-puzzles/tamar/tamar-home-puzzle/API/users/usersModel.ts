export class User {
  name: string;
  password: string;
  id: string;

  constructor({ name, password }: { name: string, password: string }) {
    this.name = name;
    this.password = password;
    this.id = Math.random().toString();
  }
}

export const users: User[] = [];

// export const users: User[] = [
//   new User({name:"Tamar"}),
//   new User({name:"Amir"}),
//   new User({name:"Sivan"}),
//   new User({name:"Ofir"}),
//   new User({name:"Eliya"})
// ];