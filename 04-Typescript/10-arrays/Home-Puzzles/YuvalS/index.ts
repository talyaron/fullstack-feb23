// const fruits1: string[] = ["banana", "apple", "peach", "cherry", "mango"]
// fruits1.splice(2, 1)
// console.log(fruits1)

// const ages1: number[] = [5, 8, 3, 25, 100, 15, 10]
// ages1.sort((a, b) => a-b);
// console.log(ages1)
// const numbers1: number[] = [5, 8, 3, 25, 100, 15, 10]
// const evenNumberss: number[] = [];
// for(let i = 0; i < numbers1.length; i++ ){
//     if(numbers1[i] % 2 == 0){
//         evenNumberss.push(numbers1[i])
        

//     }
// }
// console.log(evenNumberss)

const numbers1: number[] = [5, 8, 3, 25, 100, 15, 10, 2, 4, 6]
// const evenNumberss: number[] = [];
const evenNumberss: number[] = numbers1.filter(elm=> elm % 2 == 0)
console.log(evenNumberss)




