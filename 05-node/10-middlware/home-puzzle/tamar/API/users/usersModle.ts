import { Schema, model } from "mongoose";
import { isAdmin } from "./usersCont";

export class User {
    userName: string;
    email: string;
    password: string;
    id: string;
    isAdmin: string;

    constructor({userName, email, password}: {userName: string, email: string, password: string}){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this. id = Math.random().toString();
    }
}

//define user schema

export const UserSchema = new Schema({
    userName: String,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
      },
});

//"users" will be the name of this collection in the DB
export const UserModel = model("users", UserSchema)

export const users: User[] = [];