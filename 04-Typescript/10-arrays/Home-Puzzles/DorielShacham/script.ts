// hard

// 1. write a JavaScript program that counts the
//    times an elements appears in an array. it takes into
//    considration that the given array is 10 elements, (0-9)
//    and returns an array with the numbers counted at the respected
//    indexes
//    example
//    [0,3,9,1,1,7,2,1,0,7]
//    returns
//    [2,3,1,1,0,0,0,2,0,1]

const arr:number[] = [0, 3, 9, 1, 1, 7, 2, 1, 0, 7];
const count = (arr: number[]) => {
    const result: number[] = [];
    for (let i = 0; i < 10; i++) {
        result.push(arr.filter((num) => num === i).length);
    }
    return result;
};
console.log(count(arr));
// --------------------------------------------------------- ---------------------------------------------------------
// 2. in a given matrix (squre array of arrays) calculate the
//    absuloute diffrence between the sum of the diagonals. example:
//    const arry = [
//    [0,2,3],
//    [3,-1,-5],
//    [4,0,-8]
//    ]
// sum1 = 0 + (-1) + -8 = -9
// sum2 = 4 + (-1) + 3 = 6
// finalSum = |(-9) - (6)| = 15



// --------------------------------------------------------- ---------------------------------------------------------
// 3. Given an array of integers, where all elements
//    but one occur twice, find the unique element.
// Example:
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4
// //methods:
// push, shift, nestted array, foreach, map, filter,
// find, some(true, false), every, icludes
// // new methods - returns new array
// with(index, element)
// toSorted === sort
// //[...array].sort() <---old
// toRevesed === reverse
// toSpliced === splice(index, toIndex, addedElements)
// the new ones are not supprted yet. only a couple months
// //spread opreator
// reduce

const arrayz:number[] = [1, 2, 3, 4, 3, 2, 1, 5, 5];
arrayz.forEach((num:number) => {
    if (arrayz.indexOf(num) === arrayz.lastIndexOf(num)) {
        console.log(num);
    }
});
console.log(arrayz.filter((num) => arrayz.indexOf(num) === arrayz.lastIndexOf(num)));