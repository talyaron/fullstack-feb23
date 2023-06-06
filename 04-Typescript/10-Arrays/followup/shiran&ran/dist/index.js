var arr = [10, 20, 30, 40, 45, 50, 55, 60];
var arr2 = [130, 230, 330, 430, 453, 503, 553, 603];
var arr3 = arr.concat(arr2);
var arr4 = arr.map(function (elm) { return elm * 150000; });
arr4.forEach(function (elm) {
    console.log(elm);
});
arr.forEach(function (elm) {
    console.log(elm);
});
//     arr.forEach((elm:number)=>{
//         if(elm>50)
//             console.log(elm)
//   } )
//   arr.pop();
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
//   arr.push(100000)
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
// arr.shift();
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
//   arr.unshift(10);
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
