// Create a function that calculates as follows:
// Get two numbers (a, b), and divide ("/") or multiply("*") according to the sign given to her.

function num(a: number, b: number, sign: string): number | undefined{
    try {
        if(isNaN(a || b)) throw new Error("failed")
        if("*" === sign){
            return a*b
        }
        if("/" === sign){
            if(b === 0)throw new Error("you cannot devide by 0")
            return a/b
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

const a = Number(prompt("enter number one"));
const c = prompt("enter / or *")
const b = Number(prompt("enter number two"));


console.log(num(a,b,c));