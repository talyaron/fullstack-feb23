const box = document.querySelector('#box') as HTMLDivElement;
// box.style.backgroundImage = 'url(./terror.png)';

const watermelons:NodeListOf<HTMLDivElement> = document.querySelectorAll(".food");
watermelons.forEach(watermelon => {
    watermelon.style.top = `${Math.floor(Math.random() * 99)}%`
    watermelon.style.left = `${Math.floor(Math.random() * 99)}%`

    
})


document.addEventListener('keyup', (event: KeyboardEvent) => {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            if(event.ctrlKey)box.style.top = `${box.offsetTop - 40}px`;
            else box.style.top = `${box.offsetTop - 10}px`;
            box.style.transform = "rotate(-90deg)";

            break;
        case 'ArrowDown':
            if(event.ctrlKey)box.style.top = `${box.offsetTop + 40}px`;
            else box.style.top = `${box.offsetTop + 10}px`;
            box.style.transform = "rotate(90deg)";

            break;
        case 'ArrowLeft':
            if(event.ctrlKey)box.style.left = `${box.offsetLeft - 40}px`;
            else box.style.left = `${box.offsetLeft - 10}px`;
            box.style.transform = "scaleX(-1)";

            break;
        case 'ArrowRight':
            if(event.ctrlKey)box.style.left = `${box.offsetLeft + 40}px`;
            else box.style.left = `${box.offsetLeft + 10}px`;
            box.style.transform = "scaleX(1)";

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