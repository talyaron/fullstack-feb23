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
var userGender = prompt("What is your gender?");
var userHeight = Number(prompt("What is your height?"));
var manAverage = 176;
var womanAverage = 162;
var greting = heightAndGender(userGender, userHeight);
console.log(greting);
function heightAndGender(userGender, userHeight) {
    try {
        if (isNaN(userHeight))
            throw new console.error("This is not a number!");
        if (userGender === "man") {
            return userHeight - manAverage;
        }
        else if (userGender === "woman") {
            return userHeight - womanAverage;
        }
        else {
            return "Invalid gender input.";
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
