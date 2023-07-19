var _a;
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
var uLabelName = document.querySelectorAll(".label");
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var incomes = [];
var getInputElementValue = function (id) {
    var inputElement = document.querySelector("#" + id);
    return inputElement.value;
};
renderTable();
(_a = document.querySelector("#incomeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (ev) {
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
        renderTable();
        var incomesJson = JSON.stringify(incomes);
        localStorage.setItem("incomes", incomesJson);
    }
    catch (error) {
        console.error(error);
    }
});
function renderTable() {
    var nameRoot = document.querySelector("#rootName");
    if (!nameRoot)
        throw new Error("Could not find rootPersons html element");
    var html = "<table dir><thead><tr><th> מי הוציא  </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";
    for (var _i = 0, incomes_1 = incomes; _i < incomes_1.length; _i++) {
        var income = incomes_1[_i];
        html += "<tr><td id=\"tdName\">" + income.labelName + "</td><td>" + income.amount + "</td><td>" + income.frequency + "</td></tr>";
    }
    html += "</tbody></table>";
    nameRoot.innerHTML = html;
}
