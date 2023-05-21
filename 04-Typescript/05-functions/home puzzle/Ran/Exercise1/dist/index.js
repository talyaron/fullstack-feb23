var gender = String(prompt("הכנס בבקשה את המגדר שלך:"));
function identity(x) {
    if (x === "male") {
        var gender_1 = "hello sir";
        return (gender_1);
    }
    else if (x === "female") {
        gender = "hello miss";
        return (gender);
    }
    else {
        return ("hello");
    }
}
var y = identity(gender);
console.log(y);
