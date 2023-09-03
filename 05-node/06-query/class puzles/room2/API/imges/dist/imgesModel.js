"use strict";
exports.__esModule = true;
exports.UserImages = exports.UserImage = exports.images = exports.Image = void 0;
var Image = /** @class */ (function () {
    function Image(_a) {
        var imgUrl = _a.imgUrl, title = _a.title;
        this.imgUrl = imgUrl;
        this.title = title;
    }
    return Image;
}());
exports.Image = Image;
exports.images = [];
var UserImage = /** @class */ (function () {
    function UserImage(user, img) {
        this.user = user;
        this.img = img;
    }
    return UserImage;
}());
exports.UserImage = UserImage;
exports.UserImages = [];
