"use strict";

//1
function hello(jander) {
  if (jander == 'mail') {
    return "Hello sir, ";
  } else {
    if (jander == 'female') {
      return "Hello miss, ";
    } else return "hello, ";
  }
}

var jander = prompt("what is your jander?");
document.write(hello(jander)); //2

function max(num1, num2) {
  if (num1 > num2) return num1;else return num2;
}

var num1 = Number(prompt("please enter the first number"));
var num2 = Number(prompt("please enter the srcond number"));
document.write("the bigger number is " + max(num1, num2) + ". "); //3

function min(num1, num2) {
  if (num1 < num2) return num1;else return num2;
}

function sortArray(arr, lenght) {
  var big = [0];
  big[lenght - 1] = min(arr[0], arr[1]);

  for (var i = 0; i < lenght - 1; i++) {
    big[i] = max(arr[i], arr[i + 1]);
    big[lenght - 1] = min(big[lenght - 1], min(arr[i], arr[i + 1]));
  }

  return big;
}

var lenght = Number(prompt("enter the length of your array"));

function getArray(lenght) {
  var arr = [0];

  for (var i = 0; i < lenght; i++) {
    arr[i] = Number(prompt("enter a number"));
  }

  return arr;
}

var arr = getArray(lenght);
document.write("the sort array is " + sortArray(arr, lenght));