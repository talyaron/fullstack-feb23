"use strict";
exports.__esModule = true;
exports.users = exports.UserModel = exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        this.email = email;
        this.password = password;
        this.role = "user";
        this.id = Math.random().toString();
    }
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
exports.User = User;
//define a schema (It is like interface in typescript)
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: String
});
//"users" is the name of the collection in the DB
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.users = [];
