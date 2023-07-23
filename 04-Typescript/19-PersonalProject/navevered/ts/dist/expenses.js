var _a, _b, _c;
(_a = document.querySelector('#submitBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    event.preventDefault();
    try {
        var salaryPensionFrequency = (_a = document.querySelector('#salary-pension-frequency')) === null || _a === void 0 ? void 0 : _a.value;
        var salaryPensionAmount = Number((_b = document.querySelector('#salary-pension-amount')) === null || _b === void 0 ? void 0 : _b.value);
        var govSupportFrequency = (_c = document.querySelector('#gov-support-frequency')) === null || _c === void 0 ? void 0 : _c.value;
        var govSupportAmount = Number((_d = document.querySelector('#gov-support-amount')) === null || _d === void 0 ? void 0 : _d.value);
        var rentalIncomeFrequency = (_e = document.querySelector('#rental-income-frequency')) === null || _e === void 0 ? void 0 : _e.value;
        var rentalIncomeAmount = Number((_f = document.querySelector('#rental-income-amount')) === null || _f === void 0 ? void 0 : _f.value);
        var otherSupportFrequency = (_g = document.querySelector('#other-support-frequency')) === null || _g === void 0 ? void 0 : _g.value;
        var otherSupportAmount = Number((_h = document.querySelector('#other-support-amount')) === null || _h === void 0 ? void 0 : _h.value);
        var giftsBonusesFrequency = (_j = document.querySelector('#gifts-bonuses-frequency')) === null || _j === void 0 ? void 0 : _j.value;
        var giftsBonusesAmount = Number((_k = document.querySelector('#gifts-bonuses-amount')) === null || _k === void 0 ? void 0 : _k.value);
        var otherIncomeName = (_l = document.querySelector('#other-income-name')) === null || _l === void 0 ? void 0 : _l.value;
        var otherIncomeFrequency = (_m = document.querySelector('#other-income-frequency')) === null || _m === void 0 ? void 0 : _m.value;
        var otherIncomeAmount = Number((_o = document.querySelector('#other-income-amount')) === null || _o === void 0 ? void 0 : _o.value);
        var result = calculateTotalIncome([
            { name: 'Salary from work or pension allowance', frequency: salaryPensionFrequency, amount: salaryPensionAmount },
            { name: 'Allowances and supports from the government', frequency: govSupportFrequency, amount: govSupportAmount },
            { name: 'Rental income', frequency: rentalIncomeFrequency, amount: rentalIncomeAmount },
            { name: 'Other support', frequency: otherSupportFrequency, amount: otherSupportAmount },
            { name: 'Gifts and bonuses', frequency: giftsBonusesFrequency, amount: giftsBonusesAmount },
            { name: otherIncomeName, frequency: otherIncomeFrequency, amount: otherIncomeAmount }
        ]);
        displayResult(result);
        (_p = document.querySelector('#incomeForm')) === null || _p === void 0 ? void 0 : _p.reset();
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
});
function calculateTotalIncome(incomes) {
    var totalIncome = 0;
    try {
        for (var _i = 0, incomes_1 = incomes; _i < incomes_1.length; _i++) {
            var income = incomes_1[_i];
            if (income.name && income.amount) {
                var multiplier = 1;
                if (income.frequency === 'every-two-months') {
                    multiplier = 2;
                }
                else if (income.frequency === 'yearly') {
                    multiplier = 12;
                }
                totalIncome += income.amount * multiplier;
            }
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
    return totalIncome;
}
function displayResult(result) {
    try {
        var resultElement = document.querySelector('#result');
        if (resultElement instanceof HTMLElement) {
            resultElement.innerHTML = "Your total income is: " + result;
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
function openTabsWithTabPress() {
    var tabHeaders = document.getElementsByClassName("tabheader");
    document.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            var activeTab = document.querySelector(".tabcontent.active");
            if (activeTab) {
                var activeHeaderIndex = Array.from(tabHeaders).indexOf(activeTab);
                var nextTab = tabHeaders[(activeHeaderIndex + 1) % tabHeaders.length];
                activeTab.classList.remove("active");
                nextTab.classList.add("active");
            }
        }
    });
}
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
    }
    return Income;
}());
var Expenses = /** @class */ (function () {
    function Expenses(user, amount, frequency) {
        this.user = user;
        this.amount = amount;
        this.frequency = frequency;
        this.id = Expensesuid();
    }
    return Expenses;
}());
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Expensesuid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var incomes = [];
var expenses = [];
var getInputElementValue = function (id) {
    var inputElement = document.querySelector("#" + id);
    return inputElement.value;
};
renderIncomeTable();
(_b = document.querySelector("#incomeForm")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (ev) {
    try {
        ev.preventDefault();
        var salaryPensionFrequency = getInputElementValue("salary-pension-frequency");
        var salaryPensionAmount = Number(getInputElementValue("salary-pension-amount"));
        var govSupportFrequency = getInputElementValue("gov-support-frequency");
        var govSupportAmount = Number(getInputElementValue("gov-support-amount"));
        var rentalIncomeFrequency = getInputElementValue("rental-income-frequency");
        var rentalIncomeAmount = Number(getInputElementValue("rental-income-amount"));
        var otherSupportFrequency = getInputElementValue("other-support-frequency");
        var otherSupportAmount = Number(getInputElementValue("other-support-amount"));
        var giftsBonusesFrequency = getInputElementValue("gifts-bonuses-frequency");
        var giftsBonusesAmount = Number(getInputElementValue("gifts-bonuses-amount"));
        var otherIncomeName = getInputElementValue("other-income-name");
        var otherIncomeFrequency = getInputElementValue("other-income-frequency");
        var otherIncomeAmount = Number(getInputElementValue("other-income-amount"));
        incomes.push(new Income(new User("User", "", ""), salaryPensionAmount, salaryPensionFrequency));
        incomes.push(new Income(new User("User", "", ""), govSupportAmount, govSupportFrequency));
        incomes.push(new Income(new User("User", "", ""), rentalIncomeAmount, rentalIncomeFrequency));
        incomes.push(new Income(new User("User", "", ""), otherSupportAmount, otherSupportFrequency));
        incomes.push(new Income(new User("User", "", ""), giftsBonusesAmount, giftsBonusesFrequency));
        incomes.push(new Income(new User("User", "", ""), otherIncomeAmount, otherIncomeFrequency));
    }
    catch (error) {
        console.error(error);
    }
});
renderIncomeTable();
saveToLocalStorage();
function saveToLocalStorage() {
    try {
        var incomesJson = JSON.stringify(incomes);
        localStorage.setItem("incomes", incomesJson);
        var expensesJson = JSON.stringify(expenses);
        localStorage.setItem("expenses", expensesJson);
    }
    catch (error) {
        console.error(error);
    }
}
;
function renderIncomeTable() {
    var nameRoot = document.querySelector("#rootName");
    if (!nameRoot)
        throw new Error("Could not find rootPersons html element");
    var html = "<table dir><thead><tr><th> מי הכניס?  </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";
    for (var _i = 0, incomes_2 = incomes; _i < incomes_2.length; _i++) {
        var income = incomes_2[_i];
        html += "<tr><td id=\"tdName\">" + income.user + "</td><td>" + income.amount + "</td><td>" + income.frequency + "</td></tr>";
    }
    html += "</tbody></table>";
    nameRoot.innerHTML = html;
}
(_c = document.querySelector("#expensesForm")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", function (ev) {
    try {
        ev.preventDefault();
        var category = getInputElementValue("expense-category");
        var frequency = getInputElementValue("expense-frequency");
        var amount = Number(getInputElementValue("expense-amount"));
        expenses.push(new Expenses(new User("User", "", ""), amount, frequency));
        renderExpensesTable();
        saveToLocalStorage();
    }
    catch (error) {
        console.error(error);
    }
});
function renderExpensesTable() {
    var expensesTableRoot = document.querySelector("#expensesTable");
    if (!expensesTableRoot)
        throw new Error("Could not find expensesTableRoot html element");
    var html = "<table dir><thead><tr><th>Category</th><th>Amount</th><th>Frequency</th></tr></thead><tbody>";
    for (var _i = 0, expenses_1 = expenses; _i < expenses_1.length; _i++) {
        var expense = expenses_1[_i];
        html += "<tr><td>" + expense.labelName + "</td><td>" + expense.amount + "</td><td>" + expense.frequency + "</td></tr>";
    }
    html += "</tbody></table>";
    expensesTableRoot.innerHTML = html;
}
