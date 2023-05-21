var Nums = [];
var backIndex = 10;
for (var index = 0; index < 10; index++) {
    Nums[index] = Number(prompt("enter " + backIndex + " numbers"));
    backIndex--;
}
console.log("NOT sort: " + Nums);
Nums = bubbleSort(Nums);
console.log("Sort: " + Nums);
function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}
