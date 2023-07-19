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
const uLabelName = document.querySelectorAll(".label")

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const incomes: Income[] = [];

const getInputElementValue = (id: string) => {
  const inputElement = document.querySelector(`#${id}`) as HTMLInputElement;
  return inputElement.value;
};


  



    renderTable();

    

document.querySelector("#incomeForm")?.addEventListener("submit", (ev) => {
  try {
    ev.preventDefault();

    const salaryPensionFrequency = getInputElementValue(
      "salary-pension-frequency"
    );
    const salaryPensionAmount = Number(
      getInputElementValue("salary-pension-amount")
    );

    const govSupportFrequency = getInputElementValue("gov-support-frequency");
    const govSupportAmount = Number(getInputElementValue("gov-support-amount"));

    const rentalIncomeFrequency = getInputElementValue(
      "rental-income-frequency"
    );
    const rentalIncomeAmount = Number(
      getInputElementValue("rental-income-amount")
    );

    const otherSupportFrequency = getInputElementValue(
      "other-support-frequency"
    );
    const otherSupportAmount = Number(
      getInputElementValue("other-support-amount")
    );

    const giftsBonusesFrequency = getInputElementValue(
      "gifts-bonuses-frequency"
    );
    const giftsBonusesAmount = Number(
      getInputElementValue("gifts-bonuses-amount")
    );

    const otherIncomeName = getInputElementValue("other-income-name");
    const otherIncomeFrequency = getInputElementValue("other-income-frequency");
    const otherIncomeAmount = Number(
      getInputElementValue("other-income-amount")
    );

    incomes.push(
      new Income(
        new User("User", "", ""),
        salaryPensionAmount,
        salaryPensionFrequency
      )
    );
    incomes.push(
      new Income(
        new User("User", "", ""),
        govSupportAmount,
        govSupportFrequency
      )
    );
    incomes.push(
      new Income(
        new User("User", "", ""),
        rentalIncomeAmount,
        rentalIncomeFrequency
      )
    );
    incomes.push(
      new Income(
        new User("User", "", ""),
        otherSupportAmount,
        otherSupportFrequency
      )
    );
    incomes.push(
      new Income(
        new User("User", "", ""),
        giftsBonusesAmount,
        giftsBonusesFrequency
      )
    );
    incomes.push(
      new Income(
        new User("User", "", ""),
        otherIncomeAmount,
        otherIncomeFrequency
      )
    );

    renderTable();
    

    const incomesJson = JSON.stringify(incomes);
    localStorage.setItem("incomes", incomesJson);
  } catch (error) {
    console.error(error);
  }
});

function renderTable() {
  const nameRoot = document.querySelector("#rootName");
  if (!nameRoot) throw new Error("Could not find rootPersons html element");

  let html =
    "<table dir><thead><tr><th> מי הוציא  </th><th>סכום</th><th>כל כמה זמן</th></tr></thead><tbody>";

  for (const income of incomes) {
    html += `<tr><td id="tdName">${income.labelName}</td><td>${income.amount}</td><td>${income.frequency}</td></tr>`;
  }

  html += "</tbody></table>";
  nameRoot.innerHTML = html;
}
