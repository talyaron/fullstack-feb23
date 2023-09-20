import {Schema, model} from 'mongoose';

export class User {
  email: string;
  password: string;
  id?: string;
  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
    this.id = Math.random.toString();
  }
}

export let users: User[] = [];

//mongoDB
export const UserSchema= new Schema({
  email: String,
  password: String  
})

export const UserModel= model("usersPro",UserSchema)