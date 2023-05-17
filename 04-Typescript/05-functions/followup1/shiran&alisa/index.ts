function multiplication(a:number,b:number)
{
    return a*b;
}

const result = multiplication(5,4);
console.log(result);

function MultiplicationTable()
{
   /* program to generate a multiplication table
upto a range */


debugger;
for(let j = 1; j<= 10; j++)
    for(let i = 1; i <= 10; i++) {
        const result = i * j;
        console.log(`${result}`);
    }
}

MultiplicationTable();