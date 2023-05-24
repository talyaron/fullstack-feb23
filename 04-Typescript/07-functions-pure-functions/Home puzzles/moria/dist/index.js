var num = (prompt("enter number")) || '';
var tempNumArr = num.split('');
var reversed = '';
function numreversed() {
    try {
        for (var i = tempNumArr.length - 1; i >= 0; i--) {
            reversed += tempNumArr[i];
        }
        return reversed;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(numreversed());
