"use strict";
exports.__esModule = true;
exports.tasks = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(title, description, status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString(36).substring(2);
    }
    Task.prototype.changeStatus = function (taskStatus) {
        var Newstatus;
        if (taskStatus === "todo") {
            Newstatus = "done";
        }
        else {
            Newstatus = "todo";
        }
        this.status = Newstatus;
    };
    return Task;
}());
exports.Task = Task;
exports.tasks = [];
