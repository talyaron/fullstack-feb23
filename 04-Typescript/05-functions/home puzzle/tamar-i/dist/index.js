//1
function hello(jander) {
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
    if (num1 > num2)
        return num1;
    else
        return num2;
}
var num1 = Number(prompt("please enter the first number"));
var num2 = Number(prompt("please enter the srcond number"));
document.write("the bigger number is " + max(num1, num2) + ". ");
//3
function sortArray(arr) {
    var big = [0];
    for (var i = 1; i < (arr.length); i++) {
        big[i - 1] = max(arr[i - 1], arr[i]);
    }
    return big;
}
function getArray() {
    var arr = [0];
    var i = 0;
    var num = Number(prompt("enter a number diffrent then 0"));
    while (num != 0) {
        arr[i] = num;
        i++;
        num = Number(prompt("enter the next number"));
    }
    return arr;
}
var arr = getArray();
document.write("the sort array is " + sortArray(arr));
