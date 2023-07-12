// 3. Given an array of integers, where all elements 
// but one occur twice, find the unique element.

// Example
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4
const arr = [1,2,3,4,3,2,1,5,5]

function checker(array:number[]){
    for(let i=0;i<array.length;i++){
       let newArr =  array.filter(word=>word===array[i]);
       if (newArr.length==1){
        let striny=`The unique element is ${array[i]}`
        return striny
       }
    }
}
console.log(checker(arr))