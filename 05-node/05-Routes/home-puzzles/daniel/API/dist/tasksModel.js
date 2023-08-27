"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(_a) {
        var title = _a.title, description = _a.description, status = _a.status;
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString();
    }
    return Task;
}());
exports.Task = Task;
