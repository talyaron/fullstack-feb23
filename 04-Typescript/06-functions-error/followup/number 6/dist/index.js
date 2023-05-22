var num1 = Number(prompt("give me a number between 1 and 10"));
var num2 = Number(prompt("give me a number between 1 and 10"));
var sum = 0;
function numbers(num1, num2) {
    try {
        if (isNaN(num1) || (num2))
            throw new Error("input is NaN");
        sum = num1 + num2;
        if (sum < 1 || sum > 10)
            throw new Error("input out of range. Input should be between 1 and 10");
        return sum;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var sum1 = numbers(num1, num2);
console.log(sum1);
// const x = Number(prompt("give me a number between 1 and 10"));
// function multyByTenBetweenZeroAndTen(number: number): number | undefined {
//   try {
//     if (isNaN(number)) throw new Error("input is NaN");
//     if (number<1 || number >10) throw new Error("input out of range. Input should be between 1 and 10");
//     return number * 10;
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }
// function aa():number|undefined{
//     try {
//        // the function is here...
//        return 1
//     } catch (error) {
//         console.error(error);
//         return undefined;
//     }
// }
// console.log(multyByTenBetweenZeroAndTen(x));
