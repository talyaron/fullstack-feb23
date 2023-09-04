"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenseCont_1 = require("./expenseCont");
const expensesRoutes = express_1.default.Router();
expensesRoutes.post("/add-expense", expenseCont_1.addExpense);
exports.default = expensesRoutes;
//# sourceMappingURL=expenseRouter.js.map