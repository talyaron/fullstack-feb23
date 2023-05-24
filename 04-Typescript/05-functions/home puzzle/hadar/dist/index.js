var x = prompt(" Write your gender:");
function gender(gender) {
    var i = "";
    if (gender === "male") {
        i = "Hello sir:)";
    }
    if (gender === "female") {
        i = "Hello Miss:)";
    }
    return "" + i;
}
var result = (gender(x));
document.write(result);
var y = prompt("give me a number");
var z = prompt("give me a number");
function numbers(y, z) {
    if (y > z) {
        return y;
    }
    return z;
}
var result2 = numbers(y, z);
console.log(result2);
