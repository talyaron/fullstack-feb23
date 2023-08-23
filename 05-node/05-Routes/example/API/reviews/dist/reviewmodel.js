"use strict";
exports.__esModule = true;
exports.Review = void 0;
var Review = /** @class */ (function () {
    function Review(_a) {
        var name = _a.name, freetext = _a.freetext;
        this.name = name;
        this.freetext = freetext;
        this.id = Math.random().toString();
    }
    return Review;
}());
exports.Review = Review;
