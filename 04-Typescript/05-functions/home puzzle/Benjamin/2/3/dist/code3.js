// debugger;
console.log("hey");
var x = prompt("please insert the length of your array");
var arrlength = 0;
if (x != null) {
    arrlength = parseFloat(x);
}
var userarray = [];
for (var i = arrlength; i > 0; i--) {
    var y = prompt("please insert a number");
    var newnum = void 0;
    if (y != null) {
        newnum = parseInt(y);
    }
    userarray.push(newnum);
}
function sorter(anarray) {
    var arrayb = [];
    var c = anarray[0];
    for (var m = arrlength; m > 0; m--) {
        for (var i = 0; i < arrlength - 1; i++) {
            if (c < anarray[i + 1]) {
            }
            else {
                c = anarray[i + 1];
            }
        }
        var u = anarray.indexOf(c);
        arrayb.push(c);
        anarray.splice(u, 1);
        c = anarray[0];
        arrlength--;
    }
    return (arrayb);
}
var sortedarray = sorter(userarray);
console.log(sortedarray);
