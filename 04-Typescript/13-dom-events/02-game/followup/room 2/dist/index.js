var box = document.querySelector('#box');
// box.style.backgroundImage = 'url(./terror.png)';
document.addEventListener('keyup', function (event) {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    switch (event.key || event.ctrlKey) {
        case 'ArrowUp':
            if (event.ctrlKey == true) {
                box.style.top = box.offsetTop - 200 + "px";
            }
            else
                box.style.top = box.offsetTop - 10 + "px";
            break;
        case 'ArrowDown':
            if (event.ctrlKey == true) {
                box.style.top = box.offsetTop + 200 + "px";
            }
            else
                box.style.top = box.offsetTop + 10 + "px";
            break;
        case 'ArrowLeft':
            if (event.ctrlKey == true) {
                box.style.left = box.offsetLeft - 200 + "px";
            }
            else
                box.style.left = box.offsetLeft - 10 + "px";
            break;
        case 'ArrowRight':
            if (event.ctrlKey == true) {
                box.style.left = box.offsetLeft + 200 + "px";
            }
            else
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
            break;
    }
});
