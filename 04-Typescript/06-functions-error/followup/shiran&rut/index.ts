
const x = Number(prompt("give me a number 1"));
const y = Number(prompt("give me a number 2"));

const ans: boolean | undefined=checkIfNumber(x,y);

if(ans) console.log(`${x}, ${y} are a Numbers`);
    
else console.log(`inupt is NOT a Numbers`);

function checkIfNumber(num1: number , num2 :number):boolean
{
    debugger;
    try {

   if (isNaN(num1) || isNaN(num2) ) throw new Error("input is NaN");
  
   return true
        
    } catch (error) {
        console.error(error);
        return false
        
    }
}

