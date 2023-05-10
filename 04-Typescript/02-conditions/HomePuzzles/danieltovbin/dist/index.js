function ager() {
    var age = prompt("what is your age?");
    var ageAsNumber = parseInt(age || "0");
    var textColor = "go away, you're still young."; //check line 11 for details
    if (ageAsNumber >= 18) {
        console.log("You are " + ageAsNumber + " years old, you can buy alcohol.'"); //this is an example of dollar variable you need to put back tick its called ` ` and ${} for the variable.
        console.log("you can buy alcohol.");
    }
    else {
        console.log('%c' + textColor + '', 'color: red; display: block; font-weight: bold; font-size: 20px;'); //added color to text in console.
    }
}
ager(); // Add this to "play/start function"
var gender = "Please enter your gender:";
if (gender === "female") {
    console.log("את אישה");
}
else if (gender === "male") {
    console.log("אתה גבר");
}
var height = prompt("what is your height in meters?");
var weight = prompt("what is your weight in kg?");
var BMI = weight / (height * height);
if (BMI < 18.5) {
    console.log("you are within the underweight range");
}
else if (BMI >= 18.5 && BMI < 25) {
    console.log("you are within the healthy weight range");
}
else if (BMI >= 25 && BMI < 30) {
    console.log("you are within the overweight range");
}
else if (BMI >= 30) {
    console.log("you are within the obesity range");
}
