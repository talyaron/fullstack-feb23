export class User {
    name: string;
    email: string;
    password: string;
    id?: string;
    constructor(name, email, password, id?) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.id = Math.random().toString();
    }
  }

  export const tasks: User[] = [new User("Lee Dee", "leedee@gmail.com", "Oscardelarente777")]