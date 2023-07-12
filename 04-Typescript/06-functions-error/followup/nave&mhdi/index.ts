 const x = Number (prompt ("give me a number "));
 const y = Number (prompt ("give me a number "));
const result =  add(x,y) 
console.log(result);


 function add (number1: number, number2: number ): number | undefined {
    try {
      
      if (isNaN(number1)|| isNaN(number2)) throw new Error("input1 is NaN");
      return number1+number2;

      
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }