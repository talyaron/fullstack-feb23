// Task No. 2

const number1 = parseInt(prompt('Enter a number: '));
const number2 = parseInt(prompt('Enter another one: '));



function max(a, b) {
    if (a > b) {
        return a;
    }

    else {
        return b;
    }
}

document.write(max(number1, number2).toString())