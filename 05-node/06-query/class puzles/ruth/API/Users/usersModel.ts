export class User {
  email: string;
  password: string;
  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
  }
}


export const users: User[] = [
  new User({email:"manager@manager.com",password:"1234567890"})
]