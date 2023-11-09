"use strict";
exports.__esModule = true;
var express_1 = require("express");
var expenseCont_1 = require("./expenseCont");
var expensesRoutes = express_1["default"].Router();
expensesRoutes
    .post("/add-expense", expenseCont_1.addExpense)
    .get("/get-user-expenses", expenseCont_1.getUserExpenses)
    .patch("/update-expense", expenseCont_1.updateExpense)["delete"]("/delete-expense", expenseCont_1.deleteExpense);
exports["default"] = expensesRoutes;