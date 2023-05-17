function multiplication(a, b) {
    return a * b;
}
var result = multiplication(5, 4);
console.log(result);
function MultiplicationTable() {
    /* program to generate a multiplication table
 upto a range */
    debugger;
    for (var j = 1; j <= 10; j++)
        for (var i = 1; i <= 10; i++) {
            var result_1 = i * j;
            console.log("" + result_1);
        }
}
MultiplicationTable();
