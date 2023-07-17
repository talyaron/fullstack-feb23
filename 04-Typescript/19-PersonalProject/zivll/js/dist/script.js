// model
// these class is used to devide all expences into categories
var ExpenceCategory = /** @class */ (function () {
    function ExpenceCategory(categoryName) {
        this.categoryName = categoryName;
        this.categoryId = this.id();
    }
    ExpenceCategory.prototype.id = function () {
        Math.round(Math.random() * 1000000);
    };
    return ExpenceCategory;
}());
var Expence = /** @class */ (function () {
    // id: number;
    function Expence(name, category, amount // id: number, // public expiration?: string
    ) {
        this.name = name;
        this.category = category;
        this.amount = amount;
    }
    return Expence;
}());
// these array contains all categories subjects
var expenceCategorys = [
    new ExpenceCategory("\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA"),
    new ExpenceCategory("\u05EA\u05E8\u05D5\u05DE\u05D5\u05EA"),
    new ExpenceCategory("\u05D1\u05D9\u05D8\u05D5\u05D7\u05D9\u05DD"),
    new ExpenceCategory("\u05D7\u05D9\u05E0\u05D5\u05DA"),
    new ExpenceCategory("\u05EA\u05D7\u05D1\u05D5\u05E8\u05D4"),
    new ExpenceCategory("\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA"),
    new ExpenceCategory("\u05D3\u05D9\u05D5\u05E8"),
    new ExpenceCategory("\u05E0\u05D5\u05E4\u05E9"),
    new ExpenceCategory("\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05DE\u05D6\u05D3\u05DE\u05E0\u05D5\u05EA"),
];
// these array contains all user expences
var expences = [
    new Expence("\u05D8\u05DC\u05E4\u05D5\u05DF ", "\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA", 1000),
    new Expence("\u05D4\u05DC\u05D5\u05D5\u05D0\u05EA \u05E8\u05DB\u05D1 ", "\u05D4\u05DC\u05D5\u05D5\u05D0\u05D5\u05EA", 980),
    new Expence("\u05D8\u05DC\u05D5\u05D5\u05D9\u05D6\u05D9\u05D4 ", "\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA", 980),
];
// this function is used to render the income calculator
// function renderIncomeCalculator(htmlElemnet: HTMLElement) {
//   try {
//   } catch (error) {
//     console.error(error);
//   }
//   // const html=
// }
// this function is used to render the expenses calculator
function renderExpenceCalculator() {
    var categoriesHtml = expenceCategorys
        .map(function (category) { return "<option value=\"\">" + category.categoryName + "</option>"; })
        .join(" ");
    var expencesRoots = document.querySelector("#expences-calculators");
    if (!expencesRoots)
        throw new Error("expencesRoots not found");
    expencesRoots.innerHTML = " <h3>\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05D5\u05EA</h3>\n  <div class=\"user-box\">\n    <input\n      type=\"text\"\n      name=\"expence-description\"\n      id=\"expence-description\"\n    />\n    <label for=\"expence-description\">\u05E9\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4:</label>\n  </div>\n  <div class=\"user-box\">\n    <label for=\"categories\"\n      >\u05DE\u05D4 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label\n    >\n    <select name=\"categories\" id=\"categories\">\n    " + categoriesHtml + "\n    </select>\n  </div>\n  <div class=\"user-box\">\n    <input\n      type=\"number\"\n      name=\"expence-amount\"\n      id=\"expence-calculators\"\n    />\n    <label for=\"expence-amount\">\u05DE\u05D4 \u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label>\n  </div>\n  <div class=\"user-box\">\n    <input\n      type=\"date\"\n      name=\"expiration\"\n      id=\"expiration\"\n      class=\"date\"\n    />\n    <label for=\"expiration\"\n      >\u05DE\u05D4\u05D5 \u05EA\u05D5\u05E7\u05E3 \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA? (\u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9)</label\n    >\n  </div>\n  <input type=\"submit\" value=\"\u05D4\u05D5\u05E1\u05E3\" />";
    try {
    }
    catch (error) {
        console.error(error);
    }
}
function renderExpencesTable(expences) {
    try {
        var sortedExpences = sortByCategory(expences);
        var rootExpencesTable = document.querySelector("#expences-table");
        if (!rootExpencesTable)
            throw new Error("expencesTable not found");
        if (sortedExpences === undefined)
            throw new Error("sortedExpences not found");
        var userCategories_1 = [];
        sortedExpences.forEach(function (expense) {
            if (!userCategories_1.includes(expense.category)) {
                userCategories_1.push(expense.category);
            }
        });
        if (sortedExpences === null || sortedExpences.length === 0)
            rootExpencesTable.innerHTML = "<h2>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E6\u05E4\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05EA \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D9\u05E9 \u05DC\u05D4\u05D6\u05D9\u05DF \u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05D4 \u05E9\u05DE\u05E6\u05D3 \u05E9\u05DE\u05D0\u05DC</h2>";
        var htmlHeadersTable = userCategories_1
            .map(function (category) {
            // `<tr><td>${expence.name}</td><td>${expence.amount}&#8362;</td></tr>`
            return "<tr class=\"thead\">\n          <th colspan=\"2\">\n            " + category + "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke-width=\"1.5\"\n              stroke=\"currentColor\"\n              class=\"collapse-icon\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                d=\"M18 12H6\"\n              />\n            </svg>\n          </th>\n        </tr><tbody id=\"" + category + "\"></tbody>";
        })
            .join(" ");
        rootExpencesTable.innerHTML = "<table>" + htmlHeadersTable + "</table>";
        userCategories_1.forEach(function (category) {
            var html = document.querySelector("#" + category);
            var htmlCreateTr = document.createElement("tr");
            console.log(htmlCreateTr);
            if (!html)
                throw new Error("html not found");
            expences.forEach(function (expence) {
                if (expence.category === category) {
                    html.innerHTML += "<tr class=\"tbody\"><td>" + expence.name + "</td><td>" + expence.amount + "&#8362;</td></tr>";
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderResult(htmlElemnet, income) {
    try {
        htmlElemnet.innerHTML = income + "&#8362;";
    }
    catch (error) {
        console.error(error);
    }
}
function handleExpenceSubmit(ev) {
    ev.preventDefault();
    ev.reset();
    try {
        console.log(ev);
    }
    catch (error) {
        console.error(error);
    }
}
function handleIncomeSubmit(ev) {
    try {
        ev.preventDefault();
        if (!ev || !ev.target)
            throw new Error("event not found");
        var income = ev.target.income.value;
        var resultRoot = document.querySelector(".total-number--income");
        console.dir(resultRoot);
        if (!resultRoot)
            throw new Error("resultRoot not found");
        renderResult(resultRoot, income);
        loadDataToLocalStorage(income, "income");
        calculateBalance();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
// this function calculates the balance
function calculateBalance() {
    var _a, _b;
    try {
        var balanceRoot = document.querySelector(".total-number--balance");
        var incomeRoot = (_a = document.querySelector(".total-number--income")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        var expenceRoot = (_b = document.querySelector(".total-number--expence")) === null || _b === void 0 ? void 0 : _b.innerHTML;
        if (!incomeRoot || !expenceRoot)
            throw new Error("no roots");
        if (!balanceRoot)
            throw new Error("balance not fount");
        balanceRoot.innerHTML = parseFloat(incomeRoot) - parseFloat(expenceRoot) + "&#8362;";
        if (parseFloat(incomeRoot) - parseFloat(expenceRoot) > 0) {
            balanceRoot.classList.remove("total-number--expence");
            balanceRoot.classList.add("total-number--income");
        }
        else {
            balanceRoot.classList.remove("total-number--income");
            balanceRoot.classList.add("total-number--expence");
        }
        loadDataToLocalStorage(incomeRoot, "income");
    }
    catch (error) {
        console.error(error);
    }
}
function sortByCategory(expences) {
    try {
        var sortedExpences = expences.sort(function (a, b) {
            if (a.category > b.category)
                return 1;
            if (a.category < b.category)
                return -1;
            return 0;
        });
        return sortedExpences;
    }
    catch (error) {
        console.error(error);
    }
}
// this function is used to load any data to local storage
function loadDataToLocalStorage(data, keyName) {
    if (typeof data === "string") {
        localStorage.setItem(keyName, data);
    }
    else {
        var dataString = JSON.stringify(data);
        localStorage.setItem(keyName, dataString);
    }
}
// when refreshing the page this function will render the total numbers from local storage
function loadPage() {
    try {
        var incomeRoot = document.querySelector(".total-number--income");
        var expenceRoot = document.querySelector(".total-number--expence");
        var balanceRoot = document.querySelector(".total-number--balance");
        if (!incomeRoot || !expenceRoot || !balanceRoot)
            throw new Error("roots is missing");
        var incomeFromLocalStorage = localStorage.getItem("income");
        if (incomeFromLocalStorage)
            incomeRoot.innerHTML = "" + incomeFromLocalStorage;
        balanceRoot.innerHTML = parseFloat(incomeRoot.innerHTML) - parseFloat(expenceRoot.innerHTML) + "&#8362;";
        if (parseFloat(incomeRoot.innerHTML) - parseFloat(expenceRoot.innerHTML) >
            0) {
            balanceRoot.classList.remove("total-number--expence");
            balanceRoot.classList.add("total-number--income");
        }
        else {
            balanceRoot.classList.remove("total-number--income");
            balanceRoot.classList.add("total-number--expence");
        }
    }
    catch (error) {
        console.error(error);
    }
}
// revoke function when loading page
loadPage();
// revoke expence calculator when loading page
renderExpenceCalculator();
// revoke expences table (if such) when loading or refreshing page
renderExpencesTable(expences);
var accordion = document.querySelectorAll(".thead");
accordion.forEach(function (head) {
    head.addEventListener("click", function (ev) {
        var _a;
        head.classList.toggle("active");
        console.dir(head);
        var nextElementSibling = (_a = head.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (!nextElementSibling)
            throw new Error("nextElementSibling not found");
        if (nextElementSibling.classList.contains("off")) {
            nextElementSibling.classList.remove("off");
        }
        else {
            nextElementSibling.classList.add("off");
            debugger;
            var svg = head.childNodes[1];
            var newSvg = document.createElement("svg");
            var newSvgString = document.createTextNode("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m6-6H6\" />\n    </svg>");
            newSvg.appendChild(newSvgString);
            svg.replaceChild(newSvg, svg.childNodes[1]);
            // console.dir(head.childNodes[1].childNodes[1]);
        }
    });
});
