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
var numbers2 = [3, 1, 4, 8];
function fromStoB(numbers2) {
    for (var i = 0; i < numbers2.length; i++) {
        numbers2[i] = Math.min.apply(Math, numbers2);
    }
}
console.log(fromStoB(numbers2));
// const arr = [3, 1, 4, 2];
// const x = Math.min(...arr)
// console.log(x)
// if(numbers[i] = Math.min(...numbers))
// {
// numbers[i] = result.length ; 
// }
// }
// return result
// }