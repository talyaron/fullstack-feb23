// 1. write a JavaScript program that counts the
//    times an elements appears in an array. it takes into
//    considration that the given array is 10 elements, (0-9)
//    and returns an array with the numbers counted at the respected
//    indexes
//    example
//    [0,3,9,1,1,7,2,1,0,7]
//    returns
//    [2,3,1,1,0,0,0,2,0,1]
console.log("***** Exercise 1 *****");
var ex1ArrLength = 12;
var numbersArray = new Array();
for (var i = 0; i < ex1ArrLength; i++) {
    numbersArray[i] = Math.floor(Math.random() * 10);
}
var indexCount = new Array(10);
var cnt = 0;
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < numbersArray.length; j++) {
        if (numbersArray[j] == i)
            cnt++;
    }
    indexCount[i] = cnt;
    cnt = 0;
}
console.log("Original array: " + numbersArray);
console.log("index Count array: " + indexCount);
/* End of 1 */
// 2. in a given matrix(squre array of arrays) calculate the absuloute diffrence between the sum of the diagonals.example:
// const arr = [[0, 2, 3],[3, -1, -5],[4, 0, -8]]
// sum1 = 0 + (-1) + -8 = -9
// sum2 = 4 + (-1) + 3 = 6
// finalSum = | (-9) - (6) | = 15
console.log("***** Exercise 2 *****");
var arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        arr[i][j] = Math.floor((Math.random() * (1 - (-1)) - 1) * 10);
    }
}
///print array
console.log(arr[0][0] + " ," + arr[0][1] + " ," + arr[0][2] + " ");
console.log(arr[1][0] + " ," + arr[1][1] + " ," + arr[1][2] + " ");
console.log(arr[2][0] + " ," + arr[2][1] + " ," + arr[2][2] + " ");
console.log("top left to bottom right diagonal sum:" + (arr[0][0] + arr[1][1] + arr[2][2]));
console.log("top right to bottom left diagonal sum:" + (arr[0][2] + arr[1][1] + arr[2][0]));
var res = Math.abs((arr[0][0] + arr[1][1] + arr[2][2]) - (arr[0][2] + arr[1][1] + arr[2][0]));
console.log("absolute diff |a - b| = " + res);
/* End of 2 */
// 3. Given an array of integers, where all elements but one occur twice, find the unique element.
// Example
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4
console.log("***** Exercise 3 *****");
var arr2 = [1, 2, 3, 4, 3, 2, 1, 5, 5];
console.log("Original array: " + arr2);
for (var i = 0; i < arr2.length; i++) {
    var flag = false;
    for (var j = i + 1; j < arr2.length; j++) {
        if (arr2[j] == arr2[i]) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        console.log("The uniqe number (appear only once) is: " + arr2[i]);
        break;
    }
    else
        (flag = false);
}
/* End of 3 */
// instruction 1
// Exercise 5: Create an array called "students" with five
// student objects. Each object should have properties like
// "name", "age", and "grade". Write a function that takes the
// "students" array as input and returns an array with only the
// names of the students.
console.log("***** Exercise 5 *****");
var student1 = {
    name: "Eli Alon",
    age: 32,
    id: 123456789
};
var student2 = {
    name: "Tal Godman",
    age: 36,
    id: 123276989
};
var student3 = {
    name: "Eti Alon",
    age: 39,
    id: 154426799
};
var student = [student1, student2, student3];
console.log(studentNameList(student));
function studentNameList(studentArray) {
    // debugger;
    var nameArray = new Array();
    for (var i = 0; i < studentArray.length; i++) {
        nameArray[i] = studentArray[i].name;
    }
    return nameArray;
}
/* End of 5 */
// Exercise 6: Create an array called "numbers" with ten random
// numbers. Write a function that takes the "numbers" array as
// input and returns a new array with only the even numbers from
// the original array.
console.log("***** Exercise 6 *****");
var numbers = new Array();
for (var i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100);
}
console.log("Original array: " + numbers);
console.log("Only even numbers: " + evenNumbers(numbers));
function evenNumbers(numArray) {
    var evenNumOnly = new Array();
    var newIndex = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            evenNumOnly[newIndex] = numArray[i];
            newIndex++;
        }
    }
    return evenNumOnly;
}
/* End of 6 */
// Exercise 7: Create an array called "words" with five different
// words. Write a function that takes the "words" array as input
// and returns a new array with the words sorted in alphabetical
// order, regardless of the case (uppercase or lowercase).
console.log("***** Exercise 7 *****");
var arrLength = 8;
var words = [];
for (var i = 0; i < arrLength; i++) {
    words[i] = makeString(Math.floor(Math.random() * (5 - 2) + 2));
}
console.log("Original Array: " + words);
console.log("After sort: " + sortWords(words));
function sortWords(strArray) {
    var newArray = new Array();
    newArray = strArray;
    var temp;
    // debugger;
    for (var i = 0; i < newArray.length - 1; i++) {
        for (var j = 0; j < newArray.length - 1; j++) {
            if (newArray[j].localeCompare(newArray[j + 1]) > 0) {
                temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }
    return newArray;
}
function makeString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    var counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
/* End of 7 */
// Exercise 8: Create an array called "matrix" with three
// sub-arrays, each containing four numbers. Write a function
// that takes the "matrix" array as input and returns the sum
// of all the numbers in the matrix.
console.log("***** Exercise 8 *****");
var matrix = [[], [], []];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        matrix[i][j] = Math.floor((Math.random() * (1 - (-1)) - 1) * 10);
    }
}
console.log("original matrix: " + matrix);
console.log("matrix sum: " + calculateSum(matrix));
function calculateSum(numMatrix) {
    var sum = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            sum += numMatrix[i][j];
        }
    }
    return sum;
}
