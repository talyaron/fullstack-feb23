var userNumber = Number(prompt("please write some numbers") || 0);
var arrOfDigits = Array.from(String(userNumber), Number);
var arrRange = Array.from(String(userNumber), Number);
// const a = amountOfNum(userNumber);
debugger;
var arrResult = [];
for (var x = 0; x < arrRange.length; x++) {
    arrResult[x] = Math.max.apply(Math, arrOfDigits);
    var index = arrOfDigits.indexOf(Math.max.apply(Math, arrOfDigits));
    var d = arrOfDigits.splice(index, 1);
}
console.log(arrResult);
