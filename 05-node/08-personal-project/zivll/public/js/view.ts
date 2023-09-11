// view

// this function is used to render the expenses calculator
async function renderExpenceCalculator() {
  try {
    await getExpensesFromDB();
    await getCategoriesFromDB();
    const categoriesHtml = categories
      .map(
        (category) =>
          `<option value="${category.categoryName}">${category.categoryName}</option>`
      )
      .join(` `);

    const expensesRoots = document.querySelector(`#expenses-calculators`);
    if (!expensesRoots) throw new Error(`expensesRoots not found`);
    expensesRoots.innerHTML = ` <h3>הוצאות חודשיות</h3>
    <div class="user-box">
      <input
        type="text"
        name="expenseName"
        id="expenseName" required
      />
      <label for="expenseName">שם ההוצאה:</label>
    </div>
    <div class="user-box">
      <label for="categories"
        >מה הקטגוריה המתאימה עבור ההוצאה שלך?</label
      >
      <select name="categoryName" id="categories">
      <option value="" disabled selected>בחר/י את הקטגוריה</option>
      ${categoriesHtml}
      </select> <a href="" onclick="addCategory(event)" class="regular">הוספת קטגוריה חדשה</a>
    </div>
    <div class="user-box">
      <input
        type="number"
        name="expenseAmount"
        id="expenseAmount" required 
      />
      <label for="expenseAmount">מה סכום ההוצאה שלך?</label>
    </div>
    
    <input type="submit" value="הוסף" />`;
  } catch (error) {
    console.error(error);
  }
}
// this function is used to render the Expenses Table
async function renderExpencesTable() {
  try {
    await sortCategoriesByUserActualExpenses(expenses);
    const rootExpensesTable = document.querySelector(`#expenses-table`);
    if (!rootExpensesTable) throw new Error(`expensesTable not found`);

    if (expenses.length === 0) {
      return (rootExpensesTable.innerHTML = `<h2>על מנת לצפות בטבלת ההוצאות יש להזין הוצאות בטבלה שמצד שמאל</h2>`);
    }
    const htmlHeadersTable = fillterdCategories
      .map(
        (category) =>
          `<tr class="thead">
            <th colspan="4">
              ${category}<svg
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
          </tr><tbody id="id-${getCategoryId(category)}"></tbody>`
      )
      .join(` `);

    rootExpensesTable.innerHTML = `<table id="tbl_exporttable_to_xls">${htmlHeadersTable}</table><div class="excel-download" onclick="ExportToExcel()">
      <h3>להורדת קובץ</h3>
      <img src="./images/icons8-excel.svg" alt="" />
    </div>`;
    fillterdCategories.forEach((category) => {
      // console.log(userCategories);
      const html = document.querySelector(`#id-${getCategoryId(category)}`);
      if (!html) throw new Error(`html not found`);
      expenses.forEach((expense: Expense) => {
        if (expense.categoryName === category) {
          html.innerHTML += `<tr class="tbody" id="${expense._id}"><td >${expense.expenseName}</td><td >${expense.expenseAmount}&#8362;</td><td ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit" onclick="editExpense(event)">
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
// async function renderResult(htmlElemnet: Element, expense?: number) {
//   try {
//     // const userIncome = await getUserIncomeFromDB();
//     // if (userIncome !== null || undefined)
//     //   htmlElemnet.innerHTML = `${userIncome}&#8362;`;
//     // if (userIncome.message === "0") htmlElemnet.innerHTML = `${"0"}&#8362;`;

//     // if (expense) htmlElemnet.innerHTML = `${expense}&#8362;`;
//     // if (!htmlElemnet) throw new Error(`htmlElemnet not found`);
//     calculateBalance();
//   } catch (error) {
//     console.error(error);
//   }
// }
