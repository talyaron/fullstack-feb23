// #length:
let arr1= [1,2,3];
let arr2= [2,3,4];
console.log(arr1)
console.log(arr2)
console.log(arr1.length)
console.log(arr2.length)
// #concat:
let arr3= arr2.concat(arr1)
console.log(arr3)
// #filter:
let arr4= ["benjamin", "gilboa", "jack", "lu"]
const resultt= arr4.filter(word => word.length>4)
console.log(resultt)
// #find/findIndex:
let arr5= ["benjamin", "gilboa", "jack", "lu"]
console.log(arr5.find(word=>word.length<4))
console.log(arr5.findIndex(word=>word.length<4))
// #forEach:
let arr6= ["benjamin", "gilboa", "jack", "lu"]
arr6.forEach(word=>console.log(`my name is ${word}`))
arr6.forEach(word=>console.log(word))
// #includes:
// #indexOf:
console.log(arr6.indexOf("benjamin"))
console.log(arr6.slice(1,3))
// #splice:
arr6.splice(0, 1, 'jo')
console.log(arr6)