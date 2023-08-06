const array = [3,3,3,3,3,3,[4,4]];

const result = array.flatMap(decrease);
const result2 = result.map(decrease);

console.log(array)
console.log(result)
console.log(result2)
console.log(array.some(checkEvenNum))
console.log(result.some(checkEvenNum))
console.log(array.valueOf())


function decrease(num:number){
    return num-1;
}

function checkEvenNum(num:number){
    return num%2==0
}