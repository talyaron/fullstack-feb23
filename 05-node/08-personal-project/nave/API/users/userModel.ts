import { Schema, model } from 'mongoose';
export class User{
    email:string;
    password:string;
    constructor ({email,password}: {email:string , password:string}){
        this.email = email;
        this.password = password;

    }}
    export const users:User[] = []
    export const UserSchema = new Schema({
        email: String, // String is shorthand for {type: String}
        password: String,
      });
      //"users" is the name of the collection in the DB
      export const UserModel = model("users", UserSchema)
     