"use strict";
exports.__esModule = true;
exports.UserCategoriesModel = exports.UserCategoriesSchema = exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    userName: String,
    email: String,
    password: String
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.UserCategoriesSchema = new mongoose_1.Schema({
    categoryName: String,
    categoryId: String
});
exports.UserCategoriesModel = mongoose_1.model("UserCategories", exports.UserCategoriesSchema);
// this class is used to define the categories that the user use
// these array contains all user categories
// const userCategories: UserCategories[] = [];
