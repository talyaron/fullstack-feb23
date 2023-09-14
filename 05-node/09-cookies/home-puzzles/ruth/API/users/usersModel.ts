import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const UserModel = model("users", UserSchema);
export default UserModel;

async function createAdmin() {
  const admin = new UserModel({
    email: "manager@manager.com",
    password: "1234567890",
    isAdmin: true,
  });
  const adminDB = await admin.save();

  console.log("admin successfully created");
}

// createAdmin();
