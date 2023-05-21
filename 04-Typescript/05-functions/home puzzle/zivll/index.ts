const userNumber = Number(prompt("please write some numbers") || 0);
let arrOfDigits = Array.from(String(userNumber), Number);
const arrRange = Array.from(String(userNumber), Number);
let arrResult: any = [];
for (let x = 0; x < arrRange.length; x++) {
  arrResult[x] = Math.max(...arrOfDigits);

  let index = arrOfDigits.indexOf(Math.max(...arrOfDigits));
  let d = arrOfDigits.splice(index, 1);
}
console.log(arrResult);
