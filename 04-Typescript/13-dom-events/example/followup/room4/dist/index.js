var boxes = document.querySelectorAll(".box");
var box = document.querySelector("#box");
box === null || box === void 0 ? void 0 : box.addEventListener("click", function (ev) {
    ev.target.style.backgroundColor = "red";
});
boxes === null || boxes === void 0 ? void 0 : boxes.addEventListener("click", function (ev) {
    ev.target.style.backgroundColor = "red";
});
