const array = [1, 43, 56, 76, 33, 455, 6, 6];
const found = array.find((element) => element % 2 == 0);
const found1 = array.find((element) => aa(element) == 14);
console.log(found);
debugger;
console.log(found1);

function aa(element) {
  try {
    let sum = 0;
    for (let i = 0; i < element.toString().length; i++) {
      sum += element % 10;
      element = Math.floor(element / 10);
    }
    return sum;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
