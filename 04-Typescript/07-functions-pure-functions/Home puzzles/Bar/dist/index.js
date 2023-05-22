// # Level 1
// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;
// const x = Number(prompt("enter a namber"))
// const sum = negativeNumber(x);
// console.log(sum);
// function negativeNumber(x: number) {
//     try {
//         if (isNaN(x)) throw new console.error("You need to enter a number");
//         if (+x) {
//             return -x
//         }
//     } catch (error) {
//         console.error(error)
//         return undefined;
//     }
// }
// # Level 2
// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
// לגבר הוא 1.76 
// לנשים הוא 1.61
var userGender = prompt("what is your gender?");
var userHeight = Number(prompt("what is your height?"));
// let manAverage = 176
var womanAverage = 176;
var average = userHeight + "-" + manAverage + " = " + y;
var greting = heightAndGender(userGender, userHeight);
console.log(greting);
function heightAndGender(userGender, userHeight, y) {
    try {
        if (userGender === "man") {
            var manAverage = 176;
            return "\"hi man, you are\" " + y;
        }
    }
    catch (error) {
    }
}
