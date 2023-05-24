
let functionNumber = 2;
switch (functionNumber) {
    case 1:
        var num: string | null = prompt("Reverse number:");
        document.write(`Write a JavaScript function that reverses a number.<br>`)
        const resFun1 = reverses(num);
        if(resFun1 === undefined){
            document.write(`Error, see console`)
        }
        else{
            document.write(`Original number: ${num}.<br>`)
            document.write(`Revers number: ${resFun1}.<br>`)
        }

        break;
    case 2: 
        var strIn: string | null = prompt("Palindrom test, Enter string:");
        document.write(`Write a JavaScript function that checks whether a passed string is a palindrome or not?.<br>`)
        const resFun2 = palindrom(strIn);
        if(resFun1 === undefined){
            document.write(`Error, see console`)
        }
        else{
            document.write(`Original string: ${strIn}.<br>`)
            document.write(`The above string is palindrom?: ${resFun2} .<br>`)
        }
        break;

    case 3:
        var strIn: string | null = prompt("String combination, Enter string:");
        document.write(`Write a JavaScript function that generates all combinations of a string.<br>`)
        const resFun3 = stringCombination(strIn);
        if(resFun1 === undefined){
            document.write(`Error, see console`)
        }
        else{
            document.write(`Original string: ${strIn}.<br>`)
            document.write(`The above string is palindrom?: ${resFun3} .<br>`)
        }
        break;

    case 4:
        var alphabeticaIn: string | null = prompt("Alphabetical order, Enter string:");
        document.write(`Write a JavaScript function that returns a string that has letters in alphabetical order.<br>`)
        const resFun4 = alphabeticalOrder(alphabeticaIn);
        if(resFun1 === undefined){
            document.write(`Error, see console`)
        }
        else{
            document.write(`Original string: ${alphabeticaIn}.<br>`)
            document.write(`The above string is palindrom?: ${resFun4} .<br>`)
        }

        break;

    case 5:
        var maxLenIn: string | null = prompt("Longest word, Enter string:");
        document.write(`Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.<br>`)
        const resFun5 = longestWord(maxLenIn);
        if(resFun1 === undefined){
            document.write(`Error, see console`)
        }
        else{
            document.write(`Original string: ${maxLenIn}.<br>`)
            document.write(`The longest word in the string is: ${resFun5} .<br>`)
        }

        break;

    default: break;
}


function reverses(numberString: string | null): number | undefined {
    try {
        if (numberString === null || numberString === "") throw new Error("Missing input")
        let numberNum = Number(numberString)
        if (isNaN(numberNum)) throw new Error("Not a number")
        let newNumber = 0;
        let remainder = 0;
        while (numberNum > 0) {
            remainder = numberNum % 10;
            newNumber = newNumber * 10 + remainder;
            numberNum = Math.floor(numberNum / 10);
        }
        return newNumber;

    } catch (error) {
        console.error(error)
        return undefined
    }
}

function palindrom(str: string | null): boolean {
    try {
        if (str === null || str === "") throw new Error("Missing input")
        const strLength = str.length
        for (let i = 0, j = strLength - 1; i <= j; i++, j--) {
            if (str[i] !== str[j]) {
                return false
            }
        }
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

function stringCombination(str: string | null): string[] | undefined {
    try {
        if (str === null || str === "") throw new Error("Missing input")
        const strLength = str.length
        let combinatiosString: string[] = new Array()
        let index = 0
        for (let i = 0; i < strLength; i++) {
            let tempStr = ""
            for (let j = i; j < strLength; j++) {
                tempStr += str[j];
                combinatiosString[index] = tempStr;
                index++
            }
        }
        return combinatiosString

    } catch (error) {
        console.error(error)
        return undefined
    }
}

function alphabeticalOrder(str: string | null): string | undefined {
    try {
        if (str === null || str === "") throw new Error("Missing input")
        const strLength = str.length
        let alphabeticalString: string = ""
        for (let i = 97; i <= 122; i++) {
            const letter: string = String.fromCharCode(i)
            for (let j = 0; j < strLength; j++) {
                if (str[j] === letter) {
                    alphabeticalString += str[j]
                }
            }
        }
        return alphabeticalString

    } catch (error) {
        console.error(error)
        return undefined
    }
}

function longestWord(str: string | null): string | undefined {
    try {
        if (str === null || str === "") throw new Error("Missing input")
        const strLength = str.length
        let tempString: string = ""
        let index = 0;
        let dividedString: string[] = new Array()
        for (let i = 0; i < strLength; i++) {
            if (str[i] == " ") {
                dividedString[index] = tempString
                tempString = ""
                index++
            }
            else if (i == strLength - 1) {
                tempString += str[i];
                dividedString[index] = tempString

            }
            else {
                tempString += str[i];
            }
        }
        let maxLen = 0;
        let maxIndex
        for (let i = 0; i < dividedString.length; i++) {
            if (dividedString[i].length > maxLen) {
                maxLen = dividedString[i].length;
                maxIndex = i;
            }
        }
        return dividedString[maxIndex]

    } catch (error) {
        console.error(error)
        return undefined
    }
}

