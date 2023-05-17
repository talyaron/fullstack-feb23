console.log(Mul(4, 5));
console.log(Add(4, 5));
console.log(Div(4, 5));
console.log(Sub(4, 5));
function Mul(a, b) {
    return a * b;
}
function Add(a, b) {
    return a + b;
}
function Div(a, b) {
    if (b != 0) {
        return a / b;
    }
    return 0;
}
function Sub(a, b) {
    return a - b;
}
