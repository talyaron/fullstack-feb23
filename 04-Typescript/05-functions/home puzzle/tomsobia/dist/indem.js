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
