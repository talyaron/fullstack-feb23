const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

//creatng rows of the board
for (let i = 0; i < 8; i++){
    const rowBoard = document.createElement('div');
    rowBoard.classList.add('row');

//creathing the color of the boxes
    for (let j = 0; j < 8; j++){
        const box = document.createElement('div');
        box.classList.add('wrapper__box');
        box.classList.add((i + j) % 2 === 0 ? 'wrapper__box--white' : 'wrapper__box--black');
        rowBoard.append(box);
    }
    wrapper.append(rowBoard)
}

document.body.append(wrapper)



const pawn = document.querySelector('.wrapper__pawn') as HTMLDivElement;
document.addEventListener('keyup', (event: KeyboardEvent) => {
    //if arrow up go up. if arrow down go down...
    console.log(event);

    switch (event.key) {
        case 'ArrowUp':
            pawn.style.top = `${pawn.offsetTop - 120}px`;
            break;
        case 'ArrowDown':
            pawn.style.top = `${pawn.offsetTop + 120}px`;
            break;
        case 'ArrowLeft':
            pawn.style.left = `${pawn.offsetLeft - 120}px`;
            break;
        case 'ArrowRight':
            pawn.style.left = `${pawn.offsetLeft + 120}px`;
            break;

    }
});


// if (wrapper){
//     // for (let k = 0; k < 8; k++){
        
        
//         for(let i=0; i < 64 ; i++){
//                 const div = document.createElement('div') as HTMLDivElement;
//             const boardRow = document.createElement('div')
//             div.append(boardRow);
            
//             wrapper.append(boardRow);
//             if(i % 2===0){
//                 boardRow.classList.add('wrapper__box')
//                 boardRow.classList.add('wrapper__box--white')
//             } else {
//                 boardRow.classList.add('wrapper__box')
//                 boardRow.classList.add('wrapper__box--black')
//             }
//         }
//         // for(let j=0; j < 4; j++){
//         //     const boardColumn = document.createElement('div')
//         //     div.append(boardColumn)
    
//         //     if(j % 2===0){
//         //         boardColumn.classList.add('wrapper__box')
//         //         boardColumn.classList.add('wrapper__box--white')
//         //     } else {
//         //         boardColumn.classList.add('wrapper__box')
//         //         boardColumn.classList.add('wrapper__box--black')
//         //     }
//             // div.append(boardColumn);
//             // wrapper.append(boardColumn);
//         }
//         wrapper.append(div);
//     }
// }



























// const a = new Array(4);
// for (let i = 0; i < 4; i++) {
//   a[i] = new Array(4);
//   for (let j = 0; j < 4; j++) {
//     a[i][j] = `[${i}, ${j}]`;
//   }
// }
// console.log(a);

// const myArray = ["Wind", "Rain", "Fire"];
// const list = myArray.join("-"); // list is "Wind - Rain - Fire"
// console.log(list);
// const myArray = ["1", "2", "3"];
// const first = myArray.shift();
// // myArray is now ["2", "3"], first is "1"
// console.log(myArray);
// myArray.pop()
// console.log(myArray);







