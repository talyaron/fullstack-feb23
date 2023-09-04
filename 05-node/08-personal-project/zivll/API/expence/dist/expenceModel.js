"use strict";
exports.__esModule = true;
exports.ExpenceModel = exports.ExpenceSchema = void 0;
var mongoose_1 = require("mongoose");
// this class used to create and define expence entitie
exports.ExpenceSchema = new mongoose_1.Schema({
    name: String,
    category: String,
    categoryId: String,
    amount: Number
});
exports.ExpenceModel = mongoose_1.model("expences", exports.ExpenceSchema);
