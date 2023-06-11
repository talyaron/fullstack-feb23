function GetRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function getRndomColor() {
    debugger;
    var AllNumbers = '0123456789ABCDEF';
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += AllNumbers[Math.floor(Math.random() * 10)];
    }
    return color;
}
var boxes = document.querySelectorAll(".box");
console.dir(boxes);
setInterval(function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = getRndomColor();
        box.style.position = "absolute";
        box.style.left = GetRandomNumber(100) + "vw";
        box.style.top = GetRandomNumber(100) + "vh";
    }, 1000);
});
