var array = [1, 43, 56, 76, 33, 455, 6, 6];
var found = array.find(function (element) { return element % 2 == 0; });
var found1 = array.find(function (element) { return aa(element) == 14; });
console.log(found);
debugger;
console.log(found1);
function aa(element) {
    try {
        var sum = 0;
        for (var i = 0; i < element.toString().length; i++) {
            sum += element % 10;
            element = Math.floor(element / 10);
        }
        return sum;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
