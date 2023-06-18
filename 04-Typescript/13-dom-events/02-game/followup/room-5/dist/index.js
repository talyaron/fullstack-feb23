var box = document.querySelector('#box');
// box.style.backgroundImage = 'url(./terror.png)';
document.addEventListener('keyup', function (event) {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            box.style.top = box.offsetTop - 10 + "px";
            break;
        case 'ArrowUp' && 'CtrlKey':
            box.style.top = box.offsetTop - 10 + "px";
            box.style.transition = "all 50ms";
            break;
        case 'ArrowDown':
            box.style.top = box.offsetTop + 10 + "px";
            break;
        case 'ArrowLeft':
            box.style.left = box.offsetLeft - 10 + "px";
            break;
        case 'ArrowRight':
            box.style.left = box.offsetLeft + 10 + "px";
            break;
        case " ":
            var urlMonster = 'url("./dist/packman-monster.png")';
            var urlPackman = 'url("./dist/packman.png")';
            if (box.style.backgroundImage === urlMonster) {
                box.style.backgroundImage = urlPackman;
            }
            else {
                box.style.backgroundImage = urlMonster;
            }
            box.style.transition = "all 2s";
            break;
    }
});
