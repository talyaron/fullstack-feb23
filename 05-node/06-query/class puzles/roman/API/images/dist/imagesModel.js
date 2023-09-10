"use strict";
exports.__esModule = true;
exports.images = exports.Image = void 0;
var Image = /** @class */ (function () {
    function Image(name, imgUrl, id) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.id = id ? id : Math.random().toString();
    }
    return Image;
}());
exports.Image = Image;
exports.images = [];
