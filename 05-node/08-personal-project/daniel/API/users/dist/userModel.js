"use strict";
exports.__esModule = true;
exports.User = exports.UserSchema = void 0;
// import { Schema,model } from "mongoose";
var mongoose_1 = require("mongoose");
// export class UserClass {
//     email: string;
//     password: string;
//     id: string;
//     constructor({ email, password}:{email:string;
//         password: string;}){
//         this.email = email;
//         this.password = password;
//         this.id = Math.random().toString();
//     }
// }
exports.UserSchema = new mongoose_1["default"].Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    }
});
// Model like an instance from a class and the "User"-is a class
exports.User = mongoose_1["default"].model("User", exports.UserSchema);
// export const users: UserClass[] =[]
