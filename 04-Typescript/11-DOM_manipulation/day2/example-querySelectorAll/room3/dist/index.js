var boxes = document.querySelectorAll(".box");
console.dir(boxes);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRandomColor();
        box.style.position = "relative";
        box.style.left = getRandomNumber();
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
function getRandomNumber() {
    var letters = "123456789";
    var num = "";
    for (var i = 0; i < 3; i++) {
        num += letters[Math.floor(Math.random() * 10)];
    }
    return num + "px";
}
console.log(getRandomNumber());
// newspaper.addEventListener("click", () => {
//   newspaper.animate(newspaperSpinning, newspaperTiming);
// });
