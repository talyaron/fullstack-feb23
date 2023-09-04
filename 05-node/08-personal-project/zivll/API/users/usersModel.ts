import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
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
// this class is used to define the categories that the user use

// these array contains all user categories
// const userCategories: UserCategories[] = [];
