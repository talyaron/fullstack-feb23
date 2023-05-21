var num1 = Number(prompt("הכנס בבקשה מספר 1:"));
var num2 = Number(prompt("הכנס בבקשה מספר 2:"));
var sum = 0;
function TwoNumber(num1, num2) {
    try {
        if (isNaN(num1) || isNaN(num2))
            throw new Error("input is Nan");
        sum = num1 + num2;
        if (sum > 20 || sum < 5)
            throw new Error("input out of range of sum");
        return sum;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var sum1 = TwoNumber(num1, num2);
console.log(sum1);
