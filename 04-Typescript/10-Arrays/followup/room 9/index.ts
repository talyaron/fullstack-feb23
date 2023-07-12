const arr1 = [0, 4, 2, [1, 5, 3,]];

const arr4 = arr1.flat();
// Expected output: Array [0, 1, 2, 3, 4]
console.log(arr4)
const arr5 = arr4.sort()
console.log(arr5)
const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

arr1.flatMap