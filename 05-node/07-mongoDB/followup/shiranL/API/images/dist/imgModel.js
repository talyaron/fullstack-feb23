"use strict";
exports.__esModule = true;
exports.userImgs = exports.UserImages = exports.Image_ = void 0;
var Image_ = /** @class */ (function () {
    function Image_(titel, imgUrl, id) {
        this.titel = titel;
        this.imgUrl = imgUrl;
        this.titel = titel;
        this.imgUrl = imgUrl;
        if (id)
            this.id = id;
        else
            this.id = Math.random().toString();
    }
    Image_.prototype.update = function (imgUrl) {
        this.imgUrl = imgUrl;
    };
    return Image_;
}());
exports.Image_ = Image_;
//join collection   
var UserImages = /** @class */ (function () {
    function UserImages(user, image) {
        this.user = user;
        this.image = image;
        this.user = user;
        this.image = image;
    }
    return UserImages;
}());
exports.UserImages = UserImages;
exports.userImgs = [];
