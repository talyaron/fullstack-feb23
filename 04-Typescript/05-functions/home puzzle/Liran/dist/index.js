function sortArray(arr) {
    var tempArray = new Array(arr.length);
    var temp = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
var numberArray = [4, 85, 24, 98, 3, 1, 0, 4, -5, 45, -9, 43, -90];
document.write("original array: " + numberArray.toString());
sortArray(numberArray);
document.write("<br>sorted array: " + numberArray.toString());
