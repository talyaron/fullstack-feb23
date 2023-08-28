"use strict";
exports.__esModule = true;
exports.tasks = exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.tasks = [new User("Lee Dee", "leedee@gmail.com", "Oscardelarente777")];
