var userAge = 12;
if (userAge > 16) {
    console.log("You can buy alcohol");
}
else {
    console.log("You can not buy alcohol");
}
var gender = prompt("What is your gender?");
if (gender == "mail") {
    document.write(" אתה בחור כארז! ");
}
else {
    if (gender == 'femal') {
        document.write(" את בחורה מקסימה");
    }
    else {
        document.write(" Unspecified gender ");
    }
}
var height = parseInt(prompt("Please enter your height in meters(m)"));
var weight = parseInt(prompt("Please enter your weight in kg"));
var bmi = weight / (height * height);
document.write(" your BMI is ", bmi);
