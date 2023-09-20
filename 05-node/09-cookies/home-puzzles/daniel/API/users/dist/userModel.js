"use strict";
exports.__esModule = true;
exports.User = exports.UserSchema = void 0;
// import mongoose from 'mongoose';
// import Schema from 'mongoose';
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    isAdmin: {
        type: Boolean,
        "default": false
    }
});
// Model like an instance from a class and the "User"-is a class
exports.User = mongoose_1.model("User", exports.UserSchema);
module.exports = {
    UserSchema: exports.UserSchema,
    users: [
        { id: 1, userName: 'tovdaniel', email: 'tov@gmail.com', isAdmin: true }
    ]
};
