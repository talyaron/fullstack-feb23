// Hard - 1
const numbersArray = [1,2,3,6,5,3,1,4,6,8,4,6,9,2,1]
const indexCount = new Array(10);
let cnt=0;
for(let i = 0 ; i < 10; i++){
    for(let j = 0; j < numbersArray.length; j++){
        if(numbersArray[j] == i)
        cnt++;
    }
    indexCount[i] = cnt;
    cnt = 0;
}

console.log(numbersArray)
console.log(indexCount)

// Hard - 2
const arr = [
    [0,2,3],
    [3,-1,-5],
    [4,0,-8]
    ]

    console.log(arr[0][0] + arr[1][1] + arr[2][2])
    console.log(arr[0][2] + arr[1][1] + arr[2][0])
    console.log(Math.abs((arr[0][0] + arr[1][1] + arr[2][2])-(arr[0][2] + arr[1][1] + arr[2][0])))

 
// Hard - 3    
const arr2 = [1,2,3,4,3,2,1,5,5]

for(let i = 0 ; i < arr2.length; i++){
    let flag = false;
    for(let j = i+1; j < arr2.length; j++){
        if(arr2[j] == arr2[i]){
            flag = true;
            break;
        }
    }
    if(!flag){
        console.log(arr2[i])
        break;
    }
    else(
        flag = false
    )
}