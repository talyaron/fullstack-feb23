document.querySelector('#submitBtn')?.addEventListener('click', function(event) {
    event.preventDefault();
  
    try {
      const salaryPensionFrequency = (document.querySelector('#salary-pension-frequency') as HTMLInputElement)?.value;
      const salaryPensionAmount = Number((document.querySelector('#salary-pension-amount') as HTMLInputElement)?.value);
  
      const govSupportFrequency = (document.querySelector('#gov-support-frequency') as HTMLInputElement)?.value;
      const govSupportAmount = Number((document.querySelector('#gov-support-amount') as HTMLInputElement)?.value);
  
      const rentalIncomeFrequency = (document.querySelector('#rental-income-frequency') as HTMLInputElement)?.value;
      const rentalIncomeAmount = Number((document.querySelector('#rental-income-amount') as HTMLInputElement)?.value);
  
      const otherSupportFrequency = (document.querySelector('#other-support-frequency') as HTMLInputElement)?.value;
      const otherSupportAmount = Number((document.querySelector('#other-support-amount') as HTMLInputElement)?.value);
  
      const giftsBonusesFrequency = (document.querySelector('#gifts-bonuses-frequency') as HTMLInputElement)?.value;
      const giftsBonusesAmount = Number((document.querySelector('#gifts-bonuses-amount') as HTMLInputElement)?.value);
  
      const otherIncomeName = (document.querySelector('#other-income-name') as HTMLInputElement)?.value;
      const otherIncomeFrequency = (document.querySelector('#other-income-frequency') as HTMLInputElement)?.value;
      const otherIncomeAmount = Number((document.querySelector('#other-income-amount') as HTMLInputElement)?.value);
      
      const result = calculateTotalIncome([
          { name: 'Salary from work or pension allowance', frequency: salaryPensionFrequency, amount: salaryPensionAmount },
          { name: 'Allowances and supports from the government', frequency: govSupportFrequency, amount: govSupportAmount },
          { name: 'Rental income', frequency: rentalIncomeFrequency, amount: rentalIncomeAmount },
          { name: 'Other support', frequency: otherSupportFrequency, amount: otherSupportAmount },
          { name: 'Gifts and bonuses', frequency: giftsBonusesFrequency, amount: giftsBonusesAmount },
          { name: otherIncomeName, frequency: otherIncomeFrequency, amount: otherIncomeAmount }
      ]);
  
      displayResult(result);
      (document.querySelector('#incomeForm') as HTMLFormElement)?.reset();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
  
  function calculateTotalIncome(incomes) {
    let totalIncome = 0;
  
    try {
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
    } catch (error) {
      console.error('An error occurred:', error);
    }
  
    return totalIncome;
  }
  
  function displayResult(result: number) {
    try {
      const resultElement = document.querySelector('#result');
      
      if (resultElement instanceof HTMLElement) {
        resultElement.innerHTML = `Your total income is: ${result}`;
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  function openTabsWithTabPress(): void {
    const tabHeaders: HTMLCollectionOf<Element> = document.getElementsByClassName("tabheader");
  
    document.addEventListener("keydown", function (event: KeyboardEvent): void {
      if (event.key === "Tab") {
        const activeTab: Element | null = document.querySelector(".tabcontent.active");
        if (activeTab) {
          const activeHeaderIndex: number = Array.from(tabHeaders).indexOf(activeTab);
          const nextTab: Element = tabHeaders[(activeHeaderIndex + 1) % tabHeaders.length];
          
          activeTab.classList.remove("active");
          nextTab.classList.add("active");
        }
      }
    });
  }
  
  
  
  
  