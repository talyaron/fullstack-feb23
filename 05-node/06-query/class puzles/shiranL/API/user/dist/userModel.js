"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, password, id) {
        this.email = email;
        this.password = password;
        this.isLogIn = false;
        this.email = email;
        this.password = password;
        if (id)
            this.id = id;
        else
            this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
