// 2. Write a JavaScript program to find the most frequent 
// item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function counter(arrayy:any[]){
    let x=0
    let result:any
for(let i=0; i<arrayy.length;i++){
    let checkArr= arrayy.filter(word=>word===arrayy[i]);
    let y= checkArr.length;
    if (y>x){
        x=y
       result= arrayy[i];
    }
}
return (`${result} is the most frequent number and it shows up ${x} times `)
}
console.log(counter(arr1))