"use strict";
exports.__esModule = true;
exports.users = exports.UserModel = exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.UserSchema = new mongoose_1.Schema({
    email: String,
    password: String
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.users = [];
