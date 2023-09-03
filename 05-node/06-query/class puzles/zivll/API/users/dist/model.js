"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
        this.id = Math.random().toString(36).substring(2);
    }
    return User;
}());
exports.User = User;
exports.users = [];
