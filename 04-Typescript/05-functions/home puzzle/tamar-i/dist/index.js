//1
function hello(jander) {
    console.log(jander);
    if (jander == 'mail') {
        return ("Hello sir, ");
    }
    else {
        if (jander == 'female') {
            return ("Hello miss, ");
        }
        else
            return ("hello, ");
    }
}
var jander = prompt("what is your jander?");
document.write(hello(jander));
//2
function max(num1, num2) {
    console.log("max-numbers: " + num1 + ", " + num2);
    if (num1 > num2)
        return num1;
    else
        return num2;
}
var num1 = Number(prompt("please enter the first number"));
var num2 = Number(prompt("please enter the srcond number"));
document.write("the bigger number is " + max(num1, num2) + ". ");
//3
function min(num1, num2) {
    console.log("min-numbers: " + num1 + ", " + num2);
    if (num1 < num2)
        return num1;
    else
        return num2;
}
function sortArraymintomax(arr, lenght) {
    console.log("lenght=" + lenght);
    var big = 0;
    for (var i = 0; i < (lenght - 1); i++) {
        big = max(arr[i], arr[i + 1]);
        arr[i] = min(arr[i], arr[i + 1]);
        arr[i + 1] = big;
        console.log("i=" + i + ", arr[" + i + "]=" + arr[i] + ", big=" + big);
    }
    return arr;
}
var lenght = Number(prompt("enter the length of your array"));
function getArray(lenght) {
    var arr = [0];
    for (var i = 0; i < lenght; i++) {
        arr[i] = Number(prompt("enter a number"));
    }
    console.log(arr);
    return arr;
}
var arr = getArray(lenght);
document.write("the sort array is " + sortArraymintomax(arr, lenght));
