"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(_a) {
        var title = _a.title, price = _a.price, imgUrl = _a.imgUrl;
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
    return Product;
}());
exports.Product = Product;
;
//how to creat new instance
//   const prd = new Product({title:"hi", price:5, imgUrl:"dgdfg"})
