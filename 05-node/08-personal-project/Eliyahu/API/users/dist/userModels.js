"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.users = exports.User = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
