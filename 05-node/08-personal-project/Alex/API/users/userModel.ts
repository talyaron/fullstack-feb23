import mongoose from 'mongoose';
const { Schema , model} = mongoose ;

export const UserSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  userName: String,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // }
});

export const UserModel = model("users",UserSchema)

// export default UserModel;

export class User {
  email: string;
  password: string;
  id: string;

  constructor({ email, password}: { email: string, password: string }) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }
}

export const users: User[] = [];