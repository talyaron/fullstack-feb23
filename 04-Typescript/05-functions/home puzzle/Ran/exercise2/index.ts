let num1 =   Number (prompt("הכנס מספר בבקשה:"));
let num2 = Number (prompt("הכנס מספר בבקשה:"));
let x;
let y;

function bigger (x, y)  {

    if (num1>num2 ) {
        return (`the bigger number is: ${num1}`)
    }
    else if (num1<num2) {
        return (`the bigger number is: ${num2}`)
    }
    else {
        return ("same same")
    }
}

const big = bigger(num1,num2)

console.log (big)