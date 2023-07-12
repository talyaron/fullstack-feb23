const userNumber = Number(prompt("please choose a number"));
console.log(reversingNumber(userNumber));
// this function reverse a number
function reversingNumber(userNumber) {
  try {
    if (isNaN(userNumber) || userNumber === null || userNumber === "string")
      throw Error("please use only numbers");
    const numbersToArray = Array.from(String(userNumber), Number);
    let tempArr = Array.from(String(userNumber), Number);
    let resultArr: number | any = [];
    for (let x = 0; x < numbersToArray.length; x++) {
      resultArr[x] = tempArr.pop();
    }
    const resultToString = resultArr.toString();
    const deleteCommas = resultToString.replaceAll(`,`, "");
    return parseInt(deleteCommas);
  } catch (error) {
    console.error();
    return error;
  }
}
