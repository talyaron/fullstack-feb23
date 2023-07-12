
function whoIsBigger(a:number , b:number):number{
    // return a>b?a:b;
    if(a>b){
        return a;
    }
    return b;
}

function sortArray(arr:number[]){
    let tempArray:number[]= new Array(arr.length);
    let temp:number = 0;
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j< arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

/* main */

let numberArray: number[] = [4,85,24,98,3,1,0,4,-5,45,-9,43,-90];
const firstNum = 81;
const secondNum = 12;
let maxVal;
document.write(`original array: ${numberArray.toString()}<br>`);
sortArray(numberArray);
document.write(`<br>sorted array: ${numberArray.toString()}<br>`);
maxVal = whoIsBigger(firstNum,secondNum);
document.write(`<br>The max between ${firstNum} and ${secondNum} is: ${maxVal}<br>`)