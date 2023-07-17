// model

// this class used to create and define expence entitie
class Expence {
  constructor(
    public name: string,
    public category: string,
    public amount: number
  ) {}
}
// these class is used to devide all expences into categories
class ExpenceCategory {
  categoryName: string;
  categoryId: number | void;
  constructor(categoryName: string) {
    this.categoryName = categoryName;
    this.categoryId = this.id();
  }
  id() {
    Math.round(Math.random() * 1000000);
  }
}
// these array contains all categories subjects
const expenceCategorys: ExpenceCategory[] = [
  new ExpenceCategory(`תקשורת`),
  new ExpenceCategory(`תרומות`),
  new ExpenceCategory(`ביטוחים`),
  new ExpenceCategory(`חינוך`),
  new ExpenceCategory(`תחבורה`),
  new ExpenceCategory(`הלוואות`),
  new ExpenceCategory(`דיור`),
  new ExpenceCategory(`נופש`),
  new ExpenceCategory(`הוצאות מזדמנות`),
];

// these array contains all user expences
const expences: Expence[] = [];

// controllers

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

// this function is used to render the expenses calculator
function renderExpenceCalculator() {
  const categoriesHtml = expenceCategorys
    .map(
      (category) =>
        `<option value="${category.categoryName}">${category.categoryName}</option>`
    )
    .join(` `);
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
  try {
  } catch (error) {
    console.error(error);
  }
}
// this function is used to render the expences table
function renderExpencesTable(expences: Expence[]) {
  try {
    const sortedExpences = sortByCategory(expences);

    const rootExpencesTable = document.querySelector(`#expences-table`);
    if (!rootExpencesTable) throw new Error(`expencesTable not found`);
    if (sortedExpences === undefined)
      throw new Error(`sortedExpences not found`);
    const userCategories: string[] = [];
    sortedExpences.forEach((expense) => {
      if (!userCategories.includes(expense.category)) {
        userCategories.push(expense.category);
      }
    });
    if (
      sortedExpences === null ||
      sortedExpences.length === 0 ||
      expences.length === 0 ||
      expences === null
    )
      return (rootExpencesTable.innerHTML = `<h2>על מנת לצפות בטבלת ההוצאות יש להזין הוצאות בטבלה שמצד שמאל</h2>`);
    const htmlHeadersTable = userCategories
      .map(
        (category) =>
          // `<tr><td>${expence.name}</td><td>${expence.amount}&#8362;</td></tr>`
          `<tr class="thead">
          <th colspan="2">
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
        </tr><tbody id="${category}"></tbody>`
      )
      .join(` `);
    rootExpencesTable.innerHTML = `<table>${htmlHeadersTable}</table>`;
    userCategories.forEach((category) => {
      const html = document.querySelector(`#${category}`);
      const htmlCreateTr = document.createElement(`tr`);
      if (!html) throw new Error(`html not found`);
      expences.forEach((expence) => {
        if (expence.category === category) {
          html.innerHTML += `<tr class="tbody"><td>${expence.name}</td><td>${expence.amount}&#8362;</td></tr>`;
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

// this function handling the expence submit
function handleExpenceSubmit(ev) {
  try {
    ev.preventDefault();
    const resultRoot = document.querySelector(`.total-number--expence`);
    if (!resultRoot) throw new Error(`resultRoot not found`);
    const expenceDescription = ev.target.expenceDescription.value;
    const categories = ev.target.categories.value;
    const expenceAmount = ev.target.expenceAmount.valueAsNumber;

    expences.push(new Expence(expenceDescription, categories, expenceAmount));
    renderExpencesTable(expences);
    loadDataToLocalStorage(expences, `expences`);
    loadDataToLocalStorage(expenceAmount, `expenceAmount`);
    handleAccordionClick();
    const allExpences = calculateTotalExpence(expences);
    renderResult(resultRoot, null, allExpences);

    // loadDataToLocalStorage()
    ev.target.reset();
    console.log(ev);
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
// this function calculates the balance
function calculateBalance() {
  try {
    const balanceRoot = document.querySelector(`.total-number--balance`);
    const incomeRoot = document.querySelector(
      `.total-number--income`
    )?.innerHTML;
    const expenceRoot = document.querySelector(
      `.total-number--expence`
    )?.innerHTML;
    if (!incomeRoot || !expenceRoot) throw new Error(`no roots`);
    if (!balanceRoot) throw new Error(`balance not fount`);
    balanceRoot.innerHTML = `${
      parseFloat(incomeRoot) - parseFloat(expenceRoot)
    }&#8362;`;
    if (parseFloat(incomeRoot) - parseFloat(expenceRoot) > 0) {
      balanceRoot.classList.remove(`total-number--expence`);
      balanceRoot.classList.add(`total-number--income`);
    } else {
      balanceRoot.classList.remove(`total-number--income`);
      balanceRoot.classList.add(`total-number--expence`);
    }
    // loadDataToLocalStorage(incomeRoot, `income`);
  } catch (error) {
    console.error(error);
  }
}
// this function sort the expences by category alfabetically
function sortByCategory(expences: Expence[]) {
  try {
    const sortedExpences = expences.sort((a, b) => {
      if (a.category > b.category) return 1;
      if (a.category < b.category) return -1;
      return 0;
    });
    return sortedExpences;
  } catch (error) {
    console.error(error);
  }
}

// this function is used to load any data to local storage
function loadDataToLocalStorage(data, keyName: string) {
  if (typeof data === `string`) {
    localStorage.setItem(keyName, data);
  } else {
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
    if (expencesStringFromLocalStorage === null)
      throw new Error(`expences not found`);
    const expencesFromLocalStorage: Expence[] = JSON.parse(
      expencesStringFromLocalStorage
    );
    if (!incomeRoot || !expenceRoot || !balanceRoot)
      throw new Error(`roots is missing`);
    const incomeFromLocalStorage = localStorage.getItem(`income`);
    expences.push(...expencesFromLocalStorage);
    const expenceAmountFromLocalStorage = localStorage.getItem(`expenceAmount`);
    if (incomeFromLocalStorage != null)
      incomeRoot.innerHTML = `${incomeFromLocalStorage}&#8362;`;
    calculateBalance();
    if (expenceAmountFromLocalStorage)
      expenceRoot.innerHTML = `${expenceAmountFromLocalStorage}`;
    calculateBalance();
    if (expenceAmountFromLocalStorage) calculateBalance();
    renderExpencesTable(expences);
  } catch (error) {
    console.error(error);
  }
}
// revoke function when loading page
loadPage();
// revoke expence calculator when loading page
renderExpenceCalculator();
// revoke expences table (if such) when loading or refreshing page
renderExpencesTable(expences);
// revoke accordion functionality when loading or refreshing page
handleAccordionClick();
