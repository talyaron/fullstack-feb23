var boxes = document.querySelectorAll(".box");
boxes.forEach(function (box) {
    box.addEventListener("click", function (ev) {
        console.log(ev);
        ev.target.style.backgroundColor = "blue";
    });
});
