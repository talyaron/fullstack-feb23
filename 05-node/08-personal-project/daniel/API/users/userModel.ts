// import mongoose from 'mongoose';
// import Schema from 'mongoose';
import { Schema,model } from "mongoose";


export const UserSchema = new Schema({
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
export const User = model("User", UserSchema)


