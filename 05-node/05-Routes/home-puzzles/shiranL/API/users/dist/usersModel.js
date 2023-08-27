"use strict";
//usersModel.ts
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [new User('shiranLevy', '123456')];
