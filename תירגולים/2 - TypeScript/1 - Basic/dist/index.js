// Alert
// alert("Hi, i'm here")
//confirm
// const conf = confirm("are you okey?") //true/false
// console.log(conf)
//prompt
// const pp: string | null = prompt("Enter your age") //by default return type string
// console.log(pp)
// const ppNum: number = Number(prompt("Enter your age")) //return type number - if the input is string - return NaN (Not a Number)
// console.log(ppNum)
function plusNumbers(x, y) {
    return x + y;
}
var firstNum = Number(prompt("Enter First Number"));
var secondNum = Number(prompt("Enter Second Number"));
console.log(plusNumbers(firstNum, secondNum));
