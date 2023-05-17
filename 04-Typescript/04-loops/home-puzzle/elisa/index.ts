// Exercise 1
for (let i = 99; i >= 1; i--) {
  console.log(
    `${i} bottles of beer on the wall.Take one down, pass it around. ${
      i - 1
    } bottles of beer on the wall.`
  );
}
console.log("No more bottles of beer on the wall.");

// Exercise 2
const numberOne = 10;
let sumOne = 0;

for (let i = 1; i <= numberOne; i++) {
  sumOne += i;
}
console.log(`The sum of numbers from 1 to ${numberOne}, is ${sumOne}`);

// Exercise 3
const seconNnumber = 5;
const thirdNumber = 2;
let sumTwo = 0;

for (let i = 1; i <= thirdNumber; i++) {
  for (let k = 1; k <= i; k++) {
    sumTwo += k;
  }
}
const newSum = sumTwo * thirdNumber;
document.write(newSum);
