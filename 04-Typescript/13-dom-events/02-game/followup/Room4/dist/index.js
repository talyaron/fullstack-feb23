var box = document.querySelector('#box');
// box.style.backgroundImage = 'url(./terror.png)';
var watermelons = document.querySelectorAll(".food");
watermelons.forEach(function (watermelon) {
    watermelon.style.top = Math.floor(Math.random() * 99) + "%";
    watermelon.style.left = Math.floor(Math.random() * 99) + "%";
});
// function checkArrived() {
//     const melonaSize = watermelons?.getBoundingClientRect();
//     const dogSize = dog.getBoundingClientRect();
//     if (
//       melonaSize.left <= dogSize.right &&
//       melonaSize.right >= dogSize.left &&
//       melonaSize.top <= dogSize.bottom &&
//       melonaSize.bottom >= dogSize.top
//     ) {
//       alert("congratulation!");
//       location.reload();
//     }
//   }
document.addEventListener('keyup', function (event) {
    //if arrow up go up. if arrow down go down...
    console.log(event);
    switch (event.key) {
        case 'ArrowUp':
            if (event.ctrlKey)
                box.style.top = box.offsetTop - 40 + "px";
            else
                box.style.top = box.offsetTop - 10 + "px";
            box.style.transform = "rotate(-90deg)";
            break;
        case 'ArrowDown':
            if (event.ctrlKey)
                box.style.top = box.offsetTop + 40 + "px";
            else
                box.style.top = box.offsetTop + 10 + "px";
            box.style.transform = "rotate(90deg)";
            break;
        case 'ArrowLeft':
            if (event.ctrlKey)
                box.style.left = box.offsetLeft - 40 + "px";
            else
                box.style.left = box.offsetLeft - 10 + "px";
            box.style.transform = "scaleX(-1)";
            break;
        case 'ArrowRight':
            if (event.ctrlKey)
                box.style.left = box.offsetLeft + 40 + "px";
            else
                box.style.left = box.offsetLeft + 10 + "px";
            box.style.transform = "scaleX(1)";
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
