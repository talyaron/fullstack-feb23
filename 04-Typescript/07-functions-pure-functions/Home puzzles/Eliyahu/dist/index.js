var a = Number(prompt('הכנס מספר שלם'));
console.log(reverse(a));
function chack(sign) {
    try {
        if (sign === '')
            throw new Error('the input is not a number');
        if (sign === null)
            throw new Error('the input is not a number');
    }
    catch (error) {
        console.error(error);
        return;
    }
}
function reverse(num) {
    try {
        if (isNaN(num))
            throw new Error('the input is not a number');
        var result = 0;
        var numst = num.toString();
        for (var i = 0; i < numst.length; i++) {
            var unit = Number(numst[i]);
            unit = unit * Math.pow(10, i);
            result = result + unit;
            // console.log(unit)
        }
        console.log(result);
    }
    catch (error) {
        console.error(error);
        return;
    }
}
