"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
//usersModel.ts
var User = /** @class */ (function () {
    function User(userName, password, isLogIn) {
        if (isLogIn === void 0) { isLogIn = false; }
        this.userName = userName;
        this.password = password;
        this.isLogIn = isLogIn;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
