var x = Number(prompt('input a number'));
var s = prompt('input a sign');
var y = Number(prompt('input a number'));
console.log(x, s, y);
function calculate(a, sign, b) {
    try {
        if (isNaN(a) || isNaN(b))
            throw new Error('one of the input is not a number');
        if ((sign !== '*') && (sign !== '/'))
            throw new Error('the sign is not correct');
        if (sign === '/') {
            if (b == 0)
                throw new Error('can not divide by zero ');
            return a / b;
        }
        else
            return a * b;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
// console.log (calculate(8,'*',4))
// console.log (calculate(8,'/',4))
// console.log (calculate(8,'/',0))
// console.log (calculate(8,'g',4))
// console.log (calculate('r','*',4))
console.log(calculate(x, s, y));
