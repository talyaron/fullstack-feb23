// a function that gets a number and return the amount of the numbers
function amountOfNum(userNumber) {
  let r = userNumber;
  let o = 1;
  let x = 0;
  for (x; r >= 1; x++) {
    if (r == userNumber) {
      r = r / 10;
    } else {
      r = r / 10;
    }
  }
  return x;
}

// debugger;
const userNumber = Number(prompt("please write some numbers") || 0);
// const result = amountOfNum(userNumber);
// console.log(result);

// for (let z = 0; z <= x; z++) {
//   let arr = [x];
//   console.log(arr);
// }
// function sortingNumbers() {
//   // 1324
// }
// let arr = [];
const a = amountOfNum(userNumber);
debugger;
let b = 0;
let c = userNumber;
let arr = [];
for (let x = 0; x < a; x++) {
  if (b == 0) {
    b = userNumber % 10;
    arr[x] = b;
    // b = c;
  } else {
    c = c / 10;
    // b = c % 10;
    arr[x] = [c % 10];
  }
}
console.log(arr);