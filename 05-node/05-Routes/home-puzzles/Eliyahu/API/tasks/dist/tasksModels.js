"use strict";
exports.__esModule = true;
exports.usersTasks = exports.UserTasks = exports.tasks = exports.Task = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["toDo"] = "toDo";
    TaskStatus["doing"] = "doing";
    TaskStatus["done"] = "done";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return Task;
}());
exports.Task = Task;
exports.tasks = [];
var UserTasks = /** @class */ (function () {
    function UserTasks(user, task) {
        this.user = user;
        this.task = task;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserTasks;
}());
exports.UserTasks = UserTasks;
exports.usersTasks = [];
