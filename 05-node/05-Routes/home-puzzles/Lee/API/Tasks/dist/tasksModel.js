"use strict";
exports.__esModule = true;
exports.tasks = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(title, description, status, id) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString();
    }
    return Task;
}());
exports.Task = Task;
exports.tasks = [new Task("Walk the dog", "take a walk with the dog", "to-do")];
