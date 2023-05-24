function reverseText(str) {
    var reversedStr = "";
    if (str == null) {
        return "Input is not valid";
    }
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
var userStr = prompt("Enter text");
console.log(reverseText(userStr));
