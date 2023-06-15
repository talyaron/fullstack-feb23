const box = document.querySelector('#box') as HTMLDivElement;
// box.style.backgroundImage = 'url(./terror.png)';

document.addEventListener('keyup', (event: KeyboardEvent) => {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    let movement:number = 10;
    switch (event.key) {
        case 'ArrowUp':
             box.style.top = `${box.offsetTop - movement}px`;
            break;
        case 'ArrowDown':
            box.style.top = `${box.offsetTop + movement}px`;
            break;
        case 'ArrowLeft':
            box.style.left = `${box.offsetLeft - movement}px`;
            break;
        case 'ArrowRight':

            box.style.left = `${box.offsetLeft + movement}px`;
            break;
        case " ":
            const urlMonster = 'url("./dist/packman-monster.png")'
            const urlPackman = 'url("./dist/packman.png")'

            if (box.style.backgroundImage === urlMonster) {
                box.style.backgroundImage = urlPackman;
            } else {
                box.style.backgroundImage = urlMonster;
            }

            break;
           case "Ctrl": if  (event.key === "Ctrl"){
                movement = movement
            } 
            else {
                movement = movement*2
            }

console.log(event.key);




    }
});