//idea --> code?

//????

// PASUDO CODE...

// -- intrest caclulator -- //


//DATA/Model 
//classes / object

//UI
// create buttons and input fields (screens);

interface CalculateIntrest {
  intrest: number;
  monthlyPayment?: number;
  totalPayment?: number;
  yearlyPayment?: number;
}

// CONTROLER
function calculateIntrest(
  sum: number,
  periodYears: number,
  intrestPercent: number
): CalculateIntrest | false {
  // get sum, period, intrest rate

  try {
    // debugger;
    // calculate intrest
    const intrest = sum * periodYears * (intrestPercent / 100);
    const totalPayment = intrest + sum;
    const monthlyPayment = totalPayment / (periodYears * 12);
    const yearlyPayment = totalPayment / periodYears;
    // return intrest, monthly payment, total payment, yearly payment
    return { intrest, totalPayment, monthlyPayment, yearlyPayment };
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Cat steps

console.log(calculateIntrest(10000, 2, 5));
