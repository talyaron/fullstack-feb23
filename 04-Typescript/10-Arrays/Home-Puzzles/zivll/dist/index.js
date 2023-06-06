var array = [1, 2, 100, 4, 5];
var arrayString = ["Pavel", "Ziv", "Tal", "Moshe"];
console.log(array.toString());
console.log(arrayString.join(" / "));
console.log(array.join(" / "));
console.log(array);
console.log(arrayString.sort());
console.log(array.sort(function (a, b) { return a > b; }));
