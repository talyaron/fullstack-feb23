var height = 1.6;
var weight = 60;
var bmi = weight / (Math.pow(1.6, 2));
console.log(bmi);
if (bmi > 18.5 && bmi < 25) {
    console.log("Your BMI is normal");
}
else if (bmi < 18.5) {
    console.log("Your BMI is too low");
}
else {
    console.log("Your BMI is too high");
}
