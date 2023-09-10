"use strict";
exports.__esModule = true;
exports.users = exports.userSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
// Define the User interface to represent a user document
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
// Create a Mongoose user schema
exports.userSchema = new mongoose_1["default"].Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
});
// Create a Mongoose model for the User
var UserModel = mongoose_1["default"].model('User', exports.userSchema);
exports["default"] = UserModel;
// Initialize an array of users with instances of the User class
var users = [];
exports.users = users;
