import { Schema, model } from "mongoose";

export const PhysicianSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  phoneNum: String,
  email: String,
  licenseNumber: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
});

export const PhysicianModel = model("physicians", PhysicianSchema);