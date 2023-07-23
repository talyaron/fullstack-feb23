var boxes = document.querySelectorAll(".box");
console.dir(boxes);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRandomColor();
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
function moveElmRand(box) {
    box.style.position = 'absolute';
    box.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    box.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}