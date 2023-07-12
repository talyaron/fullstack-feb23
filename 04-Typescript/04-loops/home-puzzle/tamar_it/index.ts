document.write("hello from file");
console.log("hello");

//ex'1:

for (let x = 99 ; x>0 ; x--){
    console.log(`${x} Bottles of Beer on the wall. take one down pass it around,
     and ${x-1} bootle of beer on the wall..`);
}

//ex'2:

let num:number = 10;
let sum:number = 0;

for (let i = 1 ; i<=num ; i++){
    sum = sum + i;
    console.log(sum);
}

//ex'3:

let num1:number = 10;
let num2:number = 5;
let sum1:number = 0;
let sum2:number = 0;

for(let j=0; j<num2 ; j++){
    for (let i = 1 ; i<=num ; i++){
        sum1 = sum1 + i;
    }
    sum2 = sum2 + sum1; 
}




