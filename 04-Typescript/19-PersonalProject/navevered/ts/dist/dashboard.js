document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();
    var salaryPensionFrequency = document, Document, getElementById;
    ('salary-pension-frequency').value;
    var salaryPensionAmount = Number(document.getElementById('salary-pension-amount').value);
    var govSupportFrequency = document.getElementById('gov-support-frequency').value;
    var govSupportAmount = Number(document.getElementById('gov-support-amount').value);
    var rentalIncomeFrequency = document.getElementById('rental-income-frequency').value;
    var rentalIncomeAmount = Number(document.getElementById('rental-income-amount').value);
    var otherSupportFrequency = document.getElementById('other-support-frequency').value;
    var otherSupportAmount = Number(document.getElementById('other-support-amount').value);
    var giftsBonusesFrequency = document.getElementById('gifts-bonuses-frequency').value;
    var giftsBonusesAmount = Number(document.getElementById('gifts-bonuses-amount').value);
    var otherIncomeName = document.getElementById('other-income-name').value;
    var otherIncomeFrequency = document.getElementById('other-income-frequency').value;
    var otherIncomeAmount = Number(document.getElementById('other-income-amount').value);
    var result = calculateTotalIncome([
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
    var totalIncome = 0;
    for (var _i = 0, incomes_1 = incomes; _i < incomes_1.length; _i++) {
        var income = incomes_1[_i];
        if (income.name && income.amount) {
            var multiplier = 1;
            if (income.frequency === 'every-two-months') {
                multiplier = 2;
            }
            else if (income.frequency === 'yearly') {
                multiplier = 12;
            }
            totalIncome += income.amount * multiplier;
        }
    }
    return totalIncome;
}
function displayResult(result) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Your total income is: " + result;
}
// Login Form Submission Functionality
var loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", handleLoginFormSubmit);
function handleLoginFormSubmit(event) {
    event.preventDefault();
    var emailInput = document.querySelector("#email-input");
    var passwordInput = document.querySelector("#password-input");
    var email = emailInput.value;
    var password = passwordInput.value;
    var user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
        // Redirect to the dashboard page
        window.location.href = "income.html";
    }
    else {
        alert("Invalid email or password. Please try again.");
    }
}
