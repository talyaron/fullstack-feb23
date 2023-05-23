// # Level 1
// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;
function makeNegative(number) {
    try {
        return -number;
        // if (number > 0) {
        //   return (number *= -1);
        // }
    }
    catch (error) {
        console.error(error);
    }
}
// console.log(makeNegative(-565));
// 2. Write a function to convert Celsius to Fahrenheit
//JavaScript program to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    try {
        if (typeof celsius !== 'number' || isNaN(celsius)) {
            throw new Error('Invalid input. Please provide a valid number for Celsius temperature.');
        }
        return (celsius * 9) / 5 + 32;
    }
    catch (error) {
        console.error(error);
        return NaN;
    }
}
// convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
var calc1 = celsiusToFahrenheit(30);
var calc2 = fahrenheitToCelsius(100);
// console.log(calc1, calc2);
// # Level 2
// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
function userCalculate(gender, height) {
    try {
        var averageHeightMale = 174;
        var averageHeightFemale = 168;
        if (gender == null) {
            return 'The value is not good';
        }
        if (gender !== 'female' && gender !== 'male') {
            return 'Enter valid gender';
        }
        if (gender === 'male') {
            return height - averageHeightMale;
        }
        else if (gender === 'female') {
            return height - averageHeightFemale;
        }
    }
    catch (error) {
        console.log(error);
    }
}
// const userHeight: number = Number(prompt("Enter your height"))
// const userGender: string | null = prompt("Enter your gender")
// console.log(userCalculate(userGender, userHeight))
// # Level 3
// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321
// const arr = [1, 2, 3]
// arr.reverse()
// console.log(arr)
// arr.toString()
// console.log(arr)
// function reverseFunc(num: number) {
//   const str = num.toString().split("").reverse().join("")
//   const num2 = parseInt(str)
//   return num2
// }
// console.log(reverseFunc(370))
function reverseText(str) {
    var reversedStr = '';
    if (str == null) {
        return 'Input is not valid';
    }
    for (var i = str.length - 1; i >= 0; i--) {
        //while the number less that 5 do -1
        reversedStr += str[i];
    }
    return reversedStr;
}
var userStr = prompt('Enter text');
console.log(reverseText(userStr));
// const str = 'guitar'; //5
// console.log('The original string is: ' + str);
// let reversedStr = '';
// console.log('The reversed string is: ' + reversedStr);
