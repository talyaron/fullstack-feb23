"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = [
    new User({ email: "manager@manager.com", password: "1234567890" })
];
