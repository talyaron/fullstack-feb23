console.log(mul(12, 6));
console.log(add(12, 6));
console.log(div(12, 6));
console.log(sub(12, 6));
function mul(a, b) {
    return a * b;
}
function add(a, b) {
    return a + b;
}
function div(a, b) {
    if (b != 0) {
        return a / b;
    }
    return 0;
}
function sub(a, b) {
    return a - b;
}
