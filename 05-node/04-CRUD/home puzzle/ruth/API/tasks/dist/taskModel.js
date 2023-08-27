"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(name, time, isDone) {
        if (isDone === void 0) { isDone = false; }
        this.name = name;
        this.time = time;
        this.isDone = isDone;
        this.id = Date.now();
    }
    return Task;
}());
exports.Task = Task;
