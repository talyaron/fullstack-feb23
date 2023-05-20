const numone = prompt("isert your first number")
const numtwo = prompt("isert your second number")
let x: number=0
let y: number=0
if (numone !== null) {
    x = parseInt(numone)
}
if (numtwo !== null) {
    y = parseInt(numtwo)
}

function max(i:number, t:number):number{
    if (i>t){
        return (i)
    }
    else{
        return (t)
    }
}
console.log(max(x,y))

