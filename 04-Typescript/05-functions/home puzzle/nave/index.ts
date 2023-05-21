const a = Number (prompt("insert a number"))
const b = Number(prompt("insert a second number"))
function writeTheBigest (a: Number, b: Number) {
    if(a>b){
       return a 
    }

    else if(a===b){
        return a=b
    }

    else{
        return b
    }
}

console.log(writeTheBigest(a, b))