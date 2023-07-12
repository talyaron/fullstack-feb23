// Task No. 2

const number1 = parseInt(prompt('Enter a number: '));
const number2 = parseInt(prompt('Enter another one: '));



<<<<<<< HEAD
function max(a, b) {
    if (a > b) {
        return a;
    }
=======
function max(a:number, b:number) {
if (a > b) {
    return a;
}
>>>>>>> main

    else {
        return b;
    }
}

document.write(max(number1, number2).toString())