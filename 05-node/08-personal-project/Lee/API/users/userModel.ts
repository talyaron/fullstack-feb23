import { Schema, model } from 'mongoose';


export class User {
  email: string;
  password: string;
  id: string;

  constructor({ email, password}: { email: string, password: string }) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }
}



export const UserSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
});

export const UserModel = model("users", UserSchema)
   
export const users: User[] = [];