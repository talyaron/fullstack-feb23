// hadar
// const num1:any= prompt("give me a number")
// const sign:any= prompt("give a sign")
// const num2:any= prompt("give me a number")
// function tom(a:number, b:string, c:number): any{
//     try {
//         if(isNaN(a)|| isNaN(c)) throw new Error("input is not a number")
//         if(b!= "/" && b!= "*") throw new Error ("input is not good")
//         if( b=== "/"){
//             return a/c
//         } else{
//             return a*c
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }
// console.log(tom(num1,sign,num2))
tom;
var num1 = prompt("give me number");
var sign = prompt("give me sign");
var num2 = prompt("give me number two");
function tom(a, b, c) {
    try {
        if (isNaN(a) || isNaN(c))
            throw new Error("NaN");
        if (b != "/" && b != "*")
            throw new Error("לך קיבינימט");
        if (b === "/") {
            return a / c;
        }
        else {
            return a * c;
        }
    }
    catch (error) {
        console.error(error);
    }
}
console.log(tom(num1, sign, num2));
