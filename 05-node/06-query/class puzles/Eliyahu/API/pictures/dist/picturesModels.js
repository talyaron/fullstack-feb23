"use strict";
exports.__esModule = true;
exports.tags = exports.usersPictures = exports.UserPicture = exports.pictures = exports.Picture = exports.PictureArea = void 0;
var PictureArea;
(function (PictureArea) {
    PictureArea["north"] = "\u05E6\u05E4\u05D5\u05DF";
    PictureArea["center"] = "\u05DE\u05E8\u05DB\u05D6";
    PictureArea["south"] = "\u05D3\u05E8\u05D5\u05DD";
})(PictureArea = exports.PictureArea || (exports.PictureArea = {}));
var Picture = /** @class */ (function () {
    function Picture(title, imgUrl, location, tags, area) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.location = location;
        this.tags = tags;
        this.area = area;
        this.id = Math.random().toString(36).substr(2, 9);
        this.publishDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        });
    }
    return Picture;
}());
exports.Picture = Picture;
exports.pictures = [];
var UserPicture = /** @class */ (function () {
    function UserPicture(user, picture) {
        this.user = user;
        this.picture = picture;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    return UserPicture;
}());
exports.UserPicture = UserPicture;
exports.usersPictures = [];
exports.tags = ['ים', 'מדבר', 'צבי', 'מעיין'];
