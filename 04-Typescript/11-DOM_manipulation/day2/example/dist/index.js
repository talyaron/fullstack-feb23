var root = document.querySelector(".box");
if (root) {
    root.innerText = "hi";
    root.style.backgroundColor = "pink";
    root.style.color = "white";
    console.dir(root);
    setInterval(function () {
        console.log(getRandomColor());
        root.style.backgroundColor = getRandomColor();
        root.style.color = getRandomColor();
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
