// for(let x = 99; x>0;x--){
//     let y = x-1
//     console.log(`${x} Bottles of Beer on the wall. take one down pass it around, and ${y} bootle of beer on the wall`);
// }
var num = prompt("choose a number:");
var x = prompt("choose a number:");
var sum = 0;
for (var y = 1; y <= x; y++) {
    for (var y_1 = 0; y_1 <= num; y_1++) {
        sum = sum + y_1;
    }
}
console.log("1+2+3...+" + num + "*" + x + "=" + sum);
