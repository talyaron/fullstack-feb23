const number = 5;
const j = 3;
let sum = 0;
let s = 1;

for (let n = 0; n < number; n++) {
    sum = number + n
    s--;
    while (s < 1) {
        console.log(`${sum} = ${number} + ${n} * ${j}`);
        sum = (number + n) * j;
        s++;
    }

}
