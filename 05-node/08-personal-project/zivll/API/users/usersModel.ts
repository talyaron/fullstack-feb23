import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  userIncome: String,
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

// export const UserIncomeSchema = new Schema({
//   userName: String,
//   userIncome: String,
// });
// export const UserIncomeModel = model("userIncomeModel", UserIncomeSchema);
// this class is used to define the categories that the user use

// these array contains all user categories
// const userCategories: UserCategories[] = [];
