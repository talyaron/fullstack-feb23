var temp = 0;
// for(let i=0; i<100; i++){
//     if(i%7==0){
//         console.log( i + " - Boom");
//     }else if(i>=10){
//         temp = i/10;
//         if(i % 10 == 7){
//             console.log(i + " - Boom");
//         }else if(temp == 7){
//             console.log(i + " - Boom");
//         }
//     }
// }
for (var i = 0; i < 10000; i++) {
    if (i % 7 == 0) {
        console.log(i + " - Boom");
    }
    else {
        /* for loop */
        // for(let x = i; x > 0; x=x/10){
        //     if(x % 10 == 7){
        //         console.log( i + " - Boom");
        //     }
        // }
        /* while loop */
        var y = i;
        while (y > 0) {
            if (y % 10 == 7) {
                console.log(i + " - Boom");
            }
            y = y / 10;
        }
    }
}
