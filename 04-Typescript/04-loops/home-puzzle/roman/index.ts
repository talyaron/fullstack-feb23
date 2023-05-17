// first

// for (let x=100;x>=1;x--){
//     console.log(`${x} Bottles of Beer on the wall. take one down pass it around, and ${x-1} bootle of beer on the wall.`)
// }

//second

// let y = 0, sum = 0,s=0;;
// while (y < 20) {
//     y++;
//     sum = sum + y;
//     s += y + " + ";
//     let s2 = s.slice(0,-2)

// }
// console.log(s2.slice(1.0) +"="sum)

let y = 0, sum = 0,s=0;;
while (y < 50) {
    y++;
    sum = sum + y;
    s += y+ " + ";
    let s2 = s.slice(0,-2)
    for(i=0;i<=y;i++){
        let multi = i*sum;
        console.log( s2 "=" sum "*" i "=" multi)
    }

}
// console.log(s2.slice(1.0) +"="sum)
// console.log(sum * 5)