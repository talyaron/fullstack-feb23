import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
export const UserSchema = new Schema({ email: String, password: String });
export const USerModel = model("users", UserSchema);
export class User {
  email: string;
  password: string;
  id: string;

  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }
}
export default UserSchema;
export const users: User[] = [];
