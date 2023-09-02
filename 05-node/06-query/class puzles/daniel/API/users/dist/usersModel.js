"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, imgUrl = _a.imgUrl;
        this.name = name,
            this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
exports.users = [];
