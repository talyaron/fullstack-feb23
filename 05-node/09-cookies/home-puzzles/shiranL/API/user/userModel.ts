import { Schema, model } from 'mongoose';

//define user schema
export const UserSchema = new Schema({
    email:{
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
      },
      isLoggedIn: {
        type: Boolean,
        default: false
      }
  });

  // Method to compare a plain text password with the hashed password in the database

  //users collection in the DB
  export const UserModel = model("users", UserSchema)