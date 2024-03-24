
//1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(string: string): boolean {
    let result: boolean = false

    return result
}

// 2. Write a JavaScript program to reverse a given string. 

function reverseString(string: string): string {
    let result: string = ""

    return result
}

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEvenNumbers(numbers: number[]): number[] {

    return []
}

// 4. Write a JavaScript program to find the largest element in a nested array. 
// const arrNumbers = [
//     [0,1,5],
//     [3,5,6]
// ] 
function findLargestElement(nestedArray) {

    let largest = nestedArray[0][0];

    return largest;

}

// https://leetcode.com/problems/two-sum/description/

// 5. regroup the objects by age 
// [...] => { 15: [...], 21: [...] }
type Person = {
    name: string,
    age: number
};

function groupByAge(people: Person[]): Record<number, Person[]> {
    // const arr = [{ age: 15, name: "gili" }, { age: 15, name: "gili" }, { age: 21, name: "gili" }]
    // const filterd = { 15: [{ age: 15, name: "gili" }, { age: 15, name: "gili" }], 21: [{ age: 21, name: "gili" }] }
    return {};
}
