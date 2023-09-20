"use strict";
exports.__esModule = true;
exports.userTasks = exports.UserTasks = exports.tasks = exports.Task = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["done"] = "done";
    TaskStatus["todo"] = "todo";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Task.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Task;
}());
exports.Task = Task;
exports.tasks = [];
//join collection (class)
var UserTasks = /** @class */ (function () {
    function UserTasks(user, task) {
        this.user = user;
        this.task = task;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserTasks;
}());
exports.UserTasks = UserTasks;
exports.userTasks = [];
