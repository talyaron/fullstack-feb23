// Hard - 1
var numbersArray = [1, 2, 3, 6, 5, 3, 1, 4, 6, 8, 4, 6, 9, 2, 1];
var indexCount = new Array(10);
var cnt = 0;
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < numbersArray.length; j++) {
        if (numbersArray[j] == i)
            cnt++;
    }
    indexCount[i] = cnt;
    cnt = 0;
}
console.log(numbersArray);
console.log(indexCount);
// Hard - 2
var arr = [
    [0, 2, 3],
    [3, -1, -5],
    [4, 0, -8]
];
console.log(arr[0][0] + arr[1][1] + arr[2][2]);
console.log(arr[0][2] + arr[1][1] + arr[2][0]);
console.log(Math.abs((arr[0][0] + arr[1][1] + arr[2][2]) - (arr[0][2] + arr[1][1] + arr[2][0])));
// Hard - 3    
var arr2 = [1, 2, 3, 4, 3, 2, 1, 5, 5];
for (var i = 0; i < arr2.length; i++) {
    var flag = false;
    for (var j = i + 1; j < arr2.length; j++) {
        if (arr2[j] == arr2[i]) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        console.log(arr2[i]);
        break;
    }
    else
        (flag = false);
}
