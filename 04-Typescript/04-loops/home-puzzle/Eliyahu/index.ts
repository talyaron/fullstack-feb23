
const n = prompt("הכנס מספר סכום");
const m = prompt("הכנס מספר כפל");
const sum = Number(n);
const multiply = Number(m);
let x = 0
let y = 0

for (let j = 1; j <= multiply; j++) {



    for (let i = 1; i <= sum; i++) {

        x = x + i


    }
    y = y + x
    x = 0
    if (j === multiply) {
        document.write(`(1+2+...+ ${sum})x${multiply}=${y}`)

    }
}

