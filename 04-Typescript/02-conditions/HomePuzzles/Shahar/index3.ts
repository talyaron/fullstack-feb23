const Height = prompt("מה הגובה שלך?");
const Weight = prompt("מה המשקל שלך?")

const BMI = Weight / Height ** 2;
console.log(BMI);

if (BMI < 18.5) {
  console.log(`Your BMI is ${BMI}. You are underweight`);
} else if (BMI >= 18.5 && BMI < 25) {
  console.log(`Your BMI is ${BMI} .Your weight is normal.`);
} else if (BMI >= 25 && BMI < 30) {
  console.log(`Your BMI is ${BMI}.You are overweight.`);
} else if (BMI >= 30) {
  console.log(`Your BMI is ${BMI}.You are obese.`);
} else console.log(`You enterd invalid parameters.`);








  