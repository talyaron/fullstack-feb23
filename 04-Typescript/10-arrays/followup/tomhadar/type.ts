// 3. write a function that gets an array of numbers, and return the number ordered from the smallest to the largest. dont use .sort. dont use chatGPT. you can only search of array in javascript. ([9,4,5,7] ->[4,5,7,9] ) -->

// const arr = [1, 4, 8, 2, 9, 22];

// function sortarr() {
//   const sortedArr = arr.slice().sort((a, b) => a - b);
//   return sortedArr;
// }

// console.log(sortarr()); 


const arr = [1, 4, 8, 2, 9, 22];

function sortarr() {
  const sortedArr = arr.slice(); // העתקה של המערך
  
  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // החלפת הערכים
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  
  return sortedArr;
}

console.log(sortarr());








// // 1. Exercise 1: Create an array called "colors" with three different color names. Print the second element of the array.
// // 2. Create an array called "numbers" with five
// //    random numbers. Add two more numbers to the end of the array.
// //    Print the updated array.



// let color= ["blue","pink","yellow","red"]
// console.log(color[1])
// // color[2]="black"
// // console.log(color)
// // console.log(color.length)
// // console.log(color[2])

// let arr: number[] = [1,5,8,7,3]
// arr.push(21,22)
// console.log(arr)


// // console.log(arr)
// // console.log(arr.map(tom=> tom*2))
// // console.log(arr.filter(element=> element>5))
// // console.log(color.push("tom"))
// // console.log(color.pop())
// // console.log(color.unshift("hadar"))
// // console.log(color.map(element=>element="tom"))
// // console.log(color)