// #length:
var arr1 = [1, 2, 3];
var arr2 = [2, 3, 4];
console.log(arr1);
console.log(arr2);
console.log(arr1.length);
console.log(arr2.length);
// #concat:
var arr3 = arr2.concat(arr1);
console.log(arr3);
// #filter:
var arr4 = ["benjamin", "gilboa", "jack", "lu"];
var resultt = arr4.filter(function (word) { return word.length > 4; });
console.log(resultt);
// #find/findIndex:
var arr5 = ["benjamin", "gilboa", "jack", "lu"];
console.log(arr5.find(function (word) { return word.length < 4; }));
console.log(arr5.findIndex(function (word) { return word.length < 4; }));
// #forEach:
var arr6 = ["benjamin", "gilboa", "jack", "lu"];
arr6.forEach(function (word) { return console.log("my name is " + word); });
arr6.forEach(function (word) { return console.log(word); });
// #includes:
// #indexOf:
console.log(arr6.indexOf("benjamin"));
console.log(arr6.slice(1, 3));
// #splice:
arr6.splice(0, 1, 'jo');
console.log(arr6);
