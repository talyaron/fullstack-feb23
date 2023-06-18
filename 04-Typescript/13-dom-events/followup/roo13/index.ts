function add (num1:number, num2:number):number | undefined {

    try{
        if (isNaN(num1) || isNaN(num2)) throw new Error("error. not a number.");
        return (num1+num2); 

    } catch (error){
        console.error(error);
        return undefined;
    }

    
}

const num1:number = Number(prompt("insert number one"));
const num2:number = Number(prompt("insert number two"));

document.write(`the add of your numbers is ${add(num1, num2)}`);