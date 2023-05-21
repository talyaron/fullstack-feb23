// this function gets a random number and returns the number but sorted from smallest digit to highest
function sortingNumbers(...userNumber) {
  let arrOfDigits = Array.from(String(userNumber), Number);
  const arrRange = Array.from(String(userNumber), Number);
  let arrResult: any = [];
  for (let x = 0; x < arrRange.length; x++) {
    arrResult[x] = Math.min(...arrOfDigits);
    let index = arrOfDigits.indexOf(Math.min(...arrOfDigits));
    let d = arrOfDigits.splice(index, 1);
  }
  return arrResult;
}
const userNumber = Number(prompt("please write some numbers") || 0);
console.log(sortingNumbers(userNumber));
