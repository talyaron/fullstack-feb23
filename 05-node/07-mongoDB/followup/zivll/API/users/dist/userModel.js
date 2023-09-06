"use strict";
exports.__esModule = true;
exports.users = exports.User = exports.USerModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
exports.UserSchema = new mongoose_2.Schema({ email: String, password: String });
exports.USerModel = mongoose_1.model("users", exports.UserSchema);
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
exports["default"] = exports.UserSchema;
exports.users = [];
