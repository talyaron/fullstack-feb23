const num:any= prompt("please enter number");
const j:any=prompt("please enter the second number")
let x:number= 0;
let sum:number= 0;

for (x=0;x<=num;x++) {
sum= x+sum;
}

console.log( `the sum is: ${sum}`)