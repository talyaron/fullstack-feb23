document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const salaryPensionFrequency = document:Document.getElementById('salary-pension-frequency').value;
  const salaryPensionAmount = Number(document.getElementById('salary-pension-amount').value);

  const govSupportFrequency =   document.getElementById('gov-support-frequency').value;
  const govSupportAmount = Number(document.getElementById('gov-support-amount').value);

  const rentalIncomeFrequency = document.getElementById('rental-income-frequency').value;
  const rentalIncomeAmount = Number(document.getElementById('rental-income-amount').value);

  const otherSupportFrequency = document.getElementById('other-support-frequency').value;
  const otherSupportAmount = Number(document.getElementById('other-support-amount').value);

  const giftsBonusesFrequency = document.getElementById('gifts-bonuses-frequency').value;
  const giftsBonusesAmount = Number(document.getElementById('gifts-bonuses-amount').value);

  const otherIncomeName = document.getElementById('other-income-name').value;
  const otherIncomeFrequency = document.getElementById('other-income-frequency').value;
  const otherIncomeAmount = Number(document.getElementById('other-income-amount').value);
  
  const result = calculateTotalIncome([
      { name: 'Salary from work or pension allowance', frequency: salaryPensionFrequency, amount: salaryPensionAmount },
      { name: 'Allowances and supports from the government', frequency: govSupportFrequency, amount: govSupportAmount },
      { name: 'Rental income', frequency: rentalIncomeFrequency, amount: rentalIncomeAmount },
      { name: 'Other support', frequency: otherSupportFrequency, amount: otherSupportAmount },
      { name: 'Gifts and bonuses', frequency: giftsBonusesFrequency, amount: giftsBonusesAmount },
      { name: otherIncomeName, frequency: otherIncomeFrequency, amount: otherIncomeAmount }
  ]);

  displayResult(result);
  document.getElementById('incomeForm').reset();
});

function calculateTotalIncome(incomes) {
  let totalIncome = 0;

  for (const income of incomes) {
      if (income.name && income.amount) {
          let multiplier = 1;
          if (income.frequency === 'every-two-months') {
              multiplier = 2;
          } else if (income.frequency === 'yearly') {
              multiplier = 12;
          }

          totalIncome += income.amount * multiplier;
      }
  }

  return totalIncome;
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your total income is: ${result}`;
}

// Login Form Submission Functionality
const loginForm: = document.querySelector("#login-form");

loginForm.addEventListener("submit", handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email-input");
  const passwordInput = document.querySelector("#password-input");
  const email = emailInput.value;
  const password = passwordInput.value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    // Redirect to the dashboard page
    window.location.href = "income.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}