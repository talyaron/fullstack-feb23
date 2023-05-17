

let numberOne :number = Number (prompt('what is the first number?'));
let numberTwo :number = Number (prompt('what is the second number?'));

function multiply(number1:number, number2:number) {
    return (number1 * number2);
};

document.write(multiply(numberOne, numberTwo).toString())