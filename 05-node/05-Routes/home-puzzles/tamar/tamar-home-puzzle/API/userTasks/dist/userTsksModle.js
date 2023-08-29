"use strict";
exports.__esModule = true;
exports.userTasks = exports.UserTasks = void 0;
var UserTasks = /** @class */ (function () {
    function UserTasks(user, tasks) {
        this.user = user;
        this.tasks = tasks;
        this.id = Math.random().toString(36);
    }
    return UserTasks;
}());
exports.UserTasks = UserTasks;
exports.userTasks = [];
