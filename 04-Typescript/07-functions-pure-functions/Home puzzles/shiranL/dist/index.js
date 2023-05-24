console.log("shiran");
document.write("shiran");
var num = prompt("enter a number");
while (isNaN(Number(num))) {
    debugger;
    num = prompt("please enter only a number (not atring)");
}
console.log(num);
console.log(reversedNum(num));
function reversedNum(num) {
    return (parseFloat(num
        .toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(num));
}
