"use strict";
exports.__esModule = true;
exports.images = exports.Image = void 0;
var Image = /** @class */ (function () {
    function Image(description, url, email) {
        this.description = description;
        this.url = url;
        this.email = email;
        this.id = Math.random().toString(36).substring(2);
        // this.email = this.getUserEmail();
    }
    return Image;
}());
exports.Image = Image;
exports.images = [];
