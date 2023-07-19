"use strict";

var _a;

(_a = document.querySelector('#submitBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

  event.preventDefault();

  try {
    var salaryPensionFrequency = (_a = document.querySelector('#salary-pension-frequency')) === null || _a === void 0 ? void 0 : _a.value;
    var salaryPensionAmount = Number((_b = document.querySelector('#salary-pension-amount')) === null || _b === void 0 ? void 0 : _b.value);
    var govSupportFrequency = (_c = document.querySelector('#gov-support-frequency')) === null || _c === void 0 ? void 0 : _c.value;
    var govSupportAmount = Number((_d = document.querySelector('#gov-support-amount')) === null || _d === void 0 ? void 0 : _d.value);
    var rentalIncomeFrequency = (_e = document.querySelector('#rental-income-frequency')) === null || _e === void 0 ? void 0 : _e.value;
    var rentalIncomeAmount = Number((_f = document.querySelector('#rental-income-amount')) === null || _f === void 0 ? void 0 : _f.value);
    var otherSupportFrequency = (_g = document.querySelector('#other-support-frequency')) === null || _g === void 0 ? void 0 : _g.value;
    var otherSupportAmount = Number((_h = document.querySelector('#other-support-amount')) === null || _h === void 0 ? void 0 : _h.value);
    var giftsBonusesFrequency = (_j = document.querySelector('#gifts-bonuses-frequency')) === null || _j === void 0 ? void 0 : _j.value;
    var giftsBonusesAmount = Number((_k = document.querySelector('#gifts-bonuses-amount')) === null || _k === void 0 ? void 0 : _k.value);
    var otherIncomeName = (_l = document.querySelector('#other-income-name')) === null || _l === void 0 ? void 0 : _l.value;
    var otherIncomeFrequency = (_m = document.querySelector('#other-income-frequency')) === null || _m === void 0 ? void 0 : _m.value;
    var otherIncomeAmount = Number((_o = document.querySelector('#other-income-amount')) === null || _o === void 0 ? void 0 : _o.value);
    var result = calculateTotalIncome([{
      name: 'Salary from work or pension allowance',
      frequency: salaryPensionFrequency,
      amount: salaryPensionAmount
    }, {
      name: 'Allowances and supports from the government',
      frequency: govSupportFrequency,
      amount: govSupportAmount
    }, {
      name: 'Rental income',
      frequency: rentalIncomeFrequency,
      amount: rentalIncomeAmount
    }, {
      name: 'Other support',
      frequency: otherSupportFrequency,
      amount: otherSupportAmount
    }, {
      name: 'Gifts and bonuses',
      frequency: giftsBonusesFrequency,
      amount: giftsBonusesAmount
    }, {
      name: otherIncomeName,
      frequency: otherIncomeFrequency,
      amount: otherIncomeAmount
    }]);
    displayResult(result);
    (_p = document.querySelector('#incomeForm')) === null || _p === void 0 ? void 0 : _p.reset();
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

function calculateTotalIncome(incomes) {
  var totalIncome = 0;

  try {
    for (var _i = 0, incomes_1 = incomes; _i < incomes_1.length; _i++) {
      var income = incomes_1[_i];

      if (income.name && income.amount) {
        var multiplier = 1;

        if (income.frequency === 'every-two-months') {
          multiplier = 2;
        } else if (income.frequency === 'yearly') {
          multiplier = 12;
        }

        totalIncome += income.amount * multiplier;
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return totalIncome;
}

function displayResult(result) {
  try {
    var resultElement = document.querySelector('#result');

    if (resultElement instanceof HTMLElement) {
      resultElement.innerHTML = "Your total income is: " + result;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}