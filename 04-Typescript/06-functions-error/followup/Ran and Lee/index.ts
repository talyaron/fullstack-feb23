const num1 = Number (prompt("הכנס בבקשה מספר 1:"));
const num2 = Number (prompt("הכנס בבקשה מספר 2:"));
let sum: number=0;

function TwoNumber (num1:number, num2:number) :number | undefined {
    try {
        if(isNaN(num1) || isNaN(num2)) throw new Error("input is Nan");
        sum= num1 + num2;
        if(sum>20 || sum<5) throw new Error ("input out of range of sum");
        return sum; 
    } catch (error) {
        console.error(error);
        return undefined;
        
    }
}

let sum1= TwoNumber(num1,num2)
console.log(sum1)