     
import { Schema, model } from 'mongoose';


export const UserSchema = new Schema({
    email: String, // String is shorthand for {type: String}
    password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
});

export const UserModel = model("Users", UserSchema);

     