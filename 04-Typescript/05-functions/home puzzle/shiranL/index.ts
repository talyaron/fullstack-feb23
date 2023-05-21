

let Nums:number[]= [];
let backIndex=10;
for (let index = 0; index < 10; index++) {
  Nums[index]=Number(prompt(`enter ${backIndex} numbers`)) ;
  backIndex--;
}

console.log(`NOT sort: ${Nums}`);

Nums= bubbleSort(Nums);


console.log(`Sort: ${Nums}`);



function bubbleSort(array: number[]): number[] {
  
  for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - 1; j++) {

          if(array[j] > array[j + 1]) {
              let swap = array[j];
              array[j] = array[j + 1];
              array[j + 1] = swap;
          }
      }
  }
  return array;
}