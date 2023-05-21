var firstNumber = Number(prompt(" Please enter your first number ")) || 0;
var secondNumber = Number(prompt("Please enter your second number ")) || 0;
function numbers(a, b) {
    if (a > b) {
        console.log(a + " is greater than " + b);
    }
    else if (a < b) {
        console.log(b + " is greater than " + a);
    }
    else {
        console.log(a + " and " + b + " are equal ");
    }
}
numbers(firstNumber, secondNumber);
