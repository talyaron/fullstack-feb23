import { Schema, model } from 'mongoose';

export const UserSchema = new Schema({
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
      },
      isLogOn: {
        type: Boolean,
        default: false
      }
  });
  //users collection in the DB
  export const UserModel = model("users", UserSchema)