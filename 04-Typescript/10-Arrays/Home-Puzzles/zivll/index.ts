const array = [1, 2, 100, 4, 5];
const arrayString = [`Pavel`, `Ziv`, `Tal`, `Moshe`];

console.log(array.toString());
console.log(arrayString.join(" / "));
console.log(array.join(" / "));
console.log(array);
console.log(arrayString.sort());
console.log(array.sort((a: number, b: number) => a > b));
