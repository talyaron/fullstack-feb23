// 3. calculate with loop inside a loop, how much is (1+2+3+...+n) multply by j
// const x: string | null = prompt("please insert a number between 100-1000");
// const AgeAsNumber = parseInt(x || "0");
// if (AgeAsNumber > 1000) {
//   console.log("please pick a number that smaller than 1000");
// } else if (AgeAsNumber < 100) {
//   console.log("please pick a number that greater than 100");
// } else {
//   let sum = 0;
//   for (let i = 0; i <= AgeAsNumber; i++) {
//     sum = sum + i;
//     // console.log((AgeAsNumber * (AgeAsNumber + 1)) / 2);
//   }
//   const z = prompt("please choose a multiple number");
//   const MultipleNumber = parseInt(x || "0");
//   console.log(`the sum of your number is ${sum * MultipleNumber}`);
// }

const x: string | null = prompt("please insert a number between 100-1000");
const AgeAsNumber = parseInt(x || "0");
if (AgeAsNumber > 1000) {
  console.log("please pick a number that smaller than 1000");
} else if (AgeAsNumber < 100) {
  console.log("please pick a number that greater than 100");
} else {
  const z = prompt("please choose a multiple number");
  const MultipleNumber = parseInt(z || "0");
  let sum = 0;

  for (let i = 0; i <= AgeAsNumber; i++) {
    sum = sum + i;
    // console.log((AgeAsNumber * (AgeAsNumber + 1)) / 2);
  }
  let SubTotal = 0;
  for (let p = 0; p <= MultipleNumber; p++) {
    SubTotal = sum * p;
  }
  debugger;

  console.log(`the sum of your number is ${SubTotal}`);
}
