const age = prompt("What`s your age?");
const ageAsNumber = parseInt(age || "0");

if (ageAsNumber >= 18) {
  document.write("Cheers!<br>");
} else if (isNaN(ageAsNumber)) {
  document.write("NaN<br>");
} else {
  document.write("Grow up some mustache first!<br>");
}

const gender = prompt("What is your gender?");
if (gender === "male") {
  document.write("<br>ברוך הבא אחי<br>");
} else if (gender === "female") {
  document.write("<br>ברוכה הבאה אחותי<br>");
} else {
  document.write("<br>Welcome!<br>");
}

const height = parseFloat(prompt("Enter your height in meters:"));
const weight = parseFloat(prompt("Enter your weight in kilograms:"));
const bmi = weight / (height * height);
if (bmi < 18.5) {
  document.write("<br>Underweight<br>");
} else if (bmi < 25) {
  document.write("<br>Normal weight<br>");
} else if (bmi < 30) {
  document.write("<br>Overweight<br>");
} else {
  document.write("<br>Obese<br>");
}

