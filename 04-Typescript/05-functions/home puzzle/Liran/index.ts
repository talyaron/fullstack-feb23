


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

let numberArray: number[] = [4,85,24,98,3,1,0,4,-5,45,-9,43,-90];
document.write(`original array: ${numberArray.toString()}`);
sortArray(numberArray);
document.write(`<br>sorted array: ${numberArray.toString()}`);
