var arrayOfNum = [9, 2, 4, 6, 8];
var newArrayOfNum = [];
console.log(arrayOfNum);
console.log(newArrayOfNum);
sort(arrayOfNum);
function sort(array) {
    if (array[0] > array[1]) {
        // for(let i=1;i<array.length;i++){
        array.splice(array[0]);
        console.log("test");
        //  return   array.splice(array[1])
        // }
    }
}
