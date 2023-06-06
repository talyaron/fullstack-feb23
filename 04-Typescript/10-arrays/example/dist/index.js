//arrays are lists of object/varaibles
var arr = [
    2,
    "Hi",
    { a: 1, b: 222 },
    [1000, 2345],
    undefined,
    false,
    7,
];
//getting an element (element is an variable inside the array)
console.log(arr);
// console.log(arr[3][0]);
//dont use it!!!!!!!
// for(let i=0;i<arr.length; i++){
//     console.log(`${i}: ${arr[i]}`);
// }
// arr.forEach(callbackFunction)
// arr.forEach(function(elm){
//     console.log(elm)
// })
//arrow function
arr.forEach(printElement);
function printElement(elm) {
    console.log(elm);
}
arr.forEach(function (elm) {
    console.log(elm);
});
var ages = [10, 15, 18, 22, 56];
var index = ages.findIndex(function (age) { return age > 17; });
console.log("Index: " + index);
var elmBiggerThan = ages.find(function (age) { return age > 18; });
console.log(elmBiggerThan);
var elemsBigger = ages.filter(function (elm) { return elm > 18; });
console.log(elemsBigger);
var multiBiggerThan = ages.filter(function (elm) { return elm > 17; }).map(function (elm) { return elm * 3; });
console.log(multiBiggerThan);
