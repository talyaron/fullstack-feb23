"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(id, text) {
        this.id = Math.random().toString();
        this.text = text;
    }
    return Task;
}());
exports.Task = Task;
