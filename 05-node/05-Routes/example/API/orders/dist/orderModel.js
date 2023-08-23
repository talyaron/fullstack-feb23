"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(company, phone, totalPrice, cart) {
        this.company = company;
        this.phone = phone;
        this.totalPrice = totalPrice;
        this.cart = cart;
        this.id = Math.random().toString();
    }
    return Order;
}());
exports.Order = Order;
