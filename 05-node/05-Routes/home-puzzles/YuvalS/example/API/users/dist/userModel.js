"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, phoneNum = _a.phoneNum, imgUrl = _a.imgUrl;
        this.name = name;
        this.phoneNum = phoneNum;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
    return User;
}());
exports.User = User;
