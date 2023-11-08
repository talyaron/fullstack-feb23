import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  userIncome: String,
  isAdmin: { type: "boolean", default: false },
});

export const UserModel = model("users", UserSchema);

export const UserCategoriesSchema = new Schema({
  categoryName: String,
  userName: String,
});

export const UserCategoriesModel = model(
  "UserCategories",
  UserCategoriesSchema
);
