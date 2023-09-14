import { Schema, model } from "mongoose";

export class User {
    userName: string;
    email: string;
    password: string;
    id: string;

    constructor({userName, email, password}: {userName: string, email: string, password: string}){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this. id = Math.random().toString();
    }
}

//define schema

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
    }
});

//"users" will be the name of this collection in the DB
export const UserModel = model("users", UserSchema)

export const users: User[] = [];