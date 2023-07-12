




const number1 = Number(prompt("write first number"))
const number2 = Number(prompt("write second number"))


function tom(number1: number, number2: number): number | undefined {
if (isNaN(number1)) throw new Error("number1 is NaN");
if (isNaN(number2)) throw new Error("number2 is NaN");

    try {
        return number1+number2
    } catch (error) {
        console.error(error);
        return undefined;
    }

}
console.log(tom(number1,number2))