//arrays are lists of object/varaibles

const arr: Array<any> = [
  2,
  "Hi",
  { a: 1, b: 222 },
  [1000, 2345],
  undefined,
  false,
  7,
];

//getting an element (element is an variable inside the array)

console.log(arr);
// console.log(arr[3][0]);

//dont use it!!!!!!!
// for(let i=0;i<arr.length; i++){
//     console.log(`${i}: ${arr[i]}`);
// }

// arr.forEach(callbackFunction)

// arr.forEach(function(elm){
//     console.log(elm)
// })

//arrow function

arr.forEach(printElement);

function printElement(elm: any) {
  console.log(elm);
}

arr.forEach((elm: any) => {
  console.log(elm);
});

const ages: number[] = [10, 15, 18, 22, 56];

const index = ages.findIndex((age) => age > 17);
console.log(`Index: ${index}`);

const elmBiggerThan = ages.find((age) => age > 18);
console.log(elmBiggerThan);

const elemsBigger = ages.filter((elm) => elm > 18);
console.log(elemsBigger);
