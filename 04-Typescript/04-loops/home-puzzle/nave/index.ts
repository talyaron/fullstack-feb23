let n: number = parseInt(prompt("Enter a value for n:"));
let j: number = parseInt(prompt("Enter a value for j:"));
let sum: number = 0;
let i: number = 1;

while (i <= n) {
    sum += i;
    i++;
}

let result: number = (n + j) * sum;
console.log(`The result of (${1}+${2}+...+${n}) * (${n} + ${j}) is ${result}`);