import { Schema, model } from 'mongoose';

//define user schema
export const UserSchema = new Schema({
    email: String,
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


  //users collection in the DB
  export const UserModel = model("users", UserSchema)