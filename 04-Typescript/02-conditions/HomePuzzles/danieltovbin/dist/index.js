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
console.log("'hello --> '" + height);
var numHeight = Number(height); //added this to convert the prompt message from string to number (like parseInt) - Prompt message comes as string - 0 = "0", 1 = "1"
var numWeight = Number(weight); //added this to convert the prompt message from string to number (like parseInt) - Prompt message comes as string - 0 = "0", 1 = "1"
var BMI = numWeight / (numHeight * numHeight);
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
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// console.log(names.length);
// let i = 4;
// do{
//   console.log('val of i is: ', i);
//   i++;
// } while(i < 5);
// const password = 'psdsdsdhvh323sfsf';
// if(password.length >= 12){
//   console.log('that password is mighty enough!');
// }
//   if(password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//   console.log('password is not long enough');
// }
// const greet = function(){
//   return 'hello, world';
// };
// const greet = () => 'hello, world'; 
var bill = function (products, tax) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
var bill = function (products, tax) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 30], 0.2));
