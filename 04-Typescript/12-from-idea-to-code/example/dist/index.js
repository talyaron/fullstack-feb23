//idea --> code?
// CONTROLER
function calculateIntrest(sum, periodYears, intrestPercent) {
    // get sum, period, intrest rate
    try {
        // debugger;
        // calculate intrest
        var intrest = sum * periodYears * (intrestPercent / 100);
        var totalPayment = intrest + sum;
        var monthlyPayment = totalPayment / (periodYears * 12);
        var yearlyPayment = totalPayment / periodYears;
        // return intrest, monthly payment, total payment, yearly payment
        return { intrest: intrest, totalPayment: totalPayment, monthlyPayment: monthlyPayment, yearlyPayment: yearlyPayment };
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
// Cat steps
console.log(calculateIntrest(10000, 2, 5));
