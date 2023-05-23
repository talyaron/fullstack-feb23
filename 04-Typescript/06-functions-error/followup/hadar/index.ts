
const x = Number(prompt("give me a number"));
const y = Number(prompt("give me a number"));

function numbers(x: number, y: number): number | undefined {
  try {

    if (isNaN(x) || isNaN(y)) throw new Error("input is not a number");

  } catch (error) {
    console.error(error);
    return undefined;
  }
}

