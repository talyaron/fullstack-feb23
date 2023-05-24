var functionNumber = 1;
switch (functionNumber) {
    case 1:
        var num = prompt("Reverse number:");
        document.write("Write a JavaScript function that reverses a number.<br>");
        var resFun1 = reverses(num);
        if (resFun1 === undefined) {
            document.write("Error, see console");
        }
        else {
            document.write("Original number: " + num + ".<br>");
            document.write("Revers number: " + resFun1 + ".<br>");
        }
        break;
    case 2:
        var strIn = prompt("Palindrom test, Enter string:");
        document.write("Write a JavaScript function that checks whether a passed string is a palindrome or not?.<br>");
        var resFun2 = palindrom(strIn);
        if (resFun2 === undefined) {
            document.write("Error, see console");
        }
        else {
            document.write("Original string: " + strIn + ".<br>");
            document.write("The above string is palindrom?: " + resFun2 + " .<br>");
        }
        break;
    case 3:
        var strIn = prompt("String combination, Enter string:");
        document.write("Write a JavaScript function that generates all combinations of a string.<br>");
        var resFun3 = stringCombination(strIn);
        if (resFun3 === undefined) {
            document.write("Error, see console");
        }
        else {
            document.write("Original string: " + strIn + ".<br>");
            document.write("The above string is palindrom?: " + resFun3 + " .<br>");
        }
        break;
    case 4:
        var alphabeticaIn = prompt("Alphabetical order, Enter string:");
        document.write("Write a JavaScript function that returns a string that has letters in alphabetical order.<br>");
        var resFun4 = alphabeticalOrder(alphabeticaIn);
        if (resFun4 === undefined) {
            document.write("Error, see console");
        }
        else {
            document.write("Original string: " + alphabeticaIn + ".<br>");
            document.write("The above string is palindrom?: " + resFun4 + " .<br>");
        }
        break;
    case 5:
        var maxLenIn = prompt("Longest word, Enter string:");
        document.write("Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.<br>");
        var resFun5 = longestWord(maxLenIn);
        if (resFun5 === undefined) {
            document.write("Error, see console");
        }
        else {
            document.write("Original string: " + maxLenIn + ".<br>");
            document.write("The longest word in the string is: " + resFun5 + " .<br>");
        }
        break;
    default: break;
}
function reverses(numberString) {
    try {
        if (numberString === null || numberString === "")
            throw new Error("Missing input");
        var numberNum = Number(numberString);
        if (isNaN(numberNum))
            throw new Error("Not a number");
        var newNumber = 0;
        var remainder = 0;
        debugger;
        while (numberNum > 0) {
            remainder = numberNum % 10;
            newNumber = newNumber * 10 + remainder;
            numberNum = Math.floor(numberNum / 10);
        }
        return newNumber;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function palindrom(str) {
    try {
        if (str === null || str === "")
            throw new Error("Missing input");
        var strLength = str.length;
        for (var i = 0, j = strLength - 1; i <= j; i++, j--) {
            if (str[i] !== str[j]) {
                return false;
            }
        }
        return true;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function stringCombination(str) {
    try {
        if (str === null || str === "")
            throw new Error("Missing input");
        var strLength = str.length;
        var combinatiosString = new Array();
        var index = 0;
        for (var i = 0; i < strLength; i++) {
            var tempStr = "";
            for (var j = i; j < strLength; j++) {
                tempStr += str[j];
                combinatiosString[index] = tempStr;
                index++;
            }
        }
        return combinatiosString;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function alphabeticalOrder(str) {
    try {
        if (str === null || str === "")
            throw new Error("Missing input");
        var strLength = str.length;
        var alphabeticalString = "";
        for (var i = 97; i <= 122; i++) {
            var letter = String.fromCharCode(i);
            for (var j = 0; j < strLength; j++) {
                if (str[j] === letter) {
                    alphabeticalString += str[j];
                }
            }
        }
        return alphabeticalString;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function longestWord(str) {
    try {
        if (str === null || str === "")
            throw new Error("Missing input");
        var strLength = str.length;
        var tempString = "";
        var index = 0;
        var dividedString = new Array();
        for (var i = 0; i < strLength; i++) {
            if (str[i] == " ") {
                dividedString[index] = tempString;
                tempString = "";
                index++;
            }
            else if (i == strLength - 1) {
                tempString += str[i];
                dividedString[index] = tempString;
            }
            else {
                tempString += str[i];
            }
        }
        var maxLen = 0;
        var maxIndex = void 0;
        for (var i = 0; i < dividedString.length; i++) {
            if (dividedString[i].length > maxLen) {
                maxLen = dividedString[i].length;
                maxIndex = i;
            }
        }
        return dividedString[maxIndex];
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
