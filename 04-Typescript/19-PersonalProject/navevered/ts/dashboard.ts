class User {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}
}

class Income {
  id: string;
  labelName:  NodeListOf<Node> | null;
  constructor(
    public user: User,
    public amount: number,
    public frequency: string
  ) {
    this.id = uid();
    this.labelName = uLabelName;
  }
}

class Expense {
  id: string;
  
  constructor(
    public user: User,
    public amount: number,
    public frequency: string,
    public ExpensesName ?: string
  ) {
    this.id = uid();
   
  }
}
const uLabelName = document.querySelectorAll(".label")

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const incomes: Income[] = [];
const expenses: Expense[] = [];


const getInputElementValue = (id: string) => {
  const inputElement = document.querySelector(`#${id}`) as HTMLInputElement;
  return inputElement.value;
};


  




    

document.querySelector("#incomeForm")?.addEventListener("submit", (ev) => {
  try {
    ev.preventDefault();

    const salaryPensionFrequency = getInputElementValue(
      "salary-pension-frequency"
    );
    const salaryPensionIncomeAmount = Number(
      getInputElementValue("salary-pension-income-amount")
    );

    const govSupportFrequency = getInputElementValue("gov-support-frequency");
    const govSupportIncomeAmount = Number(getInputElementValue("gov-support-income-amount"));

    const rentalIncomeFrequency = getInputElementValue(
      "rental-income-frequency"
    );
    const rentalIncomeAmount = Number(
      getInputElementValue("rental-income-amount")
    );

    const otherSupportFrequency = getInputElementValue(
      "other-support-frequency"
    );
    const otherSupportIncomeAmount = Number(
      getInputElementValue("other-support-income-amount")
    );

    const giftsBonusesFrequency = getInputElementValue(
      "gifts-bonuses-frequency"
    );
    const giftsBonusesIncomeAmount = Number(
      getInputElementValue("gifts-bonuses-income-amount")
    );

    const otherIncomeName = getInputElementValue("other-income-name");
    const otherIncomeFrequency = getInputElementValue("other-income-frequency");
    const otherIncomeAmount = Number(
      getInputElementValue("other-income-amount")
    );

    incomes.push(
      new Income(
        new User("שכר מעבודה|פנסיה", "", ""),
        salaryPensionIncomeAmount,
        salaryPensionFrequency
      )
    );
    incomes.push(
      new Income(
        new User("קצבאות מהממשלה", "", ""),
        govSupportIncomeAmount,
        govSupportFrequency
      )
    );
    incomes.push(
      new Income(
        new User("הכנסה משכירות", "", ""),
        rentalIncomeAmount,
        rentalIncomeFrequency
      )
    );
    incomes.push(
      new Income(
        new User("תמיכה נוספת", "", ""),
        otherSupportIncomeAmount,
        otherSupportFrequency
      )
    );
    incomes.push(
      new Income(
        new User("מתנות ובונסים", "", ""),
        giftsBonusesIncomeAmount,
        giftsBonusesFrequency
      )
    );
    incomes.push(
      new Income(
        new User(" הכנסה נוספת", "", ""),
        otherIncomeAmount,
        otherIncomeFrequency
      )
    );

    renderIncomeTable();
    

    const incomesJson = JSON.stringify(incomes);
    localStorage.setItem("incomes", incomesJson);
  } catch (error) {
    console.error(error);
  }
});


document.querySelector("#expensesForm")?.addEventListener("submit", (ev) => {
  try {
    ev.preventDefault();

    const housingExpensesFrequency = getInputElementValue(
      "housing-expenses-frequency"
    );
    const housingExpensesAmount = Number(
      getInputElementValue("housing-expenses-amount")
    );

    const livingExpensesFrequency = getInputElementValue("living-expenses-frequency");
    const livingExpensesAmount = Number(getInputElementValue("living-expenses-amount"));

    const groceryExpensesFrequency = getInputElementValue(
      "grocery-expenses-frequency"
    );
    const groceryExpensesAmount = Number(
      getInputElementValue("grocery-expenses-amount")
    );

    const carExpensesFrequency = getInputElementValue(
      "car-expenses-frequency"
    );
    const carExpensesAmount = Number(
      getInputElementValue("car-expenses-amount")
    );

    const entertainmentExpensesFrequency = getInputElementValue(
      "entertainment-expenses-frequency"
    );
    const entertainmentExpensesAmount = Number(
      getInputElementValue("entertainment-expenses-amount")
    );
    const healthExpensesFrequency = getInputElementValue(
      "health-expenses-frequency"
    );
    const healthExpensesAmount = Number(
      getInputElementValue("health-expenses-amount")
    );
    
    const otherExpensesName = getInputElementValue("other-expenses-name");
    const otherExpensesFrequency = getInputElementValue("other-expenses-frequency");
    const otherExpensesAmount = Number(
      getInputElementValue("other-expenses-amount")
    );

    expenses.push(
      new Expense(
        new User("הוצאות מגורים", "", ""),
        housingExpensesAmount,
        housingExpensesFrequency,
       
      )
    );
    expenses.push(
      new Expense(
        new User("הוצאות מחיה", "", ""),
        livingExpensesAmount,
        livingExpensesFrequency,
        
      )
    );
    expenses.push(
      new Expense(
        new User("הוצאות קניות שוטפות", "", ""),
        groceryExpensesAmount,
        groceryExpensesFrequency
      )
    );
    expenses.push(
      new Expense(
        new User("הוצאות רכב", "", ""),
        carExpensesAmount,
        carExpensesFrequency
      )
    );
    expenses.push(
      new Expense(
        new User(" הוצאות פנאי", "", ""),
        entertainmentExpensesAmount,
        entertainmentExpensesFrequency
      )
    );
    expenses.push(
      new Expense(
        new User(" הוצאות בריאות", "", ""),
        healthExpensesAmount,
        healthExpensesFrequency
      )
    );
    expenses.push(
      new Expense(
        new User("הכנסה נוספת ", "", ""),
        otherExpensesAmount,
        otherExpensesFrequency
      )
    );

    renderExpensesTable();
    

    const expensesJson = JSON.stringify(expenses);
    localStorage.setItem("expenses", expensesJson);
  } catch (error) {
    console.error(error);
  }
});

// function renderIncomeTable() {
//   const incomeTableDiv = document.querySelector("#incomeTableDiv");
//   if (!incomeTableDiv) throw new Error("Could not find incomeTableDiv html element");

//   let html =
//     "<table dir><thead><tr><th> שם ההכנסה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";

//   for (const income of incomes) {
//     html += `<tr><td id="tdName">${income.user.userName}</td><td>${income.amount}</td><td>${income.frequency}</td></tr>`;
//   }

//   html += "</tbody></table>";
//   incomeTableDiv.innerHTML = html;
// }
function renderIncomeTable() {
  const nameRoot = document.querySelector("#rootNameIncome");
  if (!nameRoot) throw new Error("Could not find rootPersons html element");

  let html =
    "<table dir><thead><tr><th> שם ההוצאה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";

  for (const income of incomes) {
    html += `<tr><td id="tdName">${income.user.userName}</td><td>${income.amount}</td><td>${income.frequency}</td></tr>`;
  }

  html += "</tbody></table>";
  nameRoot.innerHTML = html;
}





function renderExpensesTable() {
  const nameRoot = document.querySelector("#rootNameExpenses");
  if (!nameRoot) throw new Error("Could not find rootPersons html element");

  let html =
    "<table dir><thead><tr><th> שם ההוצאה   </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";

  for (const expense of expenses) {
    html += `<tr><td id="tdName">${expense.user.userName}</td><td>${expense.amount}</td><td>${expense.frequency}</td></tr>`;
  }

  html += "</tbody></table>";
  nameRoot.innerHTML = html;
}

function calculateTotalIncome() {
  const incomeInputs = document.querySelectorAll("input[name$='income-amount']");
  let totalIncome = 0;

  for (const input of incomeInputs) {
    if (input instanceof HTMLInputElement) {
      const incomeAmount = parseFloat(input.value);
      if (!isNaN(incomeAmount)) {
        totalIncome += incomeAmount;
        console.log(incomeAmount);
        
      }
    }
  }

  // תצוגת התוצאה ב-HTML
  const resultElement = document.getElementById("resultIncome");
if (resultElement !== null) {
  resultElement.textContent = `💰💰💰  הסכום הכולל של ההכנסות שלך הוא: ${totalIncome}`;
}
return totalIncome;    
}

function calculateTotalExpenses() {
  const expenseInputs = document.querySelectorAll("input[name$='-expenses-amount']");
  let totalExpense = 0;

  for (const input of expenseInputs) {
    if (input instanceof HTMLInputElement) {
      const expenseAmount = parseFloat(input.value);
      if (!isNaN(expenseAmount)) {
        totalExpense += expenseAmount;
        console.log(expenseAmount);
      }
    }
  }

  const resultElement = document.getElementById("resultExpenses");
  if (resultElement !== null) {
    resultElement.textContent = ` 🛒🛒🛒  הסכום הכולל של ההוצאות שלך הוא: ${totalExpense}`;
  }

  return totalExpense;         
}







function calculateProfit() {
  const totalIncome = calculateTotalIncome();
  const totalExpenses = calculateTotalExpenses();

  const profit = totalIncome - totalExpenses;

  const profitResultElement = document.getElementById("profitResult");
  if (profitResultElement !== null) {
    profitResultElement.textContent = ` 🧾🧾🧾  הרווח שלך הוא: ${profit}`;
  }
  
}
function calculateProfityearly() {
  const totalIncome = calculateTotalIncome();
  const totalExpenses = calculateTotalExpenses();

  const profityearly = totalIncome - totalExpenses;

  const profitResultYearElement = document.getElementById("profitResult");
  if (profitResultYearElement !== null) {
    profitResultYearElement.textContent = `  💸💸💸  הרווח שלך הוא: ${profityearly*12}`;
  }}