var type = prompt("what is your gender?");
function Hello(sug) {
    var gender = "";
    if (sug === "male") {
        gender = "Sir";
    }
    else {
        if (sug === "female") {
            gender = "Miss";
        }
    }
    return "Hello " + gender + " <br/>";
}
document.write(Hello(type));
var num1 = Number(prompt("הכנס מספר להשוואה"));
var num2 = Number(prompt("הכנס מספר נוסף להשוואה"));
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
document.write("The big number is " + (max(num1, num2)).toString() + "<br/>");
var nums = [];
var lng = Number(prompt("כמה מספרים יש במערך?"));
for (var z = 0; z < lng; z++) {
    var n = Number(prompt("הכנס מספר"));
    nums.push(n);
}
function order(arr) {
    var orderNums = [];
    for (var j = 0; j < arr.length; j++) {
        var x = 0;
        for (var i = 0; i < arr.length; i++) {
            if (x < arr[i]) {
                x = arr[i];
            }
        }
        arr[arr.indexOf(x)] = 0;
        orderNums.unshift(x);
    }
    return orderNums;
}
var result = (order(nums));
document.write("Here your array sort by order: " + (result.toString()));
