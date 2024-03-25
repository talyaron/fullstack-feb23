//1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(string) {
  string = string.toLowerCase();
  string = string.replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// 2. Write a JavaScript program to reverse a given string.

function reverseString(inputString: string): string {
  let reversedString: string = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function filterEvenNumbers(numbers: number[]): number[] {
  let evenNumbers: number[] = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
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
  name: string;
  age: number;
};

function groupByAge(people: Person[]): Record<number, Person[]> {
  const grouped: Record<number, Person[]> = {};

  for (const person of people) {
    if (grouped[person.age]) {
      grouped[person.age].push(person);
    } else {
      grouped[person.age] = [person];
    }
  }

  return grouped;
}

const arr = [
  { age: 15, name: "gili" },
  { age: 15, name: "gili" },
  { age: 21, name: "gili" },
];
console.log(groupByAge(arr));
