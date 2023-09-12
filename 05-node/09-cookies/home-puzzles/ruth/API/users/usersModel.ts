import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

const UserModel = model("users", UserSchema);
export default UserModel;
