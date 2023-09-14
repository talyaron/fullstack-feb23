import { Schema, model } from "mongoose";

export class User {
    id: string;
    constructor(public name: string, public email: string, public password: string) {
        this.id = Math.random().toString()
    }
}

export const users: User[] = []

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
})

export const UserModel = model("users", UserSchema)