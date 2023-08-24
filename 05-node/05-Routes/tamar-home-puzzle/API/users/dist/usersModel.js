"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name;
        this.name = name;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
