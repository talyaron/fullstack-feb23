var n = parseInt(prompt("Enter a value for n:"));
var j = parseInt(prompt("Enter a value for j:"));
var sum = 0;
var i = 1;
while (i <= n) {
    sum += i;
    i++;
}
var result = (n + j) * sum;
console.log("The result of (" + 1 + "+" + 2 + "+...+" + n + ") * (" + n + " + " + j + ") is " + result);
