var userNumber = Number(prompt("please choose a number"));
console.log(reversingNumber(userNumber));
// this function reverse a number
function reversingNumber(userNumber) {
    try {
        if (isNaN(userNumber) || userNumber === null || userNumber === "string")
            throw Error("please use only numbers");
        var numbersToArray = Array.from(String(userNumber), Number);
        var tempArr = Array.from(String(userNumber), Number);
        var resultArr = [];
        for (var x = 0; x < numbersToArray.length; x++) {
            resultArr[x] = tempArr.pop();
        }
        var resultToString = resultArr.toString();
        var deleteCommas = resultToString.replaceAll(",", "");
        return parseInt(deleteCommas);
    }
    catch (error) {
        console.error();
        return error;
    }
}
