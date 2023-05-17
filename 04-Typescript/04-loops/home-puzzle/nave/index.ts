let n: number = parseInt(prompt("Enter a value for n:"));
let j: number = parseInt(prompt("Enter a value for j:"));

let start: number = Math.min(n, j);
let end: number = Math.max(n, j);
let sum: number = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

let result: number = sum * (n * j);
console.log(`The result of (${start}+${start+1}+...+${end}) * (${n} * ${j}) is ${result}`);