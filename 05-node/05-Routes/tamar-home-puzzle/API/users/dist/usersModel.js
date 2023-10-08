"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name;
        this.name = name;
        this.tasks = []; //initialize with an empty array
        // Call an async function using 'await'
        this.id = Math.random().toString();
    }
    //method
    User.prototype.addTasks = function (tasks) {
        this.tasks = __spreadArrays(this.tasks, tasks);
    };
    return User;
}());
exports.User = User;
