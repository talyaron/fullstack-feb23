"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
// export class User {
//     id : string;
//     isAdmin:boolean = false;
//     isLogIn: boolean = false;
//     constructor(public email:string,public password:string, id?:string) {
//         this.email = email;
//         this.password = password;
//         if (id) this.id = id;
//         else this.id = Math.random().toString();
//     }
// }
//define user schema
exports.UserSchema = new mongoose_1.Schema({
    email: String,
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
//users collection in the DB
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
