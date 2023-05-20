const x = Number(prompt("Enter a number"))
const y = Number(prompt("Enter a second number"))
function whoIsBigger (x: Number, y: Number) {
    if(x>y){
       return x 
    }

    else if(x===y){
        return x=y
    }

    else{
        return y
    }
}

console.log(whoIsBigger(x, y))