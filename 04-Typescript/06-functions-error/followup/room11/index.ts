var num = Number(prompt("enter first number"));
var num2 = Number(prompt("enter second number"));

function checkNum(num:number,num2:number){
    try {
        if( typeof num === 'string') throw new Error ('input is not a number (string)');
        
        console.log(num , num2);
        return `numbers ${num} and ${num2} are numbers`

        
    } catch (error) {
        console.error(error)
        
    }
}

console.log(checkNum(num,num2));