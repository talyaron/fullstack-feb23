const box = document.querySelector('#box') as HTMLDivElement;
// box.style.backgroundImage = 'url(./terror.png)';



// function ctrPrreesd(event){
//     if (event.key === 'Control') {
//         console.log("test")
        
//     }else console.log("bad")
    
// }
let i=10;
let newi=20
document.addEventListener('keyup', (event: KeyboardEvent,) => {
    //if arrow up go up. if arrow down go down...
    
    console.log(i)
    // ctrPrreesd(event,i)
    switch (event.key) {
        case 'ArrowUp':
            box.style.top = `${box.offsetTop - i}px`;
            break;
            case 'ArrowDown':
                box.style.top = `${box.offsetTop + i}px`;
                break;
                case 'ArrowLeft':
                    box.style.left = `${box.offsetLeft - i}px`;
                    break;
                    case 'ArrowRight':
                        
                        box.style.left = `${box.offsetLeft + i}px`;
                        break;
                        case 'Control':
                            if(i=10){ return i=20}
                             if(i=20){return i=10}
                            console.log(i)
                            
                        case " ":
                            const urlMonster = 'url("./dist/packman-monster.png")'
                            const urlPackman = 'url("./dist/packman.png")'
                                

                            
            if (box.style.backgroundImage === urlMonster) {
                box.style.backgroundImage = urlPackman;
            } else {
                box.style.backgroundImage = urlMonster;
            }
            
            break;
            


    }
});
