"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseModel = exports.ExpenseSchema = void 0;
const mongoose_1 = require("mongoose");
// this class used to create and define expence entitie
exports.ExpenseSchema = new mongoose_1.Schema({
    name: String,
    category: String,
    categoryId: String,
    amount: Number,
});
exports.ExpenseModel = (0, mongoose_1.model)("expense", exports.ExpenseSchema);
//# sourceMappingURL=expenseModel.js.map