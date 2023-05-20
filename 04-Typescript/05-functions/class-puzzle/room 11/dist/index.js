var a = Number(prompt("הכנס מספר עצרת"));
function factorial(a) {
    var j = a;
    var i = 1;
    for (j >= 1; j--;) {
        i = i * j;
    }
    return (i);
}
var result = (factorial());
console.log(result);
