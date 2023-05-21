// this function gets a random number and returns the number but sorted from smallest digit to highest
function sortingNumbers() {
    var userNumber = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        userNumber[_i] = arguments[_i];
    }
    var arrOfDigits = Array.from(String(userNumber), Number);
    var arrRange = Array.from(String(userNumber), Number);
    var arrResult = [];
    for (var x = 0; x < arrRange.length; x++) {
        arrResult[x] = Math.min.apply(Math, arrOfDigits);
        var index = arrOfDigits.indexOf(Math.min.apply(Math, arrOfDigits));
        var d = arrOfDigits.splice(index, 1);
    }
    return arrResult;
}
var userNumber = Number(prompt("please write some numbers") || 0);
console.log(sortingNumbers(userNumber));
