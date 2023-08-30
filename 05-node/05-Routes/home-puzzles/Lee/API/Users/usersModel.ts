export class User {
    email: string;
    password: string;

    id?: string;
    constructor({email, password}: {email: string, password:string}) {
      this.email = email;
      this.password = password;
      this.id = Math.random().toString();
    }
  }

  export const users: User[] = []
