// # Level 1
// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;
// 2. Write a function to convert Celsius to Fahrenheit
// # Level 2
// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4
// # Level 3
// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321
// Find exercises for js functions and complete them.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// // משימה 1
// const x:string|null= prompt("תביאאאא מספר!!!?")
// const y:number= parseInt(x)
// function tom(a:number){
//     return a*(-1)
// }
// console.log(tom(y))
// משימה 1++
// const x:any=prompt("give me a Celsius")
// function tom (a:number){
//     const fahrenheit = (x * 9/5) + 32;
//     return fahrenheit 
// }
// console.log(tom(x))
// משימה 2
var ge = prompt("מה אתה????");
var he = prompt("?תביא תגובהה");
var yr = Number(he);
function tom(a, b) {
    try {
        if (a != "man")
            throw new Error("what are you?");
        if (a === "man") {
            return (176 - b);
        }
        if (a === "woman") {
            return (161 - b);
        }
        else {
            console.log("error");
        }
    }
    catch (error) {
        console.error(error);
    }
}
console.log(tom(ge, yr));