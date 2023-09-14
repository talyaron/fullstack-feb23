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
var _this = this;
var categories = [];
var fillterdCategories = [];
var expenses = [];
// this function handling the income submit
function handleIncomeSubmit(ev) {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var userName = urlParams.get("userName");
        ev.preventDefault();
        if (!ev || !ev.target)
            throw new Error("event not found");
        var userIncome = ev.target.income.value;
        var resultRoot = document.querySelector(".total-number--income");
        if (!resultRoot)
            throw new Error("resultRoot not found");
        // renderResult(resultRoot, userIncome);
        calculateBalance();
        ev.target.reset();
        addIncomeToDB(userName, userIncome);
    }
    catch (error) {
        console.error(error);
    }
}
// this function is used to handle accordion click
function handleAccordionClick() {
    return __awaiter(this, void 0, void 0, function () {
        var accordion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCategoriesFromDB()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getExpensesFromDB()];
                case 2:
                    _a.sent();
                    //   await getUserIncomeFromDB();
                    return [4 /*yield*/, renderExpencesTable()];
                case 3:
                    //   await getUserIncomeFromDB();
                    _a.sent();
                    accordion = document.querySelectorAll(".thead");
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
                                createSvgDiv.innerHTML = "<svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            fill=\"none\"\n            viewBox=\"0 0 24 24\"\n            stroke-width=\"1.5\"\n            stroke=\"currentColor\"\n            class=\"collapse-icon\"\n          >\n            <path\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              d=\"M18 12H6\"\n            />\n          </svg>";
                                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
                            }
                            else {
                                nextElementSibling.classList.add("off");
                                createSvgDiv.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"collapse-icon\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 6v12m6-6H6\" />\n          </svg>";
                                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
                            }
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function addIncomeToDB(userName, userIncome) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/users/add-income", {
                            method: "PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ userName: userName, userIncome: userIncome })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    calculateBalance();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this function handling the expence submit
function handleExpenceSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var resultRoot, urlParams, userName, expenseName, categoryName, expenseAmount, respone, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    resultRoot = document.querySelector(".total-number--expense");
                    if (!resultRoot)
                        throw new Error("resultRoot not found");
                    urlParams = new URLSearchParams(window.location.search);
                    userName = urlParams.get("userName");
                    expenseName = ev.target.expenseName.value;
                    categoryName = ev.target.categoryName.value;
                    expenseAmount = ev.target.expenseAmount.valueAsNumber;
                    return [4 /*yield*/, fetch("/API/expense/add-expense", {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({
                                userName: userName,
                                expenseName: expenseName,
                                categoryName: categoryName,
                                expenseAmount: expenseAmount
                            })
                        })];
                case 1:
                    respone = _a.sent();
                    return [4 /*yield*/, respone.json()];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, getExpensesFromDB()];
                case 3:
                    _a.sent();
                    renderExpenceCalculator();
                    renderExpencesTable();
                    handleAccordionClick();
                    calculateTotalExpense();
                    calculateBalance();
                    // renderResult(resultRoot, expenseAmount.toString());
                    // loadDataToLocalStorage()
                    ev.target.reset();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// this function gets categories from DB
function getCategoriesFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allCategories, categoriesByUserName, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("/API/category/get-categories")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allCategories = (_a.sent()).allCategories;
                    return [4 /*yield*/, sortCategoriesByUserName(allCategories)];
                case 3:
                    categoriesByUserName = _a.sent();
                    categoriesByUserName.sort(sortObjectsByProperty);
                    categories = __spreadArrays(categoriesByUserName);
                    return [2 /*return*/, categories];
                case 4:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// this functions gets the user income from DB
function getUserIncomeFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, userName, response, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    urlParams = new URLSearchParams(window.location.search);
                    userName = urlParams.get("userName");
                    return [4 /*yield*/, fetch("/API/users/get-income", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ userName: userName })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    // console.log(result);
                    // if (Number(result) > 0) return result;
                    return [2 /*return*/, result.message];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this function gets Expenses from DB
function getExpensesFromDB() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allExpenses, ExpensesByUserName, error_5;
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
                    ExpensesByUserName = sortExpensesByUserName(allExpenses);
                    expenses = __spreadArrays(ExpensesByUserName);
                    return [2 /*return*/, expenses];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteExpense(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var expenseId, response, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    expenseId = ev.target.parentElement.parentElement.id;
                    return [4 /*yield*/, fetch("/API/expense/delete-expense", {
                            method: "DELETE",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ id: expenseId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, getExpensesFromDB()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, getCategoriesFromDB()];
                case 4:
                    _a.sent();
                    getUserIncomeFromDB();
                    handleAccordionClick();
                    calculateBalance();
                    renderExpenceCalculator();
                    renderExpencesTable();
                    return [3 /*break*/, 6];
                case 5:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function editExpense(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, name, amount, resposne, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    _id = ev.target.parentElement.parentElement.id;
                    name = prompt("\u05DE\u05D4 \u05D4\u05E9\u05DD \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?");
                    amount = Number(prompt("\u05DE\u05D4 \u05D4\u05E1\u05DB\u05D5\u05DD \u05D4\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?"));
                    if (name === undefined ||
                        name === null ||
                        amount === undefined ||
                        amount === null ||
                        _id === undefined ||
                        _id === null)
                        throw new Error("some of the parameters are null");
                    return [4 /*yield*/, fetch("/API/expense/update-expense", {
                            method: "PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ _id: _id, name: name, amount: amount })
                        })];
                case 1:
                    resposne = _a.sent();
                    return [4 /*yield*/, resposne.json()];
                case 2:
                    result = _a.sent();
                    return [4 /*yield*/, getExpensesFromDB()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, getCategoriesFromDB()];
                case 4:
                    _a.sent();
                    getUserIncomeFromDB();
                    handleAccordionClick();
                    calculateBalance();
                    renderExpenceCalculator();
                    renderExpencesTable();
                    return [3 /*break*/, 6];
                case 5:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// this function sorted the categories by user names
function sortCategoriesByUserName(categories) {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, userNameFromUrl_1, categoriesByUserName;
        return __generator(this, function (_a) {
            try {
                urlParams = new URLSearchParams(window.location.search);
                userNameFromUrl_1 = urlParams.get("userName");
                categoriesByUserName = categories.filter(function (category) {
                    return category.userName === userNameFromUrl_1 ||
                        category.userName === "genericCategory";
                });
                // console.log(categoriesByUserName);
                // const fillterdCategories = removeDuplicates(categoriesByUserName);
                // return fillterdCategories;
                return [2 /*return*/, categoriesByUserName];
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
// this function sort the categories by user name and actual expenses
function sortCategoriesByUserActualExpenses(expenses) {
    return __awaiter(this, void 0, void 0, function () {
        var categoriesByExpenses, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getExpensesFromDB()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getUserIncomeFromDB()];
                case 2:
                    _a.sent();
                    categoriesByExpenses = removeDuplicates(expenses);
                    return [2 /*return*/, categoriesByExpenses];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// this function sorted the categories by user names
function sortExpensesByUserName(expenses) {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var userNameFromUrl_2 = urlParams.get("userName");
        var expensesByUserName = expenses.filter(function (expense) { return expense.userName === userNameFromUrl_2; });
        return expensesByUserName;
    }
    catch (error) {
        console.error(error);
    }
}
// this function sort the expences by category alfabetically
function sortByCategory() {
    return __awaiter(this, void 0, void 0, function () {
        var sortedCategories;
        return __generator(this, function (_a) {
            try {
                sortedCategories = categories.sort(function (a, b) {
                    if (a.categoryName > b.categoryName)
                        return 1;
                    if (a.categoryName < b.categoryName)
                        return -1;
                    return 0;
                });
                return [2 /*return*/, sortedCategories];
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
// this function is used to check and add new category
function addCategory(event) {
    return __awaiter(this, void 0, void 0, function () {
        var newCategory, urlParams, userNameFromUrl, response, result, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    event.preventDefault();
                    console.dir(event);
                    newCategory = prompt("מה שם הקטגוריה החדשה?");
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
                    return [4 /*yield*/, getExpensesFromDB()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, getCategoriesFromDB()];
                case 4:
                    _a.sent();
                    getUserIncomeFromDB();
                    handleAccordionClick();
                    calculateBalance();
                    renderExpenceCalculator();
                    renderExpencesTable();
                    return [3 /*break*/, 6];
                case 5:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// this funcion calculates the total expences
function calculateTotalExpense() {
    return __awaiter(this, void 0, void 0, function () {
        var resultRoot, totalExpence;
        return __generator(this, function (_a) {
            resultRoot = document.querySelector(".total-number--expense");
            totalExpence = 0;
            expenses.forEach(function (expense) {
                totalExpence += Number(expense.expenseAmount);
            });
            //   renderResult(resultRoot, totalExpence);
            //   calculateBalance();
            //   renderExpenceCalculator();
            //   renderExpencesTable();
            return [2 /*return*/, totalExpence];
        });
    });
}
// this function calculates the balance
function calculateBalance() {
    return __awaiter(this, void 0, void 0, function () {
        var balanceRoot, incomeRoot, expenseRoot, allExpenses, userIncome, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("calculateBalance");
                    balanceRoot = document.querySelector(".total-number--balance");
                    incomeRoot = document.querySelector(".total-number--income");
                    expenseRoot = document.querySelector(".total-number--expense");
                    return [4 /*yield*/, calculateTotalExpense()];
                case 1:
                    allExpenses = _a.sent();
                    return [4 /*yield*/, getUserIncomeFromDB()];
                case 2:
                    userIncome = _a.sent();
                    incomeRoot.innerHTML = userIncome + "&#8362;";
                    expenseRoot.innerHTML = allExpenses + "&#8362;";
                    if (!balanceRoot)
                        throw new Error("balance not found");
                    balanceRoot.innerHTML = parseFloat(userIncome) - allExpenses + "&#8362;";
                    if (parseFloat(userIncome) - allExpenses > 0) {
                        balanceRoot.classList.remove("total-number--expense");
                        balanceRoot.classList.add("total-number--income");
                    }
                    else {
                        balanceRoot.classList.remove("total-number--income");
                        balanceRoot.classList.add("total-number--expense");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// || userName === "genericCategory"
// revoke function onLoading
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, checkUser()];
            case 1:
                _a.sent();
                return [4 /*yield*/, getExpensesFromDB()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getCategoriesFromDB()];
            case 3:
                _a.sent();
                getUserIncomeFromDB();
                handleAccordionClick();
                calculateBalance();
                renderExpenceCalculator();
                renderExpencesTable();
                return [2 /*return*/];
        }
    });
}); };
function ExportToExcel(type, fn, dl) {
    var elt = document.querySelector("#tbl_exporttable_to_xls");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
        : XLSX.writeFile(wb, fn || "MyExpencesTable." + (type || "xlsx"));
}
// when refreshing the page this function will render the total numbers from local storage
// this function will remove duplicates from the array
function removeDuplicates(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var newCategoriesNames_1, newCategoriesArray;
        return __generator(this, function (_a) {
            try {
                newCategoriesNames_1 = new Set();
                arr.forEach(function (obj) {
                    newCategoriesNames_1.add(obj.categoryName);
                });
                newCategoriesArray = Array.from(newCategoriesNames_1);
                newCategoriesArray.sort();
                fillterdCategories = __spreadArrays(newCategoriesArray);
                return [2 /*return*/, newCategoriesArray];
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function getCategoryId(categoryName) {
    try {
        var categoryId = categories.find(function (category) { return category.categoryName === categoryName; });
        return categoryId._id;
    }
    catch (error) {
        console.error(error);
    }
}
function sortObjectsByProperty(a, b) {
    if (a.categoryName < b.categoryName) {
        return -1;
    }
    if (a.categoryName > b.categoryName) {
        return 1;
    }
    return 0;
}
function checkUser() {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, userName, response, result, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    urlParams = new URLSearchParams(window.location.search);
                    userName = urlParams.get("userName");
                    if (!userName || userName === undefined) {
                        window.location.href = "/register.html";
                    }
                    return [4 /*yield*/, fetch("/API/users/check-user", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ userName: userName })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    // if (result.message === "user exist") {
                    //   window.location.href = `/index.html?userName=${userName}`;
                    // }
                    // } else {
                    //   alert("user does not exist, please register");
                    //   window.location.href = "/register.html";
                    // }
                    if (result.message === "user does not exist") {
                        alert("user does not exist, please register");
                        window.location.href = "/register.html";
                    }
                    if (result.error === "userName is missing")
                        alert("" + result.error);
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
