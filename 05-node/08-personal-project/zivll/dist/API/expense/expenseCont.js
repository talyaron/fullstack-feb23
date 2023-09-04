"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.getAllExpenses = exports.addExpense = void 0;
const expenseModel_1 = require("./expenseModel");
const addExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, categoryId, amount } = req.body;
        if (!name || !category || !categoryId || !amount)
            throw new Error("please complete all fields");
        const expences = new expenseModel_1.ExpenseModel({ name, category, categoryId, amount });
        yield expences.save();
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
});
exports.addExpense = addExpense;
const getAllExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllExpenses = getAllExpenses;
const updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateExpense = updateExpense;
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteExpense = deleteExpense;
// import { ExpenceModel } from "./expenceModel";
// export const addExpense = async (req: any, res: any) => {};
// export const getAllExpenses = async (req: any, res: any) => {};
// export const updateExpense = async (req: any, res: any) => {};
// export const deleteExpense = async (req: any, res: any) => {};
//# sourceMappingURL=expenseCont.js.map