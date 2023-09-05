// this function is used to load any data to local storage
// function loadDataToLocalStorage(data, keyName: string) {
//   if (typeof data === `string`) {
//     localStorage.setItem(keyName, data);
//   } else {
//     const dataString = JSON.stringify(data);
//     localStorage.setItem(keyName, dataString);
//   }
// }
function loadPage() {
    try {
        var incomeRoot = document.querySelector(".total-number--income");
        var expenceRoot = document.querySelector(".total-number--expence");
        var balanceRoot = document.querySelector(".total-number--balance");
        var expencesStringFromLocalStorage = localStorage.getItem("expences");
        var userCategoriesStringFromLocalStorage = localStorage.getItem("userCategories");
        if (expencesStringFromLocalStorage !== null) {
            var expencesFromLocalStorage = JSON.parse(expencesStringFromLocalStorage);
            expences.push.apply(expences, expencesFromLocalStorage);
        }
        // const expencesFromLocalStorage: Expence[] = JSON.parse(
        //   expencesStringFromLocalStorage
        // );
        if (!incomeRoot || !expenceRoot || !balanceRoot)
            throw new Error("roots is missing");
        var incomeFromLocalStorage = localStorage.getItem("income");
        var expenceAmountFromLocalStorage = localStorage.getItem("totalExpence");
        if (userCategoriesStringFromLocalStorage !== null) {
            var userJsonCategories = JSON.parse(userCategoriesStringFromLocalStorage);
            userCategories.push.apply(userCategories, userJsonCategories);
        }
        if (incomeFromLocalStorage != null)
            incomeRoot.innerHTML = incomeFromLocalStorage + "&#8362;";
        calculateBalance();
        // getCategoriesFromLocalStorage()
        if (expenceAmountFromLocalStorage)
            expenceRoot.innerHTML = expenceAmountFromLocalStorage + "&#8362;";
        calculateBalance();
        if (expenceAmountFromLocalStorage)
            calculateBalance();
        renderExpencesTable(expences, userCategories);
    }
    catch (error) {
        console.error(error);
    }
}
// view
// this function is used to render the expenses calculator
function renderExpenceCalculator() {
    try {
        var categoriesHtml = Categorys.map(function (category) {
            return "<option value=\"id-" + category.categoryId + "\">" + category.categoryName + "</option>";
        }).join(" ");
        var expencesRoots = document.querySelector("#expences-calculators");
        if (!expencesRoots)
            throw new Error("expencesRoots not found");
        expencesRoots.innerHTML = " <h3>\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9\u05D5\u05EA</h3>\n  <div class=\"user-box\">\n    <input\n      type=\"text\"\n      name=\"expenceDescription\"\n      id=\"expenceDescription\" required\n    />\n    <label for=\"expenceDescription\">\u05E9\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4:</label>\n  </div>\n  <div class=\"user-box\">\n    <label for=\"categories\"\n      >\u05DE\u05D4 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label\n    >\n    <select name=\"categories\" id=\"categories\">\n    <option value=\"\" disabled selected>\u05D1\u05D7\u05E8/\u05D9 \u05D0\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</option>\n    " + categoriesHtml + "\n    </select>\n  </div>\n  <div class=\"user-box\">\n    <input\n      type=\"number\"\n      name=\"expenceAmount\"\n      id=\"expenceAmount\" required \n    />\n    <label for=\"expenceAmount\">\u05DE\u05D4 \u05E1\u05DB\u05D5\u05DD \u05D4\u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05DA?</label>\n  </div>\n  \n  <input type=\"submit\" value=\"\u05D4\u05D5\u05E1\u05E3\" />";
        // loadDataToLocalStorage();
    }
    catch (error) {
        console.error(error);
    }
}
// this function is used to render the expences table
function renderExpencesTable(expences, userCategories) {
    try {
        // const sortedExpences = sortByCategory(expences);
        var sortedCategories = sortByCategory(userCategories);
        var rootExpencesTable = document.querySelector("#expences-table");
        if (!rootExpencesTable)
            throw new Error("expencesTable not found");
        if (sortedCategories === undefined)
            throw new Error("sortedExpences not found");
        if (sortedCategories === null ||
            sortedCategories.length === 0 ||
            expences.length === 0 ||
            expences === null)
            return (rootExpencesTable.innerHTML = "<h2>\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E6\u05E4\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05EA \u05D4\u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D9\u05E9 \u05DC\u05D4\u05D6\u05D9\u05DF \u05D4\u05D5\u05E6\u05D0\u05D5\u05EA \u05D1\u05D8\u05D1\u05DC\u05D4 \u05E9\u05DE\u05E6\u05D3 \u05E9\u05DE\u05D0\u05DC</h2>");
        var htmlHeadersTable = userCategories
            .map(function (category) {
            // `<tr><td>${expence.name}</td><td>${expence.amount}&#8362;</td></tr>`
            //  const categoryId = expences.find(
            //     (expence) => expence.category === category
            //   ).categoryId;}
            return "<tr class=\"thead\">\n          <th colspan=\"4\">\n            " + category.categoryName + "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke-width=\"1.5\"\n              stroke=\"currentColor\"\n              class=\"collapse-icon\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                d=\"M18 12H6\"\n              />\n            </svg>\n          </th>\n        </tr><tbody id=\"" + category.categoryId + "\"></tbody>";
        })
            .join(" ");
        rootExpencesTable.innerHTML = "<table id=\"tbl_exporttable_to_xls\">" + htmlHeadersTable + "</table><div class=\"excel-download\" onclick=\"ExportToExcel()\">\n    <h3>\u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05E7\u05D5\u05D1\u05E5</h3>\n    <img src=\"./images/icons8-excel.svg\" alt=\"\" />\n  </div>";
        userCategories.forEach(function (category) {
            var html = document.querySelector("#" + category.categoryId);
            var htmlCreateTr = document.createElement("tr");
            if (!html)
                throw new Error("html not found");
            expences.forEach(function (expence) {
                if (expence.categoryId === category.categoryId) {
                    html.innerHTML += "<tr class=\"tbody\" id=\"" + expence.expenseId + "\"><td >" + expence.name + "</td><td >" + expence.amount + "&#8362;</td><td ><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"edit\" onclick=\"editExpense(event)\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10\" />\n        </svg><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"delete\" onclick=\"deleteExpense(event)\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\" />\n      </svg></td></tr>";
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
// this function is used to render the result area
function renderResult(htmlElemnet, income, expense) {
    try {
        if (income !== null || undefined)
            htmlElemnet.innerHTML = income + "&#8362;";
        if (expense)
            htmlElemnet.innerHTML = expense + "&#8362;";
        if (!htmlElemnet)
            throw new Error("htmlElemnet not found");
        calculateBalance();
    }
    catch (error) {
        console.error(error);
    }
}
// revoke function when loading page
loadPage();
// revoke expence calculator when loading page
// getCategoriesFromLocalStorage();
// renderExpenceCalculator();
// revoke expences table (if such) when loading or refreshing page
// renderExpencesTable(expences, userCategories);
// revoke accordion functionality when loading or refreshing page
// handleAccordionClick();
// getCategoriesFromLocalStorage()
