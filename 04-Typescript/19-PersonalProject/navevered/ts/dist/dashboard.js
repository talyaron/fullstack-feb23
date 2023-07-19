var _a, _b;
var User = /** @class */ (function () {
    function User(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    return User;
}());
var Income = /** @class */ (function () {
    function Income(user, amount, frequency) {
        this.user = user;
        this.amount = amount;
        this.frequency = frequency;
        this.id = uid();
        this.labelName = uLabelName;
    }
    return Income;
}());
var Expense = /** @class */ (function () {
    function Expense(user, amount, frequency, ExpensesName) {
        this.user = user;
        this.amount = amount;
        this.frequency = frequency;
        this.ExpensesName = ExpensesName;
        this.id = uid();
    }
    return Expense;
}());
var uLabelName = document.querySelectorAll(".label");
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var incomes = [];
var expenses = [];
var getInputElementValue = function (id) {
    var inputElement = document.querySelector("#" + id);
    return inputElement.value;
};
(_a = document.querySelector("#incomeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (ev) {
    try {
        ev.preventDefault();
        var salaryPensionFrequency = getInputElementValue("salary-pension-frequency");
        var salaryPensionIncomeAmount = Number(getInputElementValue("salary-pension-income-amount"));
        var govSupportFrequency = getInputElementValue("gov-support-frequency");
        var govSupportIncomeAmount = Number(getInputElementValue("gov-support-income-amount"));
        var rentalIncomeFrequency = getInputElementValue("rental-income-frequency");
        var rentalIncomeAmount = Number(getInputElementValue("rental-income-amount"));
        var otherSupportFrequency = getInputElementValue("other-support-frequency");
        var otherSupportIncomeAmount = Number(getInputElementValue("other-support-income-amount"));
        var giftsBonusesFrequency = getInputElementValue("gifts-bonuses-frequency");
        var giftsBonusesIncomeAmount = Number(getInputElementValue("gifts-bonuses-income-amount"));
        var otherIncomeName = getInputElementValue("other-income-name");
        var otherIncomeFrequency = getInputElementValue("other-income-frequency");
        var otherIncomeAmount = Number(getInputElementValue("other-income-amount"));
        incomes.push(new Income(new User("שכר מעבודה|פנסיה", "", ""), salaryPensionIncomeAmount, salaryPensionFrequency));
        incomes.push(new Income(new User("קצבאות מהממשלה", "", ""), govSupportIncomeAmount, govSupportFrequency));
        incomes.push(new Income(new User("הכנסה משכירות", "", ""), rentalIncomeAmount, rentalIncomeFrequency));
        incomes.push(new Income(new User("תמיכה נוספת", "", ""), otherSupportIncomeAmount, otherSupportFrequency));
        incomes.push(new Income(new User("מתנות ובונסים", "", ""), giftsBonusesIncomeAmount, giftsBonusesFrequency));
        incomes.push(new Income(new User(" הכנסה נוספת", "", ""), otherIncomeAmount, otherIncomeFrequency));
        renderIncomeTable();
        var incomesJson = JSON.stringify(incomes);
        localStorage.setItem("incomes", incomesJson);
    }
    catch (error) {
        console.error(error);
    }
});
(_b = document.querySelector("#expensesForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (ev) {
    try {
        ev.preventDefault();
        var housingExpensesFrequency = getInputElementValue("housing-expenses-frequency");
        var housingExpensesAmount = Number(getInputElementValue("housing-expenses-amount"));
        var livingExpensesFrequency = getInputElementValue("living-expenses-frequency");
        var livingExpensesAmount = Number(getInputElementValue("living-expenses-amount"));
        var groceryExpensesFrequency = getInputElementValue("grocery-expenses-frequency");
        var groceryExpensesAmount = Number(getInputElementValue("grocery-expenses-amount"));
        var carExpensesFrequency = getInputElementValue("car-expenses-frequency");
        var carExpensesAmount = Number(getInputElementValue("car-expenses-amount"));
        var entertainmentExpensesFrequency = getInputElementValue("entertainment-expenses-frequency");
        var entertainmentExpensesAmount = Number(getInputElementValue("entertainment-expenses-amount"));
        var healthExpensesFrequency = getInputElementValue("health-expenses-frequency");
        var healthExpensesAmount = Number(getInputElementValue("health-expenses-amount"));
        var otherExpensesName = getInputElementValue("other-expenses-name");
        var otherExpensesFrequency = getInputElementValue("other-expenses-frequency");
        var otherExpensesAmount = Number(getInputElementValue("other-expenses-amount"));
        expenses.push(new Expense(new User("הוצאות מגורים", "", ""), housingExpensesAmount, housingExpensesFrequency));
        expenses.push(new Expense(new User("הוצאות מחיה", "", ""), livingExpensesAmount, livingExpensesFrequency));
        expenses.push(new Expense(new User("הוצאות קניות שוטפות", "", ""), groceryExpensesAmount, groceryExpensesFrequency));
        expenses.push(new Expense(new User("הוצאות רכב", "", ""), carExpensesAmount, carExpensesFrequency));
        expenses.push(new Expense(new User(" הוצאות פנאי", "", ""), entertainmentExpensesAmount, entertainmentExpensesFrequency));
        expenses.push(new Expense(new User(" הוצאות בריאות", "", ""), healthExpensesAmount, healthExpensesFrequency));
        expenses.push(new Expense(new User("הכנסה נוספת ", "", ""), otherExpensesAmount, otherExpensesFrequency));
        renderExpensesTable();
        var expensesJson = JSON.stringify(expenses);
        localStorage.setItem("expenses", expensesJson);
    }
    catch (error) {
        console.error(error);
    }
});
// function renderIncomeTable() {
//   const incomeTableDiv = document.querySelector("#incomeTableDiv");
//   if (!incomeTableDiv) throw new Error("Could not find incomeTableDiv html element");
//   let html =
//     "<table dir><thead><tr><th> שם ההכנסה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";
//   for (const income of incomes) {
//     html += `<tr><td id="tdName">${income.user.userName}</td><td>${income.amount}</td><td>${income.frequency}</td></tr>`;
//   }
//   html += "</tbody></table>";
//   incomeTableDiv.innerHTML = html;
// }
function renderIncomeTable() {
    var nameRoot = document.querySelector("#rootNameIncome");
    if (!nameRoot)
        throw new Error("Could not find rootPersons html element");
    var html = "<table dir><thead><tr><th> שם ההוצאה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";
    for (var _i = 0, incomes_1 = incomes; _i < incomes_1.length; _i++) {
        var income = incomes_1[_i];
        html += "<tr><td id=\"tdName\">" + income.user.userName + "</td><td>" + income.amount + "</td><td>" + income.frequency + "</td></tr>";
    }
    html += "</tbody></table>";
    nameRoot.innerHTML = html;
}
function renderExpensesTable() {
    var nameRoot = document.querySelector("#rootNameExpenses");
    if (!nameRoot)
        throw new Error("Could not find rootPersons html element");
    var html = "<table dir><thead><tr><th> שם ההוצאה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";
    for (var _i = 0, expenses_1 = expenses; _i < expenses_1.length; _i++) {
        var expense = expenses_1[_i];
        html += "<tr><td id=\"tdName\">" + expense.user.userName + "</td><td>" + expense.amount + "</td><td>" + expense.frequency + "</td></tr>";
    }
    html += "</tbody></table>";
    nameRoot.innerHTML = html;
}
function calculateTotalIncome() {
    var incomeInputs = document.querySelectorAll("input[name$='income-amount']");
    var totalIncome = 0;
    for (var _i = 0, incomeInputs_1 = incomeInputs; _i < incomeInputs_1.length; _i++) {
        var input = incomeInputs_1[_i];
        if (input instanceof HTMLInputElement) {
            var incomeAmount = parseFloat(input.value);
            if (!isNaN(incomeAmount)) {
                totalIncome += incomeAmount;
                console.log(incomeAmount);
            }
        }
    }
    // תצוגת התוצאה ב-HTML
    var resultElement = document.getElementById("resultIncome");
    if (resultElement !== null) {
        resultElement.textContent = "\uD83D\uDCB0\uD83D\uDCB0\uD83D\uDCB0  \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05D5\u05DC\u05DC \u05E9\u05DC \u05D4\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0: " + totalIncome;
    }
    return totalIncome;
}
function calculateTotalExpenses() {
    var expenseInputs = document.querySelectorAll("input[name$='-expenses-amount']");
    var totalExpense = 0;
    for (var _i = 0, expenseInputs_1 = expenseInputs; _i < expenseInputs_1.length; _i++) {
        var input = expenseInputs_1[_i];
        if (input instanceof HTMLInputElement) {
            var expenseAmount = parseFloat(input.value);
            if (!isNaN(expenseAmount)) {
                totalExpense += expenseAmount;
                console.log(expenseAmount);
            }
        }
    }
    var resultElement = document.getElementById("resultExpenses");
    if (resultElement !== null) {
        resultElement.textContent = " \uD83D\uDED2\uD83D\uDED2\uD83D\uDED2  \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05DB\u05D5\u05DC\u05DC \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0: " + totalExpense;
    }
    return totalExpense;
}
function calculateProfit() {
    var totalIncome = calculateTotalIncome();
    var totalExpenses = calculateTotalExpenses();
    var profit = totalIncome - totalExpenses;
    var profitResultElement = document.getElementById("profitResult");
    if (profitResultElement !== null) {
        profitResultElement.textContent = " \uD83E\uDDFE\uD83E\uDDFE\uD83E\uDDFE  \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0: " + profit;
    }
}
function calculateProfityearly() {
    var totalIncome = calculateTotalIncome();
    var totalExpenses = calculateTotalExpenses();
    var profityearly = totalIncome - totalExpenses;
    var profitResultYearElement = document.getElementById("profitResult");
    if (profitResultYearElement !== null) {
        profitResultYearElement.textContent = "  \uD83D\uDCB8\uD83D\uDCB8\uD83D\uDCB8  \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0: " + profityearly * 12;
    }
}
