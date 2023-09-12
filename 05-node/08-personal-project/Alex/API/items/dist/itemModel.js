"use strict";
exports.__esModule = true;
exports.ItemModel = exports.ItemSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
exports.ItemSchema = new Schema({
    itemName: String,
    itemDesc: String,
    itemUrl: String
});
exports.ItemModel = model("items", exports.ItemSchema);
