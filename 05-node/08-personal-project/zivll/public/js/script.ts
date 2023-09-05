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
    const incomeRoot = document.querySelector(`.total-number--income`);
    const expenceRoot = document.querySelector(`.total-number--expence`);
    const balanceRoot = document.querySelector(`.total-number--balance`);
    const expencesStringFromLocalStorage = localStorage.getItem(`expences`);
    const userCategoriesStringFromLocalStorage =
      localStorage.getItem(`userCategories`);
    if (expencesStringFromLocalStorage !== null) {
      const expencesFromLocalStorage: Expence[] = JSON.parse(
        expencesStringFromLocalStorage
      );
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
      const userJsonCategories = JSON.parse(
        userCategoriesStringFromLocalStorage
      );
      userCategories.push(...userJsonCategories);
    }

    if (incomeFromLocalStorage != null)
      incomeRoot.innerHTML = `${incomeFromLocalStorage}&#8362;`;
    calculateBalance();
    // getCategoriesFromLocalStorage()
    if (expenceAmountFromLocalStorage)
      expenceRoot.innerHTML = `${expenceAmountFromLocalStorage}&#8362;`;
    calculateBalance();
    if (expenceAmountFromLocalStorage) calculateBalance();
    renderExpencesTable(expences, userCategories);
  } catch (error) {
    console.error(error);
  }
}
// view

// this function is used to render the expenses calculator
function renderExpenceCalculator() {
  try {
    const categoriesHtml = Categorys.map(
      (category) =>
        `<option value="id-${category.categoryId}">${category.categoryName}</option>`
    ).join(` `);
    const expencesRoots = document.querySelector(`#expences-calculators`);
    if (!expencesRoots) throw new Error(`expencesRoots not found`);
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
  } catch (error) {
    console.error(error);
  }
}
// this function is used to render the expences table
function renderExpencesTable(
  expences: Expence[],
  userCategories: UserCategories[]
) {
  try {
    // const sortedExpences = sortByCategory(expences);

    const sortedCategories = sortByCategory(userCategories);

    const rootExpencesTable = document.querySelector(`#expences-table`);
    if (!rootExpencesTable) throw new Error(`expencesTable not found`);
    if (sortedCategories === undefined)
      throw new Error(`sortedExpences not found`);

    if (
      sortedCategories === null ||
      sortedCategories.length === 0 ||
      expences.length === 0 ||
      expences === null
    )
      return (rootExpencesTable.innerHTML = `<h2>על מנת לצפות בטבלת ההוצאות יש להזין הוצאות בטבלה שמצד שמאל</h2>`);
    const htmlHeadersTable = userCategories
      .map(
        (category: UserCategories) =>
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
        </tr><tbody id="${category.categoryId}"></tbody>`
      )
      .join(` `);
    rootExpencesTable.innerHTML = `<table id="tbl_exporttable_to_xls">${htmlHeadersTable}</table><div class="excel-download" onclick="ExportToExcel()">
    <h3>להורדת קובץ</h3>
    <img src="./images/icons8-excel.svg" alt="" />
  </div>`;
    userCategories.forEach((category) => {
      const html = document.querySelector(`#${category.categoryId}`);
      const htmlCreateTr = document.createElement(`tr`);
      if (!html) throw new Error(`html not found`);

      expences.forEach((expence: Expence) => {
        if (expence.categoryId === category.categoryId) {
          html.innerHTML += `<tr class="tbody" id="${expence.expenseId}"><td >${expence.name}</td><td >${expence.amount}&#8362;</td><td ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit" onclick="editExpense(event)">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete" onclick="deleteExpense(event)">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg></td></tr>`;
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}
// this function is used to render the result area
function renderResult(
  htmlElemnet: Element,
  income?: string | undefined | null,
  expense?: number
) {
  try {
    if (income !== null || undefined)
      htmlElemnet.innerHTML = `${income}&#8362;`;
    if (expense) htmlElemnet.innerHTML = `${expense}&#8362;`;
    if (!htmlElemnet) throw new Error(`htmlElemnet not found`);
    calculateBalance();
  } catch (error) {
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
