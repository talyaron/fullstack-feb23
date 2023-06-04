//map
const arr1= [1,2,3,4,5,6];
let arr2= arr1.map(Math.sqrt)
console.log(arr2)
//join
console.log(arr1.join());
console.log(arr1.join(''))
console.log(arr1.join('-'))
let arr3= arr1.flatMap(x=>x===3?["BENNY"]:["AVI"])
console.log(arr3)
