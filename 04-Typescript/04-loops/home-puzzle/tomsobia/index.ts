// 1. create a loop which says "99 Bottles of Beer on the wall. take one down pass it around, and 98 bootle of beer on the wall"... untill you get to zero bottles.

// 2. calculate with a varibal and a loop how much is 1+2+3+...+n

// 3. calculate with loop inside a loop, how much is (1+2+3+...+n) multply by j

// learn about while loop 


// 1

// for(let x = 99;x>0;x--){
// let y =x-1
// document.body.innerHTML= `${x}Bottles of Beer on the wall. take one down pass it around, and ${y} bootle of beer on the wall`
// }

// let song = "";

// for (let x = 99; x > 0; x--) {
//   let y = x - 1;
//   song += `${x} Bottles of Beer on the wall. Take one down, pass it around, and ${y} bottle of beer on the wall.<br>`;
// }

// document.body.innerHTML = `<div>${song}</div>`;


const tom:any = prompt("give me number")
let y=0
for(let x=0;x<=tom;x++){
  y+=x
}console.log(`1+2+3.....${tom}=${y}`)




