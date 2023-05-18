
debugger
const x:number = Number (prompt('please enter a number'));


function factorial (a:number):number {
    let result = a;
    for (let i=a; i>1; i--) {
        result = result * (i-1)
    }
    return (result);
}

document.write(factorial (x).toString());