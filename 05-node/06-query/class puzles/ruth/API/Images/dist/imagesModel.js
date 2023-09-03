"use strict";
exports.__esModule = true;
exports.userImgs = exports.UserImg = exports.images = exports.Image = void 0;
var Image = /** @class */ (function () {
    function Image(url, title) {
        this.url = url;
        this.title = title;
        this.id = Date.now().toString();
    }
    return Image;
}());
exports.Image = Image;
exports.images = [];
var UserImg = /** @class */ (function () {
    function UserImg(user, image) {
        this.user = user;
        this.image = image;
    }
    return UserImg;
}());
exports.UserImg = UserImg;
exports.userImgs = [];
