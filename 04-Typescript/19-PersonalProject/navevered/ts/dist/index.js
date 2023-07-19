//model//
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
// Income entity
var Income = /** @class */ (function () {
    function Income(amount, source, date) {
        this.amount = amount;
        this.source = source;
        this.date = date;
        this.id = uid();
    }
    return Income;
}());
// Expense entity
var Expense = /** @class */ (function () {
    function Expense(amount, category, date) {
        this.amount = amount;
        this.category = category;
        this.date = date;
        this.id = uid();
    }
    return Expense;
}());
// Monthly Summary entity
var MonthlySummary = /** @class */ (function () {
    function MonthlySummary(totalIncome, totalExpenses, month, year) {
        this.totalIncome = totalIncome;
        this.totalExpenses = totalExpenses;
        this.month = month;
        this.year = year;
        this.netEarnings = totalIncome - totalExpenses;
        this.id = uid();
    }
    return MonthlySummary;
}());
