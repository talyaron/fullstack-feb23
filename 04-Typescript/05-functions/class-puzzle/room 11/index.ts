const a = Number(prompt("הכנס מספר עצרת"));

function factorial(a:Number):Number{
    let j=a;
    let i=1;
    for (j>=1;j--;){
        i = i*j;

    }
    return (i)
}
const result = (factorial());
console.log(result)

