var Numbers = [17, 10, 45, 21, 48, 65, 78, 23];
var big = 0;
debugger;
function BigggertoSmallest(arr_Num) {
    for (var j = 0; j < arr_Num.length; j++) {
        for (var i = 0; i < arr_Num.length; i++) {
            if (arr_Num[i] > arr_Num[i++]) {
                big = arr_Num[i];
                arr_Num[i] = arr_Num[i++];
                arr_Num[i++] = big;
            }
        }
    }
}
BigggertoSmallest(Numbers);
console.log(Numbers);
