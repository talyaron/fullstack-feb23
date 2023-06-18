const box = document.querySelector('#box') as HTMLDivElement;
// box.style.backgroundImage = 'url(./terror.png)';

document.addEventListener('keyup', (event: KeyboardEvent) => {
    //if arrow up go up. if arrow down go down...
    console.log(event);

    switch (event.key) {
        case 'ArrowUp':
            if
            box.style.top = `${box.offsetTop - 10}px`;
            break;
        case 'ArrowDown':
            box.style.top = `${box.offsetTop + 10}px`;
            break;
        case 'ArrowLeft':
            box.style.left = `${box.offsetLeft - 10}px`;
            break;
        case 'ArrowRight':

            box.style.left = `${box.offsetLeft + 10}px`;
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



    }
});