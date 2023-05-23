var arrayOfNum = [5, 2, 4, 1, 9, 3];
sort(arrayOfNum);
function sort(array) {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < array.length; i++) {
            console.log(arrayOfNum);
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
    console.log(arrayOfNum, "finle");
}
