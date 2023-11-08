"use strict";
exports.__esModule = true;
exports.OrderModel = exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
exports.OrderSchema = new Schema({
    userName: String,
    userMail: String,
    orderItems: [{ itemName: String, itemDesc: String, itemUrl: String, id: Number }] // Array of items,
});
exports.OrderModel = model("orders", exports.OrderSchema);
