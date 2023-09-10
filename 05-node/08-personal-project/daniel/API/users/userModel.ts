// import { Schema,model } from "mongoose";
import mongoose from 'mongoose';
import Schema from 'mongoose';


// export class UserClass {
//     email: string;
//     password: string;
//     id: string;

//     constructor({ email, password}:{email:string;
//         password: string;}){
//         this.email = email;
//         this.password = password;
//         this.id = Math.random().toString();
//     }
// }

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    }
});
// Model like an instance from a class and the "User"-is a class
export const User = mongoose.model("User", UserSchema)

// export const users: UserClass[] =[]
