const num:number = 3409078;

function reverseNumber(number: number) {
  try {
    if (isNaN(number)) {
      throw new Error("input isn't a number");
    }
    let newNumberStr: string = "";
    let temp:number;
    for (let i = 0; number > 0; i++) {
      temp = number % 10;
      newNumberStr += temp.toString();
      number = Math.floor(number / 10);
    }
    return newNumberStr;
  } catch (error) {
    console.error(error);
  }3
}

console.log(reverseNumber(num));
