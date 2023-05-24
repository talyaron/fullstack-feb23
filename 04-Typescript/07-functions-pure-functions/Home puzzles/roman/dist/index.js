// # Level 1
// var num = Number(prompt("Enter number"));
// function negative(num:number){
//     num = -Math.abs(num);
//     return num;
// }
// console.log(negative(num))
// # Level 2
// const manAverage = 174;
// const womanAverage = 162;
// const userGender = prompt("Enter your gender male/female")
// const userHeight = Number(prompt("Enter your height in cm")) 
// function gender(gender){
//     try {
//         if (gender ==="male"){
//             let result = userHeight - manAverage;
//             return result;
//         } else if (gender === "female"){
//             let result = userHeight - womanAverage;
//             return result;
//         }else {
//             console.log("error")
//         }
//     } catch (error) {
//     }
// }
// console.log(gender(userGender))
// # Level 3
// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321
debugger;
function reverseNum(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverseNum("12345")));
