var box = document.querySelector('#box');
// box.style.backgroundImage = 'url(./terror.png)';
document.addEventListener('keyup', function (event) {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    var movement = 10;
    switch (event.key) {
        case 'ArrowUp':
            box.style.top = box.offsetTop - movement + "px";
            break;
        case 'ArrowDown':
            box.style.top = box.offsetTop + movement + "px";
            break;
        case 'ArrowLeft':
            box.style.left = box.offsetLeft - movement + "px";
            break;
        case 'ArrowRight':
            box.style.left = box.offsetLeft + movement + "px";
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
        case "Ctrl":
            if (event.key === "Ctrl") {
                movement = movement;
            }
            else {
                movement = movement * 2;
            }
            console.log(event.key);
    }
});
