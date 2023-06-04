// 3. Given an array of integers, where all elements 
// but one occur twice, find the unique element.
// Example
// const arr = [1,2,3,4,3,2,1,5,5]
// The unique element is 4
var arr = [1, 2, 3, 4, 3, 2, 1, 5, 5];
function checker(array) {
    var _loop_1 = function (i) {
        var newArr = array.filter(function (word) { return word === array[i]; });
        if (newArr.length == 1) {
            var striny = "The unique element is " + array[i];
            return { value: striny };
        }
    };
    for (var i = 0; i < array.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
console.log(checker(arr));
