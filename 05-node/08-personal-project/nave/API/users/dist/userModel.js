"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.users = exports.User = void 0;
var mongoose_1 = require("mongoose");
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = [];
exports.UserSchema = new mongoose_1.Schema({
    email: String,
    password: String
});
//"users" is the name of the collection in the DB
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
