"use strict";
exports.__esModule = true;
exports.CrossfitItem = exports.CrossfitSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CrossfitSchema = new mongoose_1.Schema({
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
    email: {
        type: String,
        required: false
    }
});
// model
exports.CrossfitItem = mongoose_1.model('items', exports.CrossfitSchema);
