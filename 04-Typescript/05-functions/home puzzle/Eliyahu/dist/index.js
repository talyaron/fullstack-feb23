// // 1) write a prompt that ask the user if he is male or female. if the answer is "male" return "hello sir" if it is "female" return "hello Miss". If the user write another answer, it should return "hello".
var type = prompt("what is your gender?");
function Hello(sug) {
    var gender = "";
    if (sug === "male") {
        gender = "Sir";
    }
    else {
        if (sug === "female") {
            gender = "Miss";
        }
    }
    return "Hello " + gender;
}
document.write(Hello(type));
// // 2) write a function that gets 2 numbers, and return the bigger. (max)
var num1 = Number(prompt("הכנס מספר"));
var num2 = Number(prompt("הכנס מספר נוסף"));
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(max(num1, num2));
// 3) write a function that gets an array of numbers, and return the number ordered from the smallest to the largest. dont use .sort. dont use chatGPT. you can only search of array in javascript. ([9,4,5,7] ->[4,5,7,9] )
var nums = [];
var lng = Number(prompt("כמה מספרים יש במערך?"));
for (var z = 0; z < lng; z++) {
    var n = Number(prompt("הכנס מספר"));
    nums.push(n);
}
var orderNums = [];
for (var j = 0; j < nums.length; j++) {
    var x = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > x) {
            x = nums[i];
        }
    }
    nums[nums.indexOf(x)] = 0;
    orderNums.unshift(x);
}
document.write(orderNums);
