// for (let lolaa = 1; lolaa <= 18; lolaa += 3) {
//     console.log(lolaa);
//   }
// for(let iii = 1; iii <= 100; iii++){
//     if(!(iii % 7 === 0)){
//         console.log('%c' + iii + 'Boom', 'background-color: blue; color: red;');
//     }
// }
for (var iii = 1; iii <= 100; iii++) {
    if (iii % 7 === 0 || iii.toString().includes("7")) {
        console.log("Boom!");
    }
    else {
        console.log(iii);
    }
}
