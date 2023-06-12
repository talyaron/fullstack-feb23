var boxes = document.querySelectorAll(".box");
console.dir(boxes);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRandomColor();
    });
}, 1000);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.top = getRandomPosition() + "px";
        box.style.left = getRandomPosition() + "px";
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
function getRandomPosition() {
    var num = Math.floor(Math.random() * 999);
    return num.toString();
}
