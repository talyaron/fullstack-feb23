// this function is used to handle accordion click
function handleAccordionClick() {
    const accordion = document.querySelectorAll(`.thead`);
    // this method will take care the accordion functionality
    accordion.forEach((head) => {
        // first we handling the fold and unfold functions
        head.addEventListener(`click`, (ev) => {
            var _a;
            head.classList.toggle(`active`);
            const svgRoot = head.childNodes[1];
            const createSvgDiv = document.createElement(`div`);
            if (!((_a = head.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling))
                throw new Error(`next sibling not found`);
            const nextElementSibling = head.parentElement.nextElementSibling;
            if (!nextElementSibling)
                throw new Error(`nextElementSibling not found`);
            if (nextElementSibling.classList.contains(`off`)) {
                nextElementSibling.classList.remove(`off`);
                // second we handling the svg replacing (plus, minus)
                createSvgDiv.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="collapse-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M18 12H6"
      />
    </svg>`;
                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
            }
            else {
                nextElementSibling.classList.add(`off`);
                createSvgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="collapse-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>`;
                svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
            }
        });
    });
}
// this function gets categories from local storage when the page loads
function getCategoriesFromLocalStorage() {
    if (localStorage.getItem("userCategories") == null)
        throw new Error("no categories in local storage");
    const categoriesAsString = localStorage.getItem("userCategories");
    if (categoriesAsString === null)
        throw new Error("no categories in local storage");
    const categories = JSON.parse(categoriesAsString);
    userCategories.push(...categories);
}
// this function is used to check and add new category
function addCategory(expences) {
    expences.forEach((expence) => {
        // console.dir(userCategories[0].categoryName);
        if (expence.category === undefined)
            throw new Error(`category is undefined`);
        if (userCategories.length === 0 ||
            userCategories.every((category) => category.categoryName !== expence.category)) {
            userCategories.push(new UserCategories(expence.category, expence.categoryId));
        }
        // userCategories.push(newObject);
        localStorage.setItem("userCategories", JSON.stringify(userCategories));
    });
}
// this function handling the expence submit
function handleExpenceSubmit(ev) {
    var _a;
    try {
        ev.preventDefault();
        const resultRoot = document.querySelector(`.total-number--expence`);
        if (!resultRoot)
            throw new Error(`resultRoot not found`);
        const expenceDescription = ev.target.expenceDescription.value;
        const categoryId = ev.target.categories.value;
        const expenceAmount = ev.target.expenceAmount.valueAsNumber;
        // if(!ev.target.categories.value) throw new Error(`categoryId not found`);
        const categoryName = (_a = Categorys.find((category) => `id-${category.categoryId}` === categoryId)) === null || _a === void 0 ? void 0 : _a.categoryName;
        expences.push(new Expence(expenceDescription, categoryName, categoryId, expenceAmount));
        // userCategories.push(new UserCategories(categoryName, categoryId));
        addCategory(expences);
        renderExpencesTable(expences, userCategories);
        loadDataToLocalStorage(expences, `expences`);
        handleAccordionClick();
        const allExpences = calculateTotalExpence(expences);
        loadDataToLocalStorage(allExpences, `totalExpence`);
        renderResult(resultRoot, null, allExpences);
        // loadDataToLocalStorage()
        ev.target.reset();
        console.log(ev);
    }
    catch (error) {
        console.error(error);
    }
}
// this funcion calculates the total expences
function calculateTotalExpence(expences) {
    let totalExpence = 0;
    expences.forEach((expense) => {
        totalExpence += expense.amount;
    });
    return totalExpence;
}
// this function handling the income submit
function handleIncomeSubmit(ev) {
    try {
        ev.preventDefault();
        if (!ev || !ev.target)
            throw new Error(`event not found`);
        const income = ev.target.income.value;
        const resultRoot = document.querySelector(`.total-number--income`);
        if (!resultRoot)
            throw new Error(`resultRoot not found`);
        renderResult(resultRoot, income);
        loadDataToLocalStorage(income, `income`);
        calculateBalance();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
// this function calculates the balance
function calculateBalance() {
    var _a;
    try {
        const balanceRoot = document.querySelector(`.total-number--balance`);
        const incomeRoot = (_a = document.querySelector(`.total-number--income`)) === null || _a === void 0 ? void 0 : _a.innerHTML;
        const allExpences = calculateTotalExpence(expences);
        const expenceRoot = document.querySelector(`.total-number--expence`);
        if (!incomeRoot || !expenceRoot)
            throw new Error(`no roots`);
        if (!balanceRoot)
            throw new Error(`balance not fount`);
        balanceRoot.innerHTML = `${parseFloat(incomeRoot) - allExpences}&#8362;`;
        if (parseFloat(incomeRoot) - allExpences > 0) {
            balanceRoot.classList.remove(`total-number--expence`);
            balanceRoot.classList.add(`total-number--income`);
        }
        else {
            balanceRoot.classList.remove(`total-number--income`);
            balanceRoot.classList.add(`total-number--expence`);
        }
        expenceRoot.innerHTML = `${allExpences}&#8362;`;
        // loadDataToLocalStorage(incomeRoot, `income`);
    }
    catch (error) {
        console.error(error);
    }
}
// this function sort the expences by category alfabetically
function sortByCategory(category) {
    try {
        const sortedCategory = userCategories.sort((a, b) => {
            if (a.categoryName > b.categoryName)
                return 1;
            if (a.categoryName < b.categoryName)
                return -1;
            return 0;
        });
        return sortedCategory;
    }
    catch (error) {
        console.error(error);
    }
}
// this function is used to load any data to local storage
function loadDataToLocalStorage(data, keyName) {
    if (typeof data === `string`) {
        localStorage.setItem(keyName, data);
    }
    else {
        const dataString = JSON.stringify(data);
        localStorage.setItem(keyName, dataString);
    }
}
// when refreshing the page this function will render the total numbers from local storage
function loadPage() {
    try {
        const incomeRoot = document.querySelector(`.total-number--income`);
        const expenceRoot = document.querySelector(`.total-number--expence`);
        const balanceRoot = document.querySelector(`.total-number--balance`);
        const expencesStringFromLocalStorage = localStorage.getItem(`expences`);
        const userCategoriesStringFromLocalStorage = localStorage.getItem(`userCategories`);
        if (expencesStringFromLocalStorage !== null) {
            const expencesFromLocalStorage = JSON.parse(expencesStringFromLocalStorage);
            expences.push(...expencesFromLocalStorage);
        }
        // const expencesFromLocalStorage: Expence[] = JSON.parse(
        //   expencesStringFromLocalStorage
        // );
        if (!incomeRoot || !expenceRoot || !balanceRoot)
            throw new Error(`roots is missing`);
        const incomeFromLocalStorage = localStorage.getItem(`income`);
        const expenceAmountFromLocalStorage = localStorage.getItem(`totalExpence`);
        if (userCategoriesStringFromLocalStorage !== null) {
            const userJsonCategories = JSON.parse(userCategoriesStringFromLocalStorage);
            userCategories.push(...userJsonCategories);
        }
        if (incomeFromLocalStorage != null)
            incomeRoot.innerHTML = `${incomeFromLocalStorage}&#8362;`;
        calculateBalance();
        // getCategoriesFromLocalStorage()
        if (expenceAmountFromLocalStorage)
            expenceRoot.innerHTML = `${expenceAmountFromLocalStorage}&#8362;`;
        calculateBalance();
        if (expenceAmountFromLocalStorage)
            calculateBalance();
        renderExpencesTable(expences, userCategories);
    }
    catch (error) {
        console.error(error);
    }
}
function deleteExpense(ev) {
    const expenseId = ev.target.parentElement.parentElement.id;
    const categoryId = ev.target.parentElement.parentElement.parentElement.id;
    const categoryName = ev.target.parentElement.parentElement.parentElement.previousElementSibling
        .childNodes[0].innerText;
    const same = expences.filter((expense) => expense.category === categoryName);
    // console.log(same);
    const index = expences.findIndex((expense) => expense.expenseId === expenseId);
    expences.splice(index, 1);
    const indexUserCategories = userCategories.findIndex((category) => category.categoryId === categoryId);
    // if(userCategories[indexUserCategories].
    if (same.length < 2) {
        userCategories.splice(indexUserCategories, 1);
    }
    localStorage.setItem("userCategories", JSON.stringify(userCategories));
    loadDataToLocalStorage(expences, `expences`);
    const allExpences = calculateTotalExpence(expences);
    loadDataToLocalStorage(allExpences, `totalExpence`);
    ev.stopImmediatePropagation();
    window.location.reload();
}
function editExpense(ev) {
    const expenseId = ev.target.parentElement.parentElement.id;
    const newName = prompt(`מה השם החדש של ההוצאה שלך?`);
    const newAmount = prompt(`מה הסכום החדש של ההוצאה שלך?`);
    const index = expences.findIndex((expense) => expense.expenseId === expenseId);
    if (newName !== undefined || newName !== null) {
        if (newName === null)
            throw new Error(`newName is null`);
        expences[index].name = newName;
    }
    if (newAmount !== undefined || newAmount !== null) {
        expences[index].amount = Number(newAmount);
    }
    const expenceRoot = document.querySelector(`.total-number--expence`);
    localStorage.setItem("userCategories", JSON.stringify(userCategories));
    loadDataToLocalStorage(expences, `expences`);
    window.location.reload();
}
// view
// this function is used to render the expenses calculator
function renderExpenceCalculator() {
    try {
        const categoriesHtml = Categorys.map((category) => `<option value="id-${category.categoryId}">${category.categoryName}</option>`).join(` `);
        const expencesRoots = document.querySelector(`#expences-calculators`);
        if (!expencesRoots)
            throw new Error(`expencesRoots not found`);
        expencesRoots.innerHTML = ` <h3>הוצאות חודשיות</h3>
  <div class="user-box">
    <input
      type="text"
      name="expenceDescription"
      id="expenceDescription" required
    />
    <label for="expenceDescription">שם ההוצאה:</label>
  </div>
  <div class="user-box">
    <label for="categories"
      >מה הקטגוריה המתאימה עבור ההוצאה שלך?</label
    >
    <select name="categories" id="categories">
    <option value="" disabled selected>בחר/י את הקטגוריה</option>
    ${categoriesHtml}
    </select>
  </div>
  <div class="user-box">
    <input
      type="number"
      name="expenceAmount"
      id="expenceAmount" required 
    />
    <label for="expenceAmount">מה סכום ההוצאה שלך?</label>
  </div>
  
  <input type="submit" value="הוסף" />`;
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
        const sortedCategories = sortByCategory(userCategories);
        const rootExpencesTable = document.querySelector(`#expences-table`);
        if (!rootExpencesTable)
            throw new Error(`expencesTable not found`);
        if (sortedCategories === undefined)
            throw new Error(`sortedExpences not found`);
        if (sortedCategories === null ||
            sortedCategories.length === 0 ||
            expences.length === 0 ||
            expences === null)
            return (rootExpencesTable.innerHTML = `<h2>על מנת לצפות בטבלת ההוצאות יש להזין הוצאות בטבלה שמצד שמאל</h2>`);
        const htmlHeadersTable = userCategories
            .map((category) => 
        // `<tr><td>${expence.name}</td><td>${expence.amount}&#8362;</td></tr>`
        //  const categoryId = expences.find(
        //     (expence) => expence.category === category
        //   ).categoryId;}
        `<tr class="thead">
          <th colspan="4">
            ${category.categoryName}<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="collapse-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 12H6"
              />
            </svg>
          </th>
        </tr><tbody id="${category.categoryId}"></tbody>`)
            .join(` `);
        rootExpencesTable.innerHTML = `<table id="tbl_exporttable_to_xls">${htmlHeadersTable}</table><div class="excel-download" onclick="ExportToExcel()">
    <h3>להורדת קובץ</h3>
    <img src="./images/icons8-excel.svg" alt="" />
  </div>`;
        userCategories.forEach((category) => {
            const html = document.querySelector(`#${category.categoryId}`);
            const htmlCreateTr = document.createElement(`tr`);
            if (!html)
                throw new Error(`html not found`);
            expences.forEach((expence) => {
                if (expence.categoryId === category.categoryId) {
                    html.innerHTML += `<tr class="tbody" id="${expence.expenseId}"><td >${expence.name}</td><td >${expence.amount}&#8362;</td><td ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit" onclick="editExpense(event)">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete" onclick="deleteExpense(event)">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg></td></tr>`;
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
            htmlElemnet.innerHTML = `${income}&#8362;`;
        if (expense)
            htmlElemnet.innerHTML = `${expense}&#8362;`;
        if (!htmlElemnet)
            throw new Error(`htmlElemnet not found`);
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
renderExpenceCalculator();
// revoke expences table (if such) when loading or refreshing page
// renderExpencesTable(expences, userCategories);
// revoke accordion functionality when loading or refreshing page
handleAccordionClick();
// getCategoriesFromLocalStorage()
function ExportToExcel(type, fn, dl) {
    var elt = document.querySelector("#tbl_exporttable_to_xls");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
        : XLSX.writeFile(wb, fn || "MyExpencesTable." + (type || "xlsx"));
}
//# sourceMappingURL=script.js.map