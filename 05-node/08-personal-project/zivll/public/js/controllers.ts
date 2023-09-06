interface Category {
  categoryName: string;
  userName: string;
}
let categories: Category[] = [];

interface Expense {
  name: string;
  category: string;
  categoryId: string;
  amount: string;
}

let expenses: Expense[] = [];
// this function is used to handle accordion click
function handleAccordionClick() {
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

// this function handling the income submit
function handleIncomeSubmit(ev) {
  try {
    ev.preventDefault();
    if (!ev || !ev.target) throw new Error(`event not found`);
    const income = ev.target.income.value;
    const resultRoot = document.querySelector(`.total-number--income`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    renderResult(resultRoot, income);
    loadDataToLocalStorage(income, `income`);
    calculateBalance();
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}

// this function handling the expence submit
function handleExpenceSubmit(ev) {
  try {
    ev.preventDefault();
    const resultRoot = document.querySelector(`.total-number--expence`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    const expenceDescription = ev.target.expenceDescription.value;
    const categoryId = ev.target.categories.value;
    const expenceAmount = ev.target.expenceAmount.valueAsNumber;
    // if(!ev.target.categories.value) throw new Error(`categoryId not found`);
    const categoryName: string | undefined = Categorys.find(
      (category) => `id-${category.categoryId}` === categoryId
    )?.categoryName;

    expences.push(
      new Expence(expenceDescription, categoryName, categoryId, expenceAmount)
    );
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
  } catch (error) {
    console.error(error);
  }
}

// this function gets categories from DB
async function getCategoriesFromDB() {
  try {
    const response = await fetch(`/API/category/get-categories`);
    const { allCategories } = await response.json();
    console.log(allCategories);
    categories = [...allCategories];
    return categories;
  } catch (error) {
    console.error(error);
  }
}
// this function gets Expenses from DB
async function getExpensesFromDB() {
  try {
    const response = await fetch(`/API/expense/get-all-expenses`);
    const allExpenses = await response.json();
    console.log(allExpenses);
    expenses = [...allExpenses];
    return expenses;
  } catch (error) {
    console.error(error);
  }
}

async function deleteExpense(ev) {
  try {
    const expenseId = ev.target.parentElement.parentElement.id;
    // const categoryId = ev.target.parentElement.parentElement.parentElement.id;
    const response = await fetch(`/API/expense/delete-expense`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(expenseId),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
async function editExpense(ev) {
  try {
    const expenseId = ev.target.parentElement.parentElement.id;
    const newName = prompt(`מה השם החדש של ההוצאה שלך?`);
    const newAmount = prompt(`מה הסכום החדש של ההוצאה שלך?`);
    if (
      newName === undefined ||
      newName === null ||
      newAmount === undefined ||
      newAmount === null
    )
      throw new Error(`some of the parameters are null`);
    const respone = await fetch("/API/expense/update-expense", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: expenseId, name: newName, amount: newAmount }),
    });
    const result = await respone.json();
    console.log(result.message);

    const expenseRoot = document.querySelector(`.total-number--expence`);

    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

// this function sorted the categories by user names
function sortCategoriesByUserName() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const userNameFromUrl = urlParams.get("userName");
    const categoriesByUserName = categories.filter(
      (category) =>
        category.userName === userNameFromUrl ||
        category.userName === "genericCategory"
    );
    return categoriesByUserName;
  } catch (error) {
    console.error(error);
  }
}
// this function sort the expences by category alfabetically
async function sortByCategory() {
  try {
    const allCategories = getCategoriesFromDB();
    console.log(allCategories);

    const sortedCategory = (await allCategories).sort((a, b) => {
      if (a.categoryName > b.categoryName) return 1;
      if (a.categoryName < b.categoryName) return -1;
      return 0;
    });
    return sortedCategory;
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
function calculateTotalExpence(expences) {
  let totalExpence = 0;
  expences.forEach((expense) => {
    totalExpence += expense.amount;
  });
  return totalExpence;
}

// this function calculates the balance
function calculateBalance() {
  try {
    const balanceRoot = document.querySelector(`.total-number--balance`);
    const incomeRoot = document.querySelector(
      `.total-number--income`
    )?.innerHTML;
    const allExpenses = calculateTotalExpence(expenses);
    const expenseRoot = document.querySelector(`.total-number--expence`);
    if (!incomeRoot || !expenseRoot) throw new Error(`no roots`);
    if (!balanceRoot) throw new Error(`balance not found`);
    balanceRoot.innerHTML = `${parseFloat(incomeRoot) - allExpenses}&#8362;`;
    if (parseFloat(incomeRoot) - allExpenses > 0) {
      balanceRoot.classList.remove(`total-number--expence`);
      balanceRoot.classList.add(`total-number--income`);
    } else {
      balanceRoot.classList.remove(`total-number--income`);
      balanceRoot.classList.add(`total-number--expence`);
    }
    expenseRoot.innerHTML = `${allExpenses}&#8362;`;
    // loadDataToLocalStorage(incomeRoot, `income`);
  } catch (error) {
    console.error(error);
  }
}

// || userName === "genericCategory"

// revoke function onLoading
window.onload = () => {
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
