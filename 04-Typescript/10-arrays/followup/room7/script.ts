const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((x) => x * 2);
// console.log(arr);
// console.log(arr2);

//-------------------------

const arrFlat = [1, 2, 3, [4, 5]];
const arrFlat2 = arrFlat.flat();
console.info(arrFlat2);

const arrFlat3 = [1, 2, 3, [[[6, 7,],8]]];
const arrFlat4 = arrFlat3.flat(2);
console.info(arrFlat4);

//-------------------------

const arr1 = [1, 2, 3];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);