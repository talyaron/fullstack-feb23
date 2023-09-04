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
    },
    isLogOn: {
        type: Boolean,
        "default": false
    }
});
//users collection in the DB
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
