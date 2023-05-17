const a:number = Number(prompt('הכנס מספר שלם'));
const b: number = 3;

console.log(mult(a,b));


function mult (a:number,b:number):number{
    const multi:number = a * b;
    return multi;
}