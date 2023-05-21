var a = Number(prompt("הכנס מספר ראשון"));
var b = Number(prompt("הכנס מספר שני"));
function add(x, y) {
    try {
        if (isNaN(x) || isNaN(y))
            throw new Error('input is not a number');
        if (typeof x !== 'number')
            throw new Error('input is not a number');
        return x + y;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
console.log(add(a, b));
