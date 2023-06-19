const x = Number(prompt("give me a number between 1 and 10"));

function multyByTenBetweenZeroAndTen(number: number): number | undefined {
  try {
    if (isNaN(number)) throw new Error("input is NaN");

    if (number<1 || number >10) throw new Error("input out of range. Input should be between 1 and 10");

    return number * 10;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}


function aa():number|undefined{
    try {
       // the function is here...
       return 1
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

