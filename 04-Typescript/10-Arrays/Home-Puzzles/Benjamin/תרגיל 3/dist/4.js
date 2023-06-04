// 2. Write a JavaScript program to find the most frequent 
// item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function counter(arrayy) {
    var x = 0;
    var result;
    var _loop_1 = function (i) {
        var checkArr = arrayy.filter(function (word) { return word === arrayy[i]; });
        var y = checkArr.length;
        if (y > x) {
            x = y;
            result = arrayy[i];
        }
    };
    for (var i = 0; i < arrayy.length; i++) {
        _loop_1(i);
    }
    return (result + " is the most frequent number and it shows up " + x + " times ");
}
console.log(counter(arr1));
