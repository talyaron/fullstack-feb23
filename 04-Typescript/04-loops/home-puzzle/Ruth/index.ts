//-----------1-----------

let getBottleNum: string | null = prompt(
  "How much time you want annoying me with bottle?",
);

if (getBottleNum) {
  let bottleNum: number = parseInt(getBottleNum);
  let strBottles: string = "";

  if (!isNaN(bottleNum)) {
    for (bottleNum; bottleNum >= 0; bottleNum--) {
      if (bottleNum > 1) {
        strBottles += `${bottleNum} Bottles of Beer on the wall.\n take one down pass it around, and `;
      }
      if (bottleNum == 1) {
        strBottles += `${bottleNum} Bottles of Beer on the wall.\n  `;
      }
      if (bottleNum == 0) {
        strBottles += `no more Bottles of Beer on the wall!!`;
      }
    }
    console.log(strBottles);
  } else {
    alert("you not enter a number, please refresh and enter correct params");
  }
}

//------------2------------

const getSumTo: string | null = prompt(
  "Enter a number to get the sum up to it",
);

if (getSumTo) {
  const sumTo: number = parseInt(getSumTo);
  if (!isNaN(sumTo)) {
    let sum: number = 0;

    for (let i = 1; i <= sumTo; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    alert("you not enter a number ,please refresh and enter correct params");
  }
}

//----------3------------

const getX: string | null = prompt("enter number to first variable");
const getY: string | null = prompt("enter number to seconde variable");

if (getX && getY) {
  const x: number = parseInt(getX);
  const y: number = parseInt(getY);

  if (!isNaN(x) && !isNaN(y)) {
    let sum__2: number = 0;
    for (let i = 1; i <= sum__2; i++) {
      sum__2 += i;
    }
    console.log(sum__2 * y);
  } else {
    alert("x or y is not numbers! please refresh and enter correct params");
  }
}
