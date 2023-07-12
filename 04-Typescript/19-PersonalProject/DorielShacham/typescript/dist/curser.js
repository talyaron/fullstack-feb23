var pointer = document.querySelector("#pointer");
window.addEventListener("mousemove", function (event) {
    pointer.style = "\n    transform: translate(" + (event.clientX - 50) + "px, " + (event.clientY - 50) + "px);\n  ";
});
window.addEventListener("load", function (event) {
    pointer.style = "\n    transform: translate(-50px, -50px);\n    top: 50%; left: 50%;\n  ";
});
