"use strict";
exports.__esModule = true;
exports.CrossfitItem = exports.CrossfitSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CrossfitSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        require: [true, "Please enter a crossfit item name"]
    },
    quantity: {
        type: Number,
        required: true,
        "default": 0
    },
    price: {
        type: Number,
        required: true
    },
    imgItem: {
        type: String,
        required: false
    },
    email: String
}, {
    // to create two fileds: create & update
    timestamps: true
});
// model
exports.CrossfitItem = mongoose_1["default"].model('CrossfitItem', exports.CrossfitSchema);
