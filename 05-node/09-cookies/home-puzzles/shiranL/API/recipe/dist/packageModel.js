"use strict";
exports.__esModule = true;
exports.PackageModel = exports.PackageSchema = void 0;
// recipe model
var mongoose_1 = require("mongoose");
var categoryOptions = ['Chocolates', 'babies', 'Breakfast', 'Other'];
//define recipe schema
exports.PackageSchema = new mongoose_1.Schema({
    packageName: String,
    packagePrice: Number,
    imageUrl: String,
    category: {
        type: String,
        "enum": categoryOptions
    },
    userEmail: {
        type: String,
        required: true
    },
    ProductionDate: {
        type: Date,
        "default": Date.now
    }
});
//recipes collection in the DB
exports.PackageModel = mongoose_1.model("packages", exports.PackageSchema);
