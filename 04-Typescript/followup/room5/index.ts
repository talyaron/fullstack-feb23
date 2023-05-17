

console.log(Mul(4,5))
console.log(Add(4,5))
console.log(Div(4,5))
console.log(Sub(4,5))


function Mul(a:number , b:number):number{
    return a*b;
}

function Add(a:number , b:number):number{
    return a+b;
}

function Div(a:number , b:number):number{
    if(b != 0){
        return a/b;
    }

    return 0;
}

function Sub(a:number , b:number):number{
    return a-b;
}