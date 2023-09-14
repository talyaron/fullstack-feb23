"use strict";
exports.__esModule = true;
exports.users = exports.UserModel = exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(name, email, password, date) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.date = date;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    date: String
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.users = [];
