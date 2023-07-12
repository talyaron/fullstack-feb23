// 1) write a function that calculate factorial
// 2) write a function that remove spaces for a string. "hello world" -> "helloworld"

// invoke the functions

//1. Factorial
function factorial(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(factorial(4));

//2. Remove spaces
const str = "Hello World";

function removeSpaces(newStr: string): string {
  const allSpacesRemoved = newStr.replaceAll(" ", "");
  return allSpacesRemoved;
}

console.log(removeSpaces(str));


