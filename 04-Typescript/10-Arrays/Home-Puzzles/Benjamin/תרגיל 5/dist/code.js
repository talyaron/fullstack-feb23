// 2. in a given matrix (squre array of arrays) calculate the
// absuloute diffrence between the sum of the diagonals. example:
// const arr = [
//     [0,2,3],
//     [3,-1,-5],
//     [4,0,-8]
//     ]
// sum1 =  0 + (-1) + -8 = -9
// sum2 = 4 + (-1) + 3 = 6 
var arr = [
    [0, 2, 3],
    [3, -1, -5],
    [4, 0, -8]
];
function diagonalSum(array) {
    var arr1 = array[0];
    var arr2 = array[1];
    var arr3 = array[2];
    var sum1 = arr1[0] + arr2[1] + arr3[2];
    var sum2 = arr1[2] + arr2[1] + arr3[0];
    var string = "sum1= " + arr1[0] + "+" + arr2[1] + "+" + arr3[2] + "=" + sum1 + " and sum2= " + arr1[2] + "+" + arr2[1] + "+" + arr3[0] + "=" + sum2;
    return string;
}
console.log(diagonalSum(arr));
