const x = prompt (" Write your gender:");

 function gender (gender:string | null): string {
    let i = ""
    if (gender === "male") {
    i = "Hello sir:)" 
    } 
    if (gender === "female") {
     i = "Hello Miss:)" 
    }
    return `${i}`
    }

let result= (gender(x));
document.write(result);

const y:number= prompt("give me a number")
const z:number= prompt("give me a number")

function numbers (y:number,z:number): number {
    if(y>z){
        return y;
    }
    return z;
   }

const result2= numbers(y,z)
console.log(result2)



