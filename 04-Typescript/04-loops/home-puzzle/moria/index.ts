const number = 5;
const j = 3;
let sum = 0;

for (let n = 0; n < number; n++) {
    console.log(`${sum} = ${number} + ${n}`);
    sum = number + n
    while (n < number) {
        console.log(`* ${j}`);
    }

}
