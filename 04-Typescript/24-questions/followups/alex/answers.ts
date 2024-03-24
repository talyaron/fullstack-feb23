
//1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(string: string): boolean {
    let result: boolean = false

    const reversedString = string.split('').reverse().join();
    if (reversedString === string) {
        result = true
    }
    return result
}

// 2. Write a JavaScript program to reverse a given string. 

function reverseString(string: string): string {
    let result: string = "";
    result = string.split('').reverse().join();

    return result
}

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEvenNumbers(numbers: number[]): number[] {

    return numbers.filter(number => number % 2 === 0);
}

// 4. Write a JavaScript program to find the largest element in a nested array. 
// const arrNumbers = [
//     [0,1,5],
//     [3,5,6]
// ] 
function findLargestElement(nestedArray) {

    let largest = nestedArray[0][0];

        for (let i = 0; i < nestedArray.length; i++) {
            for (let j = 0; j < nestedArray[i].length; j++) {
                if (nestedArray[i][j] > largest) {
                    largest = nestedArray[i][j];
                }
            }
        }

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

    // the groupedByAge is initialy empty
    const groupedByAge: Record<number, Person[]> = {};

    // for each person object in the array people
    for (const person of people) {
        // Check if the age exists as a key in the groupedByAge object
        if (groupedByAge.hasOwnProperty(person.age)) {
            // If it exists, push the person to the existing array for that age
            groupedByAge[person.age].push(person);
        } else {
            // If it doesn't exist, create a new array with the person and assign it to the age key
            groupedByAge[person.age] = [person];
        }
    }

    return groupedByAge;
}
