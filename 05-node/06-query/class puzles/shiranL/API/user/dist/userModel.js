"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, password, id, isLogIn) {
        this.email = email;
        this.password = password;
        this.email = email;
        this.password = password;
        if (id)
            this.id = id;
        else
            this.id = Math.random().toString();
        if (isLogIn)
            this.isLogIn = isLogIn;
        else
            this.isLogIn = false;
    }
    return User;
}());
exports.User = User;
exports.users = [];
