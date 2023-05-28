// let myAge = 24;
// let humanDogsRatio = 7;
// let myDogAge = myAge * humanDogsRatio
// console.log(myDogAge);


// let bounesPoint = 50;
//  bounesPoint = bounesPoint + 50
//  console.log(bounesPoint);
//  bounesPoint = bounesPoint -75 
//  console.log(bounesPoint);
//  bounesPoint = bounesPoint + 45
//  console.log(bounesPoint);
//  let lap1 = 33
//  let lap2 = 52 
//  let lap3 = 65
// function calculates ( ){
//     console.log(lap1 + lap2 + lap3);
    
// }
// calculates ()
let countEl: HTMLElement | null = document.getElementById("count-el")
console.log(countEl);

let count:number = 0 
function increment (): void {
    count = count + 1
    if (countEl) { 
    countEl.innerText = count.toString()
}
}