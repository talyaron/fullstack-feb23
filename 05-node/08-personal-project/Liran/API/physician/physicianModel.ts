import { Schema, model } from "mongoose";

export const PhysicianSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNum: Number,
    email: String,
    licenseNumber: Number,
    isAdmin: {
        type: Boolean,
        default: false
      },
});

export const PhysicianModel = model("physicians", PhysicianSchema);