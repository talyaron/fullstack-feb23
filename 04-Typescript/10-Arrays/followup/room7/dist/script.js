var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (x) { return x * 2; });
// console.log(arr);
// console.log(arr2);
//-------------------------
var arrFlat = [1, 2, 3, [4, 5]];
var arrFlat2 = arrFlat.flat();
console.info(arrFlat2);
var arrFlat3 = [1, 2, 3, [[[6, 7,], 8]]];
var arrFlat4 = arrFlat3.flat(2);
console.info(arrFlat4);
//-------------------------
var arr1 = [1, 2, 3];
var result = arr1.flatMap(function (num) { return (num === 2 ? [2, 2] : 1); });
// console.log(result);
