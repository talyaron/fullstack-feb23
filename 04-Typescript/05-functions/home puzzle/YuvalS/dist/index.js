// const x = Number(prompt("Enter a number"))
// const y = Number(prompt("Enter a second number"))
// function whoIsBigger (x: Number, y: Number) {
//     if(x>y){
//        return x 
//     }
//     else if(x===y){
//         return x=y
//     }
//     else{
//         return y
//     }
// }
// console.log(whoIsBigger(x, y))
var numbers2 = ["3, 1, 4, 2"];
function fromStoB(numbers2) {
    for (var i = 0; i < numbers2.length; i++) {
        console.log(Math.min.apply(Math, numbers2));
    }
}
console.log(fromStoB(numbers2));
// if(numbers[i] = Math.min(...numbers))
// {
// numbers[i] = result.length ; 
// }
// }
// return result
// }
