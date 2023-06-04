var array = [3, 3, 3, 3, 3, 3, [4, 4]];
var result = array.flatMap(decrease);
var result2 = result.map(decrease);
console.log(array);
console.log(result);
console.log(result2);
console.log(array.some(checkEvenNum));
console.log(result.some(checkEvenNum));
console.log(array.valueOf());
function decrease(num) {
    return num - 1;
}
function checkEvenNum(num) {
    return num % 2 == 0;
}
