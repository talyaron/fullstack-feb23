"use strict";
exports.__esModule = true;
exports.users = exports.User = exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
exports.UserSchema = new Schema({
    email: String,
    password: String,
    userName: String
});
exports.UserModel = model("users", exports.UserSchema);
// export default UserModel;
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
exports.users = [];
