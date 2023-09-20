// import mongoose from 'mongoose';
// import Schema from 'mongoose';
import { Schema,model } from "mongoose";


export const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});
// Model like an instance from a class and the "User"-is a class
export const User = model("User", UserSchema)
module.exports = {
    UserSchema:UserSchema,
    users: [
        {id:1, userName:'tovdaniel',email: 'tov@gmail.com', isAdmin:true}
    ]
}

