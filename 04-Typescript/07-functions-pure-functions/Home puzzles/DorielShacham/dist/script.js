// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;
// function nag(x: number) {
//   try {
//     return -x;
//   } catch {
//     console.log("error");
//   }
// }
// console.log(nag(x));
// 2. Write a function to convert Celsius to Fahrenheit
// 3. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
// function inputCal(gender: string | null, height: number) {
//     try {
//       const averageHeightMale = 174
//       const averageHeightFemale = 165
//       if (gender == null) {
//         return "The value is not good"
//       }
//       if (gender !== "female" && gender !== "male") {
//         return "Enter valid gender"
//       }
//       if (gender === "male") {
//         return height - averageHeightMale
//       } else if (gender === "female") {
//         return height - averageHeightFemale
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
// const userHeight: number = Number(prompt("Enter your height"))
// const userGender: string | null = prompt("Enter your gender")
// console.log(inputCal(userGender, userHeight))
// 4. Write a function to reverse a number. For example, the function gets 123 and returns 321
function reverseNumber(num) {
    try {
        if (typeof reverseNumber !== "function") {
            throw new Error("this is not a number");
        }
        var reversedStr = num.toString().split("").reverse().join("");
        var reversedNum = parseInt(reversedStr);
        return reversedNum;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(Number(reverseNumber(123)));
// Number(prompt(reverseNumber("enter a number:")));
// Find exercises for js functions and complete them.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
