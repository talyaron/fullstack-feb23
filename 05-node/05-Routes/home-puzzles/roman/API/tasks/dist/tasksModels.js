"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(_a) {
        var title = _a.title, description = _a.description, status = _a.status;
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.floor(Math.random() * 1000); // Generate a random ID
    }
    return Task;
}());
exports.Task = Task;
// const test = new Task('test','description','status');
// console.log(test)
