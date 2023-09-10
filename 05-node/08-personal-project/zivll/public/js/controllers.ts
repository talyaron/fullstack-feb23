interface Category {
  _id: string;
  categoryName: string;
  userName: string;
}
let categories = [];
let fillterdCategories = [];

interface Expense {
  _id: string;
  userName: string;
  expenseName: string;
  categoryName: string;
  expenseAmount: string;
}

let expenses: Expense[] = [];

// this function handling the income submit
function handleIncomeSubmit(ev: any) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName");
    ev.preventDefault();
    if (!ev || !ev.target) throw new Error(`event not found`);
    const userIncome = ev.target.income.value;
    const resultRoot = document.querySelector(`.total-number--income`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    // renderResult(resultRoot, userIncome);

    calculateBalance();
    ev.target.reset();
    addIncomeToDB(userName, userIncome);
  } catch (error) {
    console.error(error);
  }
}
// this function is used to handle accordion click
async function handleAccordionClick() {
  await getCategoriesFromDB();
  await getExpensesFromDB();
  //   await getUserIncomeFromDB();
  await renderExpencesTable();
  const accordion = document.querySelectorAll(`.thead`);

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

async function addIncomeToDB(userName: string, userIncome: string) {
  try {
    const response = await fetch(`/API/users/add-income`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userName: userName, userIncome: userIncome }),
    });
    const result = await response.json();
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
    const categoryName: string = ev.target.categoryName.value;
    const expenseAmount: number = ev.target.expenseAmount.valueAsNumber;
    const respone = await fetch(`/API/expense/add-expense`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        expenseName: expenseName,
        categoryName: categoryName,
        expenseAmount: expenseAmount,
      }),
    });
    const result = await respone.json();
    await getExpensesFromDB();
    renderExpenceCalculator();
    renderExpencesTable();
    handleAccordionClick();
    calculateTotalExpense();
    calculateBalance();
    // renderResult(resultRoot, expenseAmount.toString());
    // loadDataToLocalStorage()
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}

// this function gets categories from DB
async function getCategoriesFromDB() {
  try {
    const response = await fetch(`/API/category/get-categories`);
    const { allCategories } = await response.json();
    const categoriesByUserName = await sortCategoriesByUserName(allCategories);
    categoriesByUserName.sort(sortObjectsByProperty);
    categories = [...categoriesByUserName];
    return categories;
  } catch (error) {
    console.error(error);
  }
}

// this functions gets the user income from DB
async function getUserIncomeFromDB() {
  try {
    // debugger;
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
    // console.log(result);
    // if (Number(result) > 0) return result;
    return result.message;
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

    return expenses;
  } catch (error) {
    console.error(error);
  }
}

async function deleteExpense(ev) {
  try {
    const expenseId: string = ev.target.parentElement.parentElement.id;
    // const categoryId = ev.target.parentElement.parentElement.parentElement.id;
    const response = await fetch("/API/expense/delete-expense", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: expenseId }),
    });

    const result = await response.json();
    await getExpensesFromDB();
    await getCategoriesFromDB();
    getUserIncomeFromDB();
    handleAccordionClick();
    calculateBalance();
    renderExpenceCalculator();
    renderExpencesTable();
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
}
async function editExpense(ev) {
  try {
    const _id: string = ev.target.parentElement.parentElement.id;
    const name = prompt(`מה השם החדש של ההוצאה שלך?`);
    const amount = Number(prompt(`מה הסכום החדש של ההוצאה שלך?`));
    if (
      name === undefined ||
      name === null ||
      amount === undefined ||
      amount === null ||
      _id === undefined ||
      _id === null
    )
      throw new Error(`some of the parameters are null`);
    const resposne = await fetch("/API/expense/update-expense", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id: _id, name: name, amount: amount }),
    });
    const result = await resposne.json();
    await getExpensesFromDB();
    await getCategoriesFromDB();
    getUserIncomeFromDB();
    handleAccordionClick();
    calculateBalance();
    renderExpenceCalculator();
    renderExpencesTable();
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

// this function sorted the categories by user names
async function sortCategoriesByUserName(categories: Category[]) {
  try {
    // await getExpensesFromDB();
    // await getUserIncomeFromDB();
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get("userName");
    const categoriesByUserName = categories.filter(
      (category) =>
        category.userName === userNameFromUrl ||
        category.userName === "genericCategory"
    );
    // console.log(categoriesByUserName);

    // const fillterdCategories = removeDuplicates(categoriesByUserName);
    // return fillterdCategories;
    return categoriesByUserName;
  } catch (error) {
    console.error(error);
  }
}

// this function sort the categories by user name and actual expenses
async function sortCategoriesByUserActualExpenses(expenses: Expense[]) {
  try {
    await getExpensesFromDB();
    await getUserIncomeFromDB();
    // const categoriesByUserActualExpenses = expenses.filter(
    //   (expense) => expense.categoryName
    // );
    // await getExpensesFromDB();
    const categoriesByExpenses = removeDuplicates(expenses);
    return categoriesByExpenses;
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
    // await getCategoriesFromDB();
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
  } catch (error) {
    console.error(error);
  }
}

// this funcion calculates the total expences
async function calculateTotalExpense() {
  const resultRoot = document.querySelector(`.total-number--expense`);

  //   await getExpensesFromDB();

  let totalExpence = 0;
  expenses.forEach((expense) => {
    totalExpence += Number(expense.expenseAmount);
  });
  //   renderResult(resultRoot, totalExpence);
  //   calculateBalance();
  //   renderExpenceCalculator();
  //   renderExpencesTable();
  return totalExpence;
}

// this function calculates the balance
async function calculateBalance() {
  try {
    const balanceRoot = document.querySelector(`.total-number--balance`);
    const incomeRoot = document.querySelector(`.total-number--income`);
    const expenseRoot = document.querySelector(`.total-number--expense`);
    const allExpenses = await calculateTotalExpense();
    const userIncome = await getUserIncomeFromDB();
    incomeRoot.innerHTML = `${userIncome}&#8362;`;
    expenseRoot.innerHTML = `${allExpenses}&#8362;`;
    if (!balanceRoot) throw new Error(`balance not found`);
    balanceRoot.innerHTML = `${parseFloat(userIncome) - allExpenses}&#8362;`;
    if (parseFloat(userIncome) - allExpenses > 0) {
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
window.onload = async () => {
  await checkUser();
  await getExpensesFromDB();
  await getCategoriesFromDB();
  getUserIncomeFromDB();
  handleAccordionClick();
  calculateBalance();
  renderExpenceCalculator();
  renderExpencesTable();
  //   renderResult(resultRoot, userIncome);
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
async function removeDuplicates(arr) {
  try {
    const newCategoriesNames = new Set();
    arr.forEach((obj) => {
      newCategoriesNames.add(obj.categoryName);
    });
    const newCategoriesArray = Array.from(newCategoriesNames);
    newCategoriesArray.sort();
    fillterdCategories = [...newCategoriesArray];
    return newCategoriesArray;
  } catch (error) {
    console.error(error);
  }
}

function getCategoryId(categoryName): string {
  try {
    const categoryId = categories.find(
      (category) => category.categoryName === categoryName
    );
    return categoryId._id;
  } catch (error) {
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

async function checkUser() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("userName");

    if (!userName || userName === undefined) {
      window.location.href = "/register.html";
    }
    const response = await fetch("/API/users/check-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userName: userName }),
    });
    const result = await response.json();

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
    if (result.error === "userName is missing") alert(`${result.error}`);
  } catch (error) {
    console.error(error);
  }
}
