var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var categories = [];
var expenses = [];
// this function is used to handle accordion click
function handleAccordionClick() {
    var accordion = document.querySelectorAll(".thead");
    // this method will take care the accordion functionality
    accordion.forEach(function (head) {
        // first we handling the fold and unfold functions
        head.addEventListener("click", function (ev) {
            var _a;
            head.classList.toggle("active");
            var svgRoot = head.childNodes[1];
            var createSvgDiv = document.createElement("div");
            if (!((_a = head.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling))
                throw new Error("next sibling not found");
            var nextElementSibling = head.parentElement.nextElementSibling;
            if (!nextElementSibling)
                throw new Error("nextElementSibling not found");
            if (nextElementSibling.classList.contains("off")) {
                nextElementSibling.classList.remove("off");
                // second we handling the svg replacing (plus, minus)
                createSvgDiv.innerHTML = "<svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        fill=\"none\"\n        viewBox=\"0 0 24 24\"\n        stroke-width=\"1.5\"\n        stroke=\"currentColor\"\n        class=\"collapse-icon\"\n      >\n        <path\n          stroke-linecap=\"round\"\n          stroke-linejoin=\"round\"\n          d=\"M18 12H6\"\n        />\n      </svg>";
                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
            }
            else {
                nextElementSibling.classList.add("off");
                createSvgDiv.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"collapse-icon\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m6-6H6\" />\n      </svg>";
                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
            }
        });
    });
}
// this function handling the income submit
function handleIncomeSubmit(ev) {
    try {
        ev.preventDefault();
        if (!ev || !ev.target)
            throw new Error("event not found");
        var income = ev.target.income.value;
        var resultRoot = document.querySelector(".total-number--income");
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
// this function handling the expence submit
function handleExpenceSubmit(ev) {
    var _a;
    try {
        ev.preventDefault();
        var resultRoot = document.querySelector(".total-number--expence");
        if (!resultRoot)
            throw new Error("resultRoot not found");
        var expenceDescription = ev.target.expenceDescription.value;
        var categoryId_1 = ev.target.categories.value;
        var expenceAmount = ev.target.expenceAmount.valueAsNumber;
        // if(!ev.target.categories.value) throw new Error(`categoryId not found`);
        var categoryName = (_a = Categorys.find(function (category) { return "id-" + category.categoryId === categoryId_1; })) === null || _a === void 0 ? void 0 : _a.categoryName;
        expences.push(new Expence(expenceDescription, categoryName, categoryId_1, expenceAmount));
        // userCategories.push(new UserCategories(categoryName, categoryId));
        addCategory(expences);
        renderExpencesTable(expences, userCategories);
        loadDataToLocalStorage(expences, "expences");
        handleAccordionClick();
        var allExpences = calculateTotalExpence(expences);
        loadDataToLocalStorage(allExpences, "totalExpence");
        renderResult(resultRoot, null, allExpences);
        // loadDataToLocalStorage()
        ev.target.reset();
        console.log(ev);
    }
    catch (error) {
        console.error(error);
    }
}
// this function gets categories from DB
function getCategoriesFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allCategories, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/category/get-categories")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allCategories = (_a.sent()).allCategories;
                    console.log(allCategories);
                    categories = __spreadArrays(allCategories);
                    return [2 /*return*/, categories];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this function gets Expenses from DB
function getExpensesFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allExpenses, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/expense/get-all-expenses")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allExpenses = _a.sent();
                    console.log(allExpenses);
                    expenses = __spreadArrays(allExpenses);
                    return [2 /*return*/, expenses];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteExpense(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var expenseId, response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    expenseId = ev.target.parentElement.parentElement.id;
                    return [4 /*yield*/, fetch("/API/expense/delete-expense", {
                            method: "DELETE",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(expenseId)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function editExpense(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var expenseId, newName, newAmount, respone, result, expenseRoot, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    expenseId = ev.target.parentElement.parentElement.id;
                    newName = prompt("\u05DE\u05D4 \u05D4\u05E9\u05DD \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?");
                    newAmount = prompt("\u05DE\u05D4 \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?");
                    if (newName === undefined ||
                        newName === null ||
                        newAmount === undefined ||
                        newAmount === null)
                        throw new Error("some of the parameters are null");
                    return [4 /*yield*/, fetch("/API/expense/update-expense", {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: expenseId, name: newName, amount: newAmount })
                        })];
                case 1:
                    respone = _a.sent();
                    return [4 /*yield*/, respone.json()];
                case 2:
                    result = _a.sent();
                    console.log(result.message);
                    expenseRoot = document.querySelector(".total-number--expence");
                    window.location.reload();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this function sorted the categories by user names
function sortCategoriesByUserName() {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var userNameFromUrl_1 = urlParams.get("userName");
        var categoriesByUserName = categories.filter(function (category) {
            return category.userName === userNameFromUrl_1 ||
                category.userName === "genericCategory";
        });
        return categoriesByUserName;
    }
    catch (error) {
        console.error(error);
    }
}
// this function sort the expences by category alfabetically
function sortByCategory() {
    return __awaiter(this, void 0, void 0, function () {
        var allCategories, sortedCategory, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    allCategories = getCategoriesFromDB();
                    console.log(allCategories);
                    return [4 /*yield*/, allCategories];
                case 1:
                    sortedCategory = (_a.sent()).sort(function (a, b) {
                        if (a.categoryName > b.categoryName)
                            return 1;
                        if (a.categoryName < b.categoryName)
                            return -1;
                        return 0;
                    });
                    return [2 /*return*/, sortedCategory];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// this function is used to check and add new category
function addCategory(newCategory) {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, userNameFromUrl, response, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    urlParams = new URLSearchParams(window.location.search);
                    userNameFromUrl = urlParams.get("userName");
                    return [4 /*yield*/, fetch("/API/category/add-category", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                categoryName: newCategory,
                                userName: userNameFromUrl
                            })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this funcion calculates the total expences
function calculateTotalExpence(expences) {
    var totalExpence = 0;
    expences.forEach(function (expense) {
        totalExpence += expense.amount;
    });
    return totalExpence;
}
// this function calculates the balance
function calculateBalance() {
    var _a;
    try {
        var balanceRoot = document.querySelector(".total-number--balance");
        var incomeRoot = (_a = document.querySelector(".total-number--income")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        var allExpenses = calculateTotalExpence(expenses);
        var expenseRoot = document.querySelector(".total-number--expence");
        if (!incomeRoot || !expenseRoot)
            throw new Error("no roots");
        if (!balanceRoot)
            throw new Error("balance not found");
        balanceRoot.innerHTML = parseFloat(incomeRoot) - allExpenses + "&#8362;";
        if (parseFloat(incomeRoot) - allExpenses > 0) {
            balanceRoot.classList.remove("total-number--expence");
            balanceRoot.classList.add("total-number--income");
        }
        else {
            balanceRoot.classList.remove("total-number--income");
            balanceRoot.classList.add("total-number--expence");
        }
        expenseRoot.innerHTML = allExpenses + "&#8362;";
        // loadDataToLocalStorage(incomeRoot, `income`);
    }
    catch (error) {
        console.error(error);
    }
}
// || userName === "genericCategory"
// revoke function onLoading
window.onload = function () {
    getCategoriesFromDB();
    handleAccordionClick();
    renderExpenceCalculator();
    getExpensesFromDB();
};
function ExportToExcel(type, fn, dl) {
    var elt = document.querySelector("#tbl_exporttable_to_xls");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
        : XLSX.writeFile(wb, fn || "MyExpencesTable." + (type || "xlsx"));
}
// when refreshing the page this function will render the total numbers from local storage
