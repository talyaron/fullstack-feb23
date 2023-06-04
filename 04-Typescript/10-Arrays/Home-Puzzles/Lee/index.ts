// Exercise 6: Create an array called "numbers" with ten random
// numbers. Write a function that takes the "numbers" array as
// input and returns a new array with only the even numbers from
// the original array.


const numbers = [2, 5, 7, 8, 10, 13, 16, 22]
numbers[8] = 12;
const result = numbers.filter((n) => n % 2 === 0)
// document.getElementById('output').innerHTML = 'Resulting Array : ' + result;
console.log(result)

// 3. print every odd item in a given array

const oddNumbers = [2, 5, 7, 8, 10, 13, 16, 22];
const sortOddNumbers = (numbers) => {
    const oddNumbers = numbers.filter(numbers => numbers % 2);
    console.log(oddNumbers);
}
console.log(sortOddNumbers(oddNumbers));


// // 1. write a JavaScript program that counts the
// //    times an elements appears in an array. it takes into
// //    considration that the given array is 10 elements, (0-9)
// //    and returns an array with the numbers counted at the respected
// //    indexes
// //    example
// //    [0,3,9,1,1,7,2,1,0,7]
// //    returns
// //    [2,3,1,1,0,0,0,2,0,1]


const repet = [0, 3, 9, 1, 1, 7, 2, 1, 0, 7]

const count = {};

for (const element of repet) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count);


// 2. in a given matrix (squre array of arrays) calculate the
//    absuloute diffrence between the sum of the diagonals. example:

const arr = [
    [0, 2, 3],
    [3, -1, -5],
    [4, 0, -8]
];

function diagonalSum(mat) {
    let length = mat.length - 1,
        sum = 0
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i] + mat[i][length - 1]
    }
    if (length % 2 === 0) sum -= mat[length / 2][length / 2];
    return Math.abs(sum);

}

// console.log(diagonalSum(arr))

// Write a JavaScript program to find the most frequent
//    item in an array.
//    Sample Output : a ( 5 times )

const array:  (string | number)[] = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(array) {
    const frequencyMap = {};
    let maxElement = array[0];
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
        if (frequencyMap[element] > maxCount) {
            maxElement = element;
            maxCount = frequencyMap[element];
        }
    }
    return maxElement;
}
console.log(mostFrequent(array))


// Write a JavaScript program that accepts a number
//    as input and inserts dashes (-) between each even number. For
//    example if you accept 025468 the output should be 0-254-6-8.





