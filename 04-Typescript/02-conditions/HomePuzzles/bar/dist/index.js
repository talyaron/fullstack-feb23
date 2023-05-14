var gender = prompt("whwt is your gender?");
if (gender === 'men') {
    document.write("היי גבר");
}
else {
    document.write("היי");
}
var age = prompt("how old are you?");
var ageAsNumber = parseInt(age || "0");
if (ageAsNumber >= 18) {
    document.write("תרצה לקנות בירה?");
}
else {
    document.write("תרצה מיץ תפוזים?");
}
// const height = prompt("How tall are you?");
// const heightAsNumber = parseInt(height || "0");
// const weight = prompt("What is your weight?");
// const weightAsNumber = parseInt(weight || "0");
// if (weightAsNumber )
// function calculateBMI(weight: number, height: number): number {
//     const bmi = weight / Math.pow(height/100, 2);
//     return Math.round(bmi * 10) / 10;
//   }
var calculateBMI;
(function (weight, height) {
    var bmi = weight / Math.pow(height / 100, 2);
    return Math.round(bmi * 10) / 10;
});
var weight = x; // kg
var height = x; // cm
var bmi = calculateBMI(weight, height);
console.log("BMI: " + bmi);
