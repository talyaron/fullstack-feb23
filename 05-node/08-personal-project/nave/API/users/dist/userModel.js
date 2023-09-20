"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
exports.UserModel = mongoose_1.model("Users", exports.UserSchema);
