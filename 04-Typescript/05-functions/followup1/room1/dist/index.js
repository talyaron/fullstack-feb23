debugger;
var x = Number(prompt('please enter a number'));
function factorial(a) {
    var result = a;
    for (var i = a; i > 1; i--) {
        result = result * (i - 1);
    }
    return (result);
}
document.write(factorial(x).toString());
