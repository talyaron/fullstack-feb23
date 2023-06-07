var boxes = document.querySelectorAll(".box");
console.dir(boxes);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRandomColor();
        box.style.position = "absolute";
        box.style.left = getRandomNumber(50) + "vw";
        box.style.top = getRandomNumber(50) + "vh";
    });
}, 1000);
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomNumber(100));
// newspaper.addEventListener("click", () => {
//   newspaper.animate(newspaperSpinning, newspaperTiming);
// });
