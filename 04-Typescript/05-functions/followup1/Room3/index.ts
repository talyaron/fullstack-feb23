const num1= Number(prompt("תכניס בבקשה מספר 1") )|| 0 ;
const num2= Number(prompt("תכניס בבקשה מספר 2") )|| 0 ;


let x= 0 ;
let y=0;
let multiply1=0;


const result= Multiply (num1, num2);
console.log(result);
const num3= Number(prompt("תכניס בבקשה מספר 2") )|| 0 ;
const num4= Number(prompt("תכניס בבקשה מספר 2") )|| 0 ;

const result1= Multiply (num3, num4);
console.log(result1);

function Multiply (y,x)  {
    multiply1= y*x;
    return multiply1;
}