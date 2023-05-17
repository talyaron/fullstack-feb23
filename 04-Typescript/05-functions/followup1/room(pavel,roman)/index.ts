let a = (prompt("enter number","")),b = (prompt("enter number",""));

let result1 = multiplyNumbers(a,b);

console.log(result1);
document.write(`
<h1>rggdfgergergerg
${result1}
</h1>
`);


function multiplyNumbers (a:number, b:number){
    let result = a * b;
    return result;
}