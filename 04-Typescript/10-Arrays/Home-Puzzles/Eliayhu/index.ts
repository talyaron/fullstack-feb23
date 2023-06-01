// easy

// 1. creat a function that gets a number and prints the element
//    in a given array.
//    if not exist - print error

const arr: any = [2, 4, 57, 90, 44, 3, 1, 2, 33, 4, 55, 666, 76, 6, 55, 4, 4, 3, 2, 11, 5, 8, 0, 0, 9, 8, 7]
// arr.splice(1, 0, `-`)
console.log(arr)
function printElementI(index, array: number[]) {
    try {
        const i = array[index]
        if (!i) throw new Error("this index is not exist")
        console.log(i)
    } catch (error) {
        console.error(error)
        return
    }
}
printElementI(10, arr)

// 2. print every item in a given array

arr.forEach(element => {
    console.log(element)
});

// 3. print every odd item in a given array

console.log(arr.filter((number) => number % 2 != 0))

// 4. Write a simple JavaScript program to join all elements of the following array into a string.
//    Sample array : myColor = ["Red", "Green", "White", "Black"];

const myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.toString())

// medium
// 1. Write a JavaScript program that accepts a number
//    as input and inserts dashes (-) between each even number. For
//    example if you accept 025468 the output should be 0-254-6-8.


function numToDigitArr(number) {
    const sNumber = number.toString();
    const array = new Array
    for (var i = 0; i < sNumber.length; i++) {
        array.push(sNumber.charAt(i));
    }
    return array
}
function addDashEvenNum(array:any[]) {
    let str
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2 == 0) && (array[i + 1] % 2 == 0)) {
            array[i] = `${array[i]}-`
        }
        str = str + array[i]
    }

    return str
}
console.log(addDashEvenNum(numToDigitArr(3445678865)))


// 2. Write a JavaScript program to find the most frequent
//    item in an array.
//    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//    Sample Output : a ( 5 times )

// 3. We have the following arrays :
//    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//    o = ["th","st","nd","rd"]
//    Write a JavaScript program to display the colors in
//    the following way :
//    "1st choice is Blue ."
//    "2nd choice is Green."
//    "3rd choice is Red."

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

// 2. in a given matrix (squre array of arrays) calculate the
//    absuloute diffrence between the sum of the diagonals. example:
//    const arr = [
//    [0,2,3],
//    [3,-1,-5],
//    [4,0,-8]
//    ]

// sum1 = 0 + (-1) + -8 = -9
// sum2 = 4 + (-1) + 3 = 6

// finalSum = |(-9) - (6)| = 15

// 3. Given an array of integers, where all elements
//    but one occur twice, find the unique element.

// Example
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4

// //methods
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
