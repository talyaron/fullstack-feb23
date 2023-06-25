let n = 10; // Replace with your desired value of n
let j = 2; // Replace with your desired value of j
let sum = 0;

for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= i; k++) {
    sum += k;
  }
}

let result = sum * j;
console.log(result); // Output: 110
