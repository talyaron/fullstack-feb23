export class User {
  id: string;
  constructor(public email: string, public password: string) {
    this.id = Math.random().toString(36).substring(2);
    this.email = email;
    this.password = password;
  }
}
export const users: User[] = [];
