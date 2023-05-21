function num(a: number, b: number): number | undefined {
  try {
    if (isNaN(a) || isNaN(b)) throw new Error("Input is NaN");
    return a + b;
  } catch (error) {
    console.error(error);
  }
}

const a = prompt("Enter the first number:");
const b = prompt("Enter the second number:");

if (a && b) {
  const result = num(Number(a), Number(b));
  console.log(result);
} else {
  console.log("Invalid input.");
}
