//1

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

// function factorial (num:number):number{
//     let result=1;
//     for (let i=2; i<=num; i++){
//         result *=i;
//     }
//     return result;
// }

document.write(`${factorial(4)}`);