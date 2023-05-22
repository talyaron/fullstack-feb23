const gender: string | null = prompt("what is your gender?");
const height: number = Number(prompt(`what is your height?`));
console.log(averageHeight(gender, height));

function averageHeight(gender, height): undefined | number | string {
  try {
    if ((typeof gender || typeof height) === null)
      throw Error(`you must enter text`);
    const averageMalesHeight = 175;
    const averageFemalesHeight = 165;
    let sign = ``;
    if (gender === (`female` || `woman` || `girl`)) {
      if (height - averageFemalesHeight > 0) {
        sign = `+`;
      }
      return `your height is ${
        height - averageFemalesHeight
      } from average height`;
    }
    if (height - averageMalesHeight > 0) {
      sign = `+`;
    }
    return `your height is ${
      sign + (height - averageMalesHeight)
    } from average height`;
  } catch (error) {
    console.error();
    return error;
  }
}
