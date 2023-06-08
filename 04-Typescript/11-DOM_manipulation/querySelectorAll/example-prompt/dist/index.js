function getDimantions() {
    try {
        var width = Number(prompt("what is the width"));
        var height = Number(prompt("what is the height"));
        var color = prompt("which color?");
        var box = document.querySelector("#box");
        if (width && box) {
            box.style.width = width + "px";
        }
        if (height && box) {
            box.style.height = height + "px";
        }
        if (color && box) {
            box.style.backgroundColor = color;
        }
    }
    catch (error) {
        console.error(error);
    }
}
getDimantions();
