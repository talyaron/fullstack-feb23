
function calculate(num1:number,op:string|null ,num2:number):number | undefined{
    try {
        if(isNaN(num1) || isNaN(num2))throw new Error("Not a number");
        if(op !== "/" && op !== "*" && op !== "+" && op !== "-")throw new Error("Not one of the calculate operations")
        switch(op){
            case "/": if(num2 == 0)throw new Error("Can't divide 0")
                return num1/num2;
            case "*": return num1*num2;
            case "+": return num1+num2;
            case "-": return num1-num2;   
        }
        } catch (error) {
        console.error(error)
        return undefined;
    }
}

const a = Number(prompt("Insert first number:"))
const operation:string|null= prompt("Insert mathmatical opertation:")
const b = Number(prompt("Insert second number:"))
const res = calculate(a,operation,b)
document.write(`${a} ${operation} ${b} = ${res}`);

