//1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(string: string): boolean {
  let result: boolean = false;
  if (string.length % 2 != 0) {
    //not even
    while (string.length != 1) {
      if (string[0] === string[length]) {
        result = true;
        string = string.slice[0] + string.slice[length];
      } else {
        return (result = false);
      }
    }
  } else {
    //is even
    while (string.length != 0) {
      if (string[0] === string[length]) {
        result = true;
        string = string.slice[0] + string.slice[length];
      } else {
        return (result = false);
      }
    }
  }
  return result;
}

// 2. Write a JavaScript program to reverse a given string.

function reverseString(string: string): string {
  let result: string = "";
  while (string.length >= 0) {
    result = result + string[length];
    string = string.slice[length];
  }
  return result;
}

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(numbers: number[]): number[] {
  let result: number[] = [];
  let j = 0;
  for (let i = 0; i != length; i++) {
    if (numbers[i] % 2 === 0) {
      result[j] = numbers[i];
      j++;
    }
  }
  return [];
}

// 4. Write a JavaScript program to find the largest element in a nested array.
// const arrNumbers = [
//     [0,1,5],
//     [3,5,6]
// ]
function findLargestElement(nestedArray) {
  let largest = nestedArray[0][0];
  let row = 0;
  let col = 0;
  for (row; row > length; row++) {
    for (col; col > length; col++) {
      if (nestedArray[row][col] > largest) {
        largest = nestedArray[row][col];
      }
    }
  }

  return largest;
}

// https://leetcode.com/problems/two-sum/description/

// 5. regroup the objects by age
// [...] => { 15: [...], 21: [...] }
type Person = {
  name: string;
  age: number;
};

function groupByAge(people: Person[]): Record<number, Person[]> {
  // const arr = [{ age: 15, name: "gili" }, { age: 15, name: "gili" }, { age: 21, name: "gili" }]
  // const filtered = { 15: [{ age: 15, name: "gili" }, { age: 15, name: "gili" }], 21: [{ age: 21, name: "gili" }] }

  return {};
}
