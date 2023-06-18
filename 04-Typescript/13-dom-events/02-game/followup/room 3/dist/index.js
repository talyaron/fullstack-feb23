var box = document.querySelector('#box');
// box.style.backgroundImage = 'url(./terror.png)';
// function ctrPrreesd(event){
//     if (event.key === 'Control') {
//         console.log("test")
//     }else console.log("bad")
// }
var i = 10;
var newi = 20;
document.addEventListener('keyup', function (event) {
    //if arrow up go up. if arrow down go down...
    console.log(i);
    // ctrPrreesd(event,i)
    switch (event.key) {
        case 'ArrowUp':
            box.style.top = box.offsetTop - i + "px";
            break;
        case 'ArrowDown':
            box.style.top = box.offsetTop + i + "px";
            break;
        case 'ArrowLeft':
            box.style.left = box.offsetLeft - i + "px";
            break;
        case 'ArrowRight':
            box.style.left = box.offsetLeft + i + "px";
            break;
        case 'Control':
            if (i = 10) {
                return i = 20;
            }
            if (i = 20) {
                return i = 10;
            }
            console.log(i);
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
