interface Category {
  _id: string;
  categoryName: string;
  userName: string;
}
let categories = [];

interface Expense {
  _id: string;
  userName: string;
  expenseName: string;
  expenseCategory: string;
  expenseAmount: string;
}

let expenses: Expense[] = [];
// this function is used to handle accordion click
async function handleAccordionClick() {
  await getCategoriesFromDB();
  await getExpensesFromDB();
  await getUserIncomeFromDB();
  const accordion = document.querySelectorAll(`.thead`);
  //   console.log(accordion);

  // this method will take care the accordion functionality
  accordion.forEach((head) => {
    // first we handling the fold and unfold functions
    head.addEventListener(`click`, (ev) => {
      head.classList.toggle(`active`);
      const svgRoot = head.childNodes[1];
      const createSvgDiv = document.createElement(`div`);
      if (!head.parentElement?.nextElementSibling)
        throw new Error(`next sibling not found`);
      const nextElementSibling = head.parentElement.nextElementSibling;
      if (!nextElementSibling) throw new Error(`nextElementSibling not found`);
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
      } else {
        nextElementSibling.classList.add(`off`);
        createSvgDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="collapse-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>`;
        svgRoot.replaceChild(createSvgDiv, svgRoot.childNodes[1]);
      }
    });
  });
}

// this function handling the income submit
async function handleIncomeSubmit(ev: any) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName");
    ev.preventDefault();
    if (!ev || !ev.target) throw new Error(`event not found`);
    const userIncome = ev.target.income.value;
    const resultRoot = document.querySelector(`.total-number--income`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    renderResult(resultRoot, userIncome);

    calculateBalance();
    ev.target.reset();
    addIncomeToDB(userName, userIncome);
  } catch (error) {
    console.error(error);
  }
}

async function addIncomeToDB(userName: string, userIncome: string) {
  try {
    const response = await fetch(`/API/users/add-income`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userName: userName, userIncome: userIncome }),
    });
    const result = await response.json();
    console.log(result);
    calculateBalance();
  } catch (error) {
    console.error(error);
  }
}
// this function handling the expence submit
async function handleExpenceSubmit(ev) {
  try {
    ev.preventDefault();

    const resultRoot = document.querySelector(`.total-number--expense`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName");
    const expenseName: string = ev.target.expenseName.value;
    const expenseCategory: string = ev.target.expenseCategory.value;
    const expenseAmount: number = ev.target.expenseAmount.valueAsNumber;
    const respone = await fetch(`/API/expense/add-expense`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        expenseName: expenseName,
        expenseCategory: expenseCategory,
        expenseAmount: expenseAmount,
      }),
    });
    const result = await respone.json();
    renderExpencesTable();
    handleAccordionClick();
    calculateTotalExpense(expenses);
    // renderResult(resultRoot, expenseAmount.toString());
    // loadDataToLocalStorage()
    ev.target.reset();
    console.log(ev);
  } catch (error) {
    console.error(error);
  }
}

// this function gets categories from DB
async function getCategoriesFromDB() {
  try {
    const response = await fetch(`/API/category/get-categories`);
    const { allCategories } = await response.json();
    const categoriesByUserName = sortCategoriesByUserName(allCategories);
    categories = [...categoriesByUserName];
    return categories;
  } catch (error) {
    console.error(error);
  }
}

// this functions gets the user income from DB
async function getUserIncomeFromDB() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName");
    const response = await fetch(`/API/users/get-income`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userName: userName }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
// this function gets Expenses from DB
async function getExpensesFromDB() {
  try {
    const response = await fetch(`/API/expense/get-all-expenses`);
    const allExpenses = await response.json();
    const ExpensesByUserName = sortExpensesByUserName(allExpenses);
    expenses = [...ExpensesByUserName];
    console.log(expenses);

    return expenses;
  } catch (error) {
    console.error(error);
  }
}

async function deleteExpense(ev) {
  try {
    const expenseId: string = ev.target.parentElement.parentElement.id;
    // const categoryId = ev.target.parentElement.parentElement.parentElement.id;
    const response = await fetch(`/API/expense/delete-expense`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: expenseId }),
    });

    const result = await response.json();
    console.log(result);
    renderExpencesTable();
    calculateBalance();
  } catch (error) {
    console.error(error);
  }
}
async function editExpense(ev) {
  try {
    const id = ev.target.parentElement.parentElement.id;
    const name = prompt(`מה השם החדש של ההוצאה שלך?`);
    const amount = Number(prompt(`מה הסכום החדש של ההוצאה שלך?`));
    debugger;
    if (
      name === undefined ||
      name === null ||
      amount === undefined ||
      amount === null ||
      id === undefined ||
      id === null
    )
      throw new Error(`some of the parameters are null`);
    const resposne = await fetch("/API/expense/update-expense", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: id, name: name, amount: amount }),
    });
    const result = await resposne.json();
    debugger;
    console.log(result);

    renderExpencesTable();
    calculateBalance();
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

// this function sorted the categories by user names
function sortCategoriesByUserName(categories: Category[]): Category[] {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get("userName");
    const categoriesByUserName = categories.filter(
      (category) =>
        category.userName === userNameFromUrl ||
        category.userName === "genericCategory"
    );
    // console.log(categoriesByUserName);

    const fillterdCategories: Category[] =
      removeDuplicates(categoriesByUserName);
    return fillterdCategories;
  } catch (error) {
    console.error(error);
  }
}

// this function sorted the categories by user names
function sortExpensesByUserName(expenses: Expense[]) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get("userName");
    const expensesByUserName = expenses.filter(
      (expense) => expense.userName === userNameFromUrl
    );
    return expensesByUserName;
  } catch (error) {
    console.error(error);
  }
}

// this function sort the expences by category alfabetically
async function sortByCategory() {
  try {
    await getCategoriesFromDB();
    const sortedCategories = categories.sort((a, b) => {
      if (a.categoryName > b.categoryName) return 1;
      if (a.categoryName < b.categoryName) return -1;
      return 0;
    });
    return sortedCategories;
  } catch (error) {
    console.error(error);
  }
}

// this function is used to check and add new category
async function addCategory(newCategory: string) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get("userName");
    const response = await fetch("/API/category/add-category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryName: newCategory,
        userName: userNameFromUrl,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// this funcion calculates the total expences
async function calculateTotalExpense() {
  const resultRoot = document.querySelector(`.total-number--expense`);

  await getExpensesFromDB();
  debugger;
  let totalExpence = 0;
  expenses.forEach((expense) => {
    totalExpence += Number(expense.expenseAmount);
  });
  renderResult(resultRoot, totalExpence);
  return totalExpence;
}

// this function calculates the balance
async function calculateBalance() {
  try {
    const balanceRoot = document.querySelector(`.total-number--balance`);
    const incomeRoot = document.querySelector(`.total-number--income`);
    const allExpenses = await calculateTotalExpense(expenses);
    const userIncome = await getUserIncomeFromDB();
    incomeRoot.innerHTML = userIncome;
    if (!balanceRoot) throw new Error(`balance not found`);
    balanceRoot.innerHTML = `${
      parseFloat(userIncome) - (await allExpenses)
    }&#8362;`;
    if (parseFloat(userIncome) - (await allExpenses) > 0) {
      balanceRoot.classList.remove(`total-number--expense`);
      balanceRoot.classList.add(`total-number--income`);
    } else {
      balanceRoot.classList.remove(`total-number--income`);
      balanceRoot.classList.add(`total-number--expense`);
    }
  } catch (error) {
    console.error(error);
  }
}

// || userName === "genericCategory"

// revoke function onLoading
window.onload = () => {
  calculateBalance();
  getCategoriesFromDB();
  getExpensesFromDB();
  handleAccordionClick();
  renderExpenceCalculator();
  renderExpencesTable();
  // renderResult(resultRoot, userIncome);
};
function ExportToExcel(type, fn, dl) {
  var elt = document.querySelector("#tbl_exporttable_to_xls");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "MyExpencesTable." + (type || "xlsx"));
}

// when refreshing the page this function will render the total numbers from local storage

// this function will remove duplicates from the array
function removeDuplicates(arr: Category[]): Category[] {
  try {
    const newCategoriesNames = new Set();
    arr.forEach((category) => {
      newCategoriesNames.add(category.categoryName);
    });
    const newCategoriesArray = Array.from(newCategoriesNames);
    return newCategoriesArray;
  } catch (error) {
    console.error(error);
  }
}
