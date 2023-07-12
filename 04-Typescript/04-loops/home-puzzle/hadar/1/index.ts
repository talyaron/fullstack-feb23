
// for(let x = 99; x>0;x--){
//     let y = x-1
//     console.log(`${x} Bottles of Beer on the wall. take one down pass it around, and ${y} bootle of beer on the wall`);
// }

let num= prompt("choose a number:");
let x= prompt("choose a number:")
let sum = 0;
for(let y=1; y<=x; y++){
    for( let y=0; y<=num; y++){
        sum= sum+y
    }
}
console.log(`1+2+3...+${num}*${x}=${sum}`)

