"use strict";
//usersModel.ts
exports.__esModule = true;
exports.userTasks = exports.UserTasks = exports.Task = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["open"] = "open";
    TaskStatus["inProgress"] = "inProgress";
    TaskStatus["done"] = "done";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(titel, discripton, status) {
        this.titel = titel;
        this.discripton = discripton;
        this.status = status;
        this.id = Math.random().toString();
    }
    return Task;
}());
exports.Task = Task;
var UserTasks = /** @class */ (function () {
    function UserTasks(user, tasks) {
        this.user = user;
        this.tasks = tasks;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserTasks;
}());
exports.UserTasks = UserTasks;
exports.userTasks = [];
