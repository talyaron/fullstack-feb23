"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
//define user schema
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    isAdmin: {
        type: Boolean,
        "default": false
    },
    isLoggedIn: {
        type: Boolean,
        "default": false
    }
});
// Method to compare a plain text password with the hashed password in the database
//users collection in the DB
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
