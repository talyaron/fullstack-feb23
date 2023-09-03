export class User {
  id: string;
  email: string;
  password: string;
  admin?: boolean;
  constructor(email: string, password: string, admin?: boolean) {
    this.email = email;
    this.password = password;
    this.admin = admin || false;
    this.id = Math.random().toString(36).substring(2);
  }
}
export const users: User[] = [new User("zivll1991@gmail.com", "1111", true)];
