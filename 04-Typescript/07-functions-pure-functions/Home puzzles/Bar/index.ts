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

// const userGender = prompt("What is your gender?");
// const userHeight = Number(prompt("What is your height?"));

// const manAverage = 176;
// const womanAverage = 161;

// function heightAndGender(userGender, userHeight) {
//     try {
//         if (isNaN(userHeight)) throw new console.error("This is not a number!");
//         if (userGender === "man") {
//             return userHeight - manAverage;
//         }
//         else if (userGender === "woman") {
//             return userHeight - womanAverage;
//         }
//         else {
//             return "Invalid gender input.";
//         }
//     }
//     catch (error) {
//         console.error(error);
//         return undefined;
//     }
// }

// const greeting = heightAndGender(userGender, userHeight);
// console.log(greeting);


// # Level 3

// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321


// const num = Number(prompt("Enter a number"))

// function reverse(num: number) {
//     const str = num.toString().split("").reverse().join("");
//     const num1 = parseInt(str);
//     return num1
// }

// const greeting = reverse(num);
// console.log(greeting);