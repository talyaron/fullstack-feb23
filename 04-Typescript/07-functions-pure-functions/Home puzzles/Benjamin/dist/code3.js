var x = prompt("please insert your number");
var numlength;
var mnumber;
if (x !== null) {
    numlength = x.length;
    mnumber = parseFloat(x);
}
function reverse(revnum) {
    try {
        // debugger;
        if (revnum === null)
            throw new Error("input is null");
        if (isNaN(revnum))
            throw new Error("input is NaN");
        var reversenum = '';
        var newarray = [];
        for (var i = 0; i < numlength; i++) {
            var c = ((revnum % (Math.pow(10, (i + 1))) - (revnum % (Math.pow(10, i)))) / (Math.pow(10, i)));
            newarray.push(c);
            reversenum = reversenum + c;
        }
        return reversenum;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(reverse(mnumber));
