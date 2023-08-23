"use strict";
exports.__esModule = true;
exports.order = void 0;
var order = /** @class */ (function () {
    function order(_a) {
        var title = _a.title, price = _a.price, imgUrl = _a.imgUrl;
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
    return order;
}());
exports.order = order;
