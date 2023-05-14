// Exercise no 1
var userAge = 17;
if (userAge >= 18) {
    console.log("You can drink alcohol");
}
else {
    console.log("you are still young");
}
// Exercise no 2
// const gender = prompt(`What is your gender?`);
// if (gender === `Male`) {
//   console.log(`ערב טוב אדוני,במה אוכל לסייע?`);
// } else if (gender === `Female`) {
//   console.log(`ערב טוב גברתי, במה אוכל לסייע?`);
// } else console.log(`ערב טוב, במה אוכל לסייע?`);
// const gender = prompt(`What is your gender?`);
// if (gender == `Male`) {
//   console.log(`ערב טוב אדוני, ברוך הבא לאתר שלי`);
// } else if (gender == `Female`) {
//   console.log(`ערב טוב גברתי, ברוכה הבאה לאתר`);
// } else console.log(`ערב טוב לכם, ברוכים הבאים לאתר`);
// Exercise no 3
var userHight = prompt("What is your height in meters?");
var userHightNum = parseInt(userHight || "0");
var userWeight = prompt("What is your weight in kilograms?");
var userBMI = parseInt(userWeight) / Math.pow(userHight, 2);
console.log(userBMI);
if (userBMI < 18.5) {
    console.log("Your BMI is " + userBMI + ". You are underweight");
}
else if (userBMI >= 18.5 && userBMI < 25) {
    console.log("Your BMI is " + userBMI + " .Your weight is normal.");
}
else if (userBMI >= 25 && userBMI < 30) {
    console.log("Your BMI is " + userBMI + ".You are overweight.");
}
else if (userBMI >= 30) {
    console.log("Your BMI is " + userBMI + ".You are obese.");
}
else
    console.log("You enterd invalid parameters.");
