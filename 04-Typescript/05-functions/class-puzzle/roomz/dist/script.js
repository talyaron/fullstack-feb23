// 1) write a function that calculate factorial
// 2) write a function that remove spaces for a string. "hello world" -> "helloworld"
// invoke the functions
//1. Factorial
function factorial(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(factorial(4));
//2. Remove spaces
var str = "Hello World";
function removeSpaces(newStr) {
    var allSpacesRemoved = newStr.replaceAll(" ", "");
    return allSpacesRemoved;
}
console.log(removeSpaces(str));
