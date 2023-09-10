// view
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
// this function is used to render the expenses calculator
function renderExpenceCalculator() {
    return __awaiter(this, void 0, void 0, function () {
        var categoriesHtml, expensesRoots, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getExpensesFromDB()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getCategoriesFromDB()];
                case 2:
                    _a.sent();
                    categoriesHtml = categories
                        .map(function (category) {
                        return "<option value=\"" + category.categoryName + "\">" + category.categoryName + "</option>";
                    })
                        .join(" ");
                    expensesRoots = document.querySelector("#expenses-calculators");
                    if (!expensesRoots)
                        throw new Error("expensesRoots not found");
                    expensesRoots.innerHTML = " <h3>\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05D5\u05EA</h3>\n    <div class=\"user-box\">\n      <input\n        type=\"text\"\n        name=\"expenseName\"\n        id=\"expenseName\" required\n      />\n      <label for=\"expenseName\">\u05E9\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4:</label>\n    </div>\n    <div class=\"user-box\">\n      <label for=\"categories\"\n        >\u05DE\u05D4 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label\n      >\n      <select name=\"categoryName\" id=\"categories\">\n      <option value=\"\" disabled selected>\u05D1\u05D7\u05E8/\u05D9 \u05D0\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</option>\n      " + categoriesHtml + "\n      </select>\n    </div>\n    <div class=\"user-box\">\n      <input\n        type=\"number\"\n        name=\"expenseAmount\"\n        id=\"expenseAmount\" required \n      />\n      <label for=\"expenseAmount\">\u05DE\u05D4 \u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label>\n    </div>\n    \n    <input type=\"submit\" value=\"\u05D4\u05D5\u05E1\u05E3\" />";
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
// this function is used to render the Expenses Table
function renderExpencesTable() {
    return __awaiter(this, void 0, void 0, function () {
        var rootExpensesTable, htmlHeadersTable, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, sortCategoriesByUserActualExpenses(expenses)];
                case 1:
                    _a.sent();
                    rootExpensesTable = document.querySelector("#expenses-table");
                    if (!rootExpensesTable)
                        throw new Error("expensesTable not found");
                    if (expenses.length === 0) {
                        return [2 /*return*/, (rootExpensesTable.innerHTML = "<h2>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E6\u05E4\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05EA \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D9\u05E9 \u05DC\u05D4\u05D6\u05D9\u05DF \u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05D4 \u05E9\u05DE\u05E6\u05D3 \u05E9\u05DE\u05D0\u05DC</h2>")];
                    }
                    htmlHeadersTable = fillterdCategories
                        .map(function (category) {
                        return "<tr class=\"thead\">\n            <th colspan=\"4\">\n              " + category + "<svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke-width=\"1.5\"\n                stroke=\"currentColor\"\n                class=\"collapse-icon\"\n              >\n                <path\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  d=\"M18 12H6\"\n                />\n              </svg>\n            </th>\n          </tr><tbody id=\"id-" + getCategoryId(category) + "\"></tbody>";
                    })
                        .join(" ");
                    rootExpensesTable.innerHTML = "<table id=\"tbl_exporttable_to_xls\">" + htmlHeadersTable + "</table><div class=\"excel-download\" onclick=\"ExportToExcel()\">\n      <h3>\u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05E7\u05D5\u05D1\u05E5</h3>\n      <img src=\"./images/icons8-excel.svg\" alt=\"\" />\n    </div>";
                    fillterdCategories.forEach(function (category) {
                        // console.log(userCategories);
                        var html = document.querySelector("#id-" + getCategoryId(category));
                        console.log(html);
                        if (!html)
                            throw new Error("html not found");
                        expenses.forEach(function (expense) {
                            if (expense.categoryName === category) {
                                html.innerHTML += "<tr class=\"tbody\" id=\"" + expense._id + "\"><td >" + expense.expenseName + "</td><td >" + expense.expenseAmount + "&#8362;</td><td ><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"edit\" onclick=\"editExpense(event)\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10\" />\n          </svg><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"delete\" onclick=\"deleteExpense(event)\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\" />\n        </svg></td></tr>";
                            }
                        });
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// this function is used to render the result area
function renderResult(htmlElemnet, expense) {
    return __awaiter(this, void 0, void 0, function () {
        var userIncome, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getUserIncomeFromDB()];
                case 1:
                    userIncome = _a.sent();
                    if (userIncome !== null || undefined)
                        htmlElemnet.innerHTML = userIncome + "&#8362;";
                    if (userIncome.message === "0")
                        htmlElemnet.innerHTML = "0" + "&#8362;";
                    if (expense)
                        htmlElemnet.innerHTML = expense + "&#8362;";
                    if (!htmlElemnet)
                        throw new Error("htmlElemnet not found");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
