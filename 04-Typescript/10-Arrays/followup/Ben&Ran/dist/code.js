//map
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = arr1.map(Math.sqrt);
console.log(arr2);
//join
console.log(arr1.join());
console.log(arr1.join(''));
console.log(arr1.join('-'));
var arr3 = arr1.flatMap(function (x) { return x === 3 ? ["BENNY"] : ["AVI"]; });
console.log(arr3);
