"use strict";
exports.__esModule = true;
exports.User = exports.UserSchema = void 0;
// import mongoose from 'mongoose';
// import Schema from 'mongoose';
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    }
});
// Model like an instance from a class and the "User"-is a class
exports.User = mongoose_1.model("User", exports.UserSchema);
