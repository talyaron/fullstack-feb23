"use strict";
exports.__esModule = true;
exports.ExpenseModel = exports.ExpenseSchema = void 0;
var mongoose_1 = require("mongoose");
// this class used to create and define expence entitie
exports.ExpenseSchema = new mongoose_1.Schema({
    name: String,
    category: String,
    categoryId: String,
    amount: Number
});
exports.ExpenseModel = mongoose_1.model("expences", exports.ExpenseSchema);
