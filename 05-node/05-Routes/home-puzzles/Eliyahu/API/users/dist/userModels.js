"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
