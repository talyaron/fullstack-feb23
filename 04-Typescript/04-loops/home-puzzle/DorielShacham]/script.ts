const btnOne: HTMLButtonElement | null = document.querySelector("#taskOne > button");
const btnTwo: HTMLButtonElement | null = document.querySelector("#taskTwo > button");
const btnThree: HTMLButtonElement | null = document.querySelector(
  "#taskThree > button"
);

//button one
btnOne?.addEventListener("mouseover", (e) => {
  btnOne.style.transition = "0.3s";
  btnOne.style.opacity = "0.3";
});
btnOne?.addEventListener("mouseout", (e) => {
  btnOne.style.opacity = "1";
});

//button two
btnTwo?.addEventListener("mouseover", (ev) => {
  btnTwo.style.transition = "0.3s";
  btnTwo.style.opacity = "0.3";
});
btnTwo?.addEventListener("mouseout", (ev) => {
  btnTwo.style.opacity = "1";
});

//button three
btnThree?.addEventListener("mouseover", (eve) => {
  btnThree.style.transition = "0.3s";
  btnThree.style.opacity = "0.3";
});
btnThree?.addEventListener("mouseout", (eve) => {
  btnThree.style.opacity = "1";
});

//1. create a loop which says "99 Bottles of Beer on the wall. take one down pass it around, and 98 bootle of beer on the wall"... untill you get to zero bottles.
function taskOne() {
  for (let aaa: number = 100; aaa >= 0; aaa--) {
    //console.log(`${aaa} Bottles of beer on the wall`);
    document.write(`${aaa} Bottles of beer on the wall`.concat("<br>"));
  }
}
taskOne();

//2. calculate with a varibal and a loop how much is 1+2+3+...+n
function taskTwo() {
  let n: number = 10;
  let sum: number = 0;
  for (let i: number = 0; i <= n; i++) {
    //let prev = sum;
    sum += i;
    console.log(`${sum - i}  +  ${i}  = ${sum}`.concat("<br>"));
  }
}
taskTwo();

//3. calculate with loop inside a loop, how much is (1+2+3+...+n) multply by j
function taskThree() {
  let n: number = 10;
  let sum: number = 0;
  let j: number = 2;
  for (let i: number = 0; i <= n; i++) {
    //let prev = sum;
    sum += i;
    for(let a = 1; a <= n; a++){
      sum += i
    }
    
    document.write(`${sum - i} + ${i} = ${sum} * ${j} = ${sum * j} `.concat("<br>"));
  }
}
taskThree();
//learn about while loop 