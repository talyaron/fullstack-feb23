function reverseText(str:string | null) {
    let reversedStr = "";
    if (str == null) {
        return "Input is not valid"
    }

    for (let i = str.length - 1; i>= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr
}

const userStr: string | null = prompt("Enter text")

console.log(reverseText(userStr))