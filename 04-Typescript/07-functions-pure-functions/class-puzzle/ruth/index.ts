const num1: number = 16;
const num2: number = 4;
const sing: string = "*";
// const res: number | undefined = calculate(num1, sing, num2);

// document.body.innerText = `${num1} ${sing} ${num2} = ${res}`;

function calculate(x: number, operator: string, y: number): number | undefined {
  try {
    if (isNaN(x) || isNaN(y) || (operator != "/" && operator != "*"))
      throw new Error("input is not available");

    if (operator === "/" && y != 0) {
      return x / y;
    }
    return x * y;
  } catch (error) {
    console.error(error);
    return;
  }
}
