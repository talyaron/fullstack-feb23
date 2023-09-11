import {Schema, model} from 'mongoose';

//define user schema
export const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
  });

  // Method to compare a plain text password with the hashed password in the database

  //users collection in the DB
  export const UserModel = model("users", UserSchema)