// model

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

class Expence {
  // id: number;
  constructor(
    public name: string,
    public category: string,
    public amount: number // id: number, // public expiration?: string
  ) {}
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
const expences: Expence[] = [
  new Expence(`טלפון `, `תקשורת`, 1000),
  new Expence(`הלוואת רכב `, `הלוואות`, 980),
  new Expence(`טלוויזיה `, `תקשורת`, 980),
];

// this function is used to render the income calculator
// function renderIncomeCalculator(htmlElemnet: HTMLElement) {
//   try {
//   } catch (error) {
//     console.error(error);
//   }
//   // const html=
// }

// this function is used to render the expenses calculator
function renderExpenceCalculator() {
  const categoriesHtml = expenceCategorys
    .map((category) => `<option value="">${category.categoryName}</option>`)
    .join(` `);
  const expencesRoots = document.querySelector(`#expences-calculators`);
  if (!expencesRoots) throw new Error(`expencesRoots not found`);
  expencesRoots.innerHTML = ` <h3>הוצאות חודשיות</h3>
  <div class="user-box">
    <input
      type="text"
      name="expence-description"
      id="expence-description"
    />
    <label for="expence-description">שם ההוצאה:</label>
  </div>
  <div class="user-box">
    <label for="categories"
      >מה הקטגוריה המתאימה עבור ההוצאה שלך?</label
    >
    <select name="categories" id="categories">
    ${categoriesHtml}
    </select>
  </div>
  <div class="user-box">
    <input
      type="number"
      name="expence-amount"
      id="expence-calculators"
    />
    <label for="expence-amount">מה סכום ההוצאה שלך?</label>
  </div>
  <div class="user-box">
    <input
      type="date"
      name="expiration"
      id="expiration"
      class="date"
    />
    <label for="expiration"
      >מהו תוקף ההוצאה שלך? (במידה ורלוונטי)</label
    >
  </div>
  <input type="submit" value="הוסף" />`;
  try {
  } catch (error) {
    console.error(error);
  }
}

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

    if (sortedExpences === null || sortedExpences.length === 0)
      rootExpencesTable.innerHTML = `<h2>על מנת לצפות בטבלת ההוצאות יש להזין הוצאות בטבלה שמצד שמאל</h2>`;
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
      console.log(htmlCreateTr);

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
function renderResult(htmlElemnet: Element, income?: string) {
  try {
    htmlElemnet.innerHTML = `${income}&#8362;`;
  } catch (error) {
    console.error(error);
  }
}

function handleExpenceSubmit(ev) {
  ev.preventDefault();
  ev.reset();
  try {
    console.log(ev);
  } catch (error) {
    console.error(error);
  }
}
function handleIncomeSubmit(ev) {
  try {
    ev.preventDefault();
    if (!ev || !ev.target) throw new Error(`event not found`);
    const income = ev.target.income.value;
    const resultRoot = document.querySelector(`.total-number--income`);
    console.dir(resultRoot);
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
    loadDataToLocalStorage(incomeRoot, `income`);
  } catch (error) {
    console.error(error);
  }
}

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
    if (!incomeRoot || !expenceRoot || !balanceRoot)
      throw new Error(`roots is missing`);
    const incomeFromLocalStorage = localStorage.getItem(`income`);
    if (incomeFromLocalStorage)
      incomeRoot.innerHTML = `${incomeFromLocalStorage}`;
    balanceRoot.innerHTML = `${
      parseFloat(incomeRoot.innerHTML) - parseFloat(expenceRoot.innerHTML)
    }&#8362;`;
    if (
      parseFloat(incomeRoot.innerHTML) - parseFloat(expenceRoot.innerHTML) >
      0
    ) {
      balanceRoot.classList.remove(`total-number--expence`);
      balanceRoot.classList.add(`total-number--income`);
    } else {
      balanceRoot.classList.remove(`total-number--income`);
      balanceRoot.classList.add(`total-number--expence`);
    }
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

const accordion = document.querySelectorAll(`.thead`);

accordion.forEach((head) => {
  head.addEventListener(`click`, (ev) => {
    head.classList.toggle(`active`);
    console.dir(head);
    const nextElementSibling = head.parentElement?.nextElementSibling;
    if (!nextElementSibling) throw new Error(`nextElementSibling not found`);
    if (nextElementSibling.classList.contains(`off`)) {
      nextElementSibling.classList.remove(`off`);
    } else {
      nextElementSibling.classList.add(`off`);
      debugger;
      const svg = head.childNodes[1];
      const newSvg = document.createElement(`svg`);
      const newSvgString =
        document.createTextNode(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>`);
      newSvg.appendChild(newSvgString);
      svg.replaceChild(newSvg, svg.childNodes[1]);

      // console.dir(head.childNodes[1].childNodes[1]);
    }
  });
});
