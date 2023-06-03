// #length:
var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);
// Expected output: 4
// ------------------------------------------
// #concat:
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
// ------------------------------------------
// #filter:
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function (word) { return word.length > 6; });
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
// ------------------------------------------
// #find/findIndex:
// returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) { return element > 10; });
console.log(found);
// ------------------------------------------
// #forEach:
// executes a provided function once for each array element.
var array1 = ['a', 'b', 'c'];
array1.forEach(function (element) { return console.log(element); });
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
// ------------------------------------------
// #includes:
var array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
// ------------------------------------------
// #indexOf:
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
// ------------------------------------------
// #slice:
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
// ------------------------------------------
// #splice:
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
