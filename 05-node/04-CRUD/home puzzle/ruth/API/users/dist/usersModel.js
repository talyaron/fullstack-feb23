"use strict";
exports.__esModule = true;
exports.UserTasks = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var UserTasks = /** @class */ (function () {
    function UserTasks(user, tasks) {
        if (tasks === void 0) { tasks = []; }
        this.user = user;
        this.tasks = tasks;
    }
    return UserTasks;
}());
exports.UserTasks = UserTasks;
