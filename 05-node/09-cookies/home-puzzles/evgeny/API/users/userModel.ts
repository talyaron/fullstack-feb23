import { Schema, model } from 'mongoose';

export const UserSchema=new Schema({
    email:String,
    password:String,

});

export const UserModel=model("users",UserSchema)

// export const users=[];