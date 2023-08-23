"use strict";
exports.__esModule = true;
exports.updateCart = exports.deleteorder = exports.getorders = exports.addOrder = void 0;
var orderModel_1 = require("./orderModel");
var orders = [
    new orderModel_1.Order("Google", "054-1234567", 100, [])
];
//add order controler
exports.addOrder = function (req, res) {
    var order = req.body;
    console.log(order);
    //add to orders array
    orders.push(new orderModel_1.Order(order.company, order.phone, order.totalPrice, order.cart)); // --> add to Database
    console.log(orders);
    res.send({ order: order });
};
//get orders
exports.getorders = function (req, res) {
    try {
        res.send({ orders: orders });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteorder = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        orders = orders.filter(function (order) { return order.id !== id_1; });
        res.send({ orders: orders });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateCart = function (req, res) {
    try {
        var _a = req.body, totalPrice = _a.totalPrice, id_2 = _a.id;
        console.log(req.body);
        if (!id_2)
            throw new Error("Please complete all fields");
        console.log(orders);
        var order = orders.find(function (order) { return order.id === id_2; });
        if (!order)
            throw new Error("order not found");
        order.totalPrice = totalPrice;
        res.send({ orders: orders });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
