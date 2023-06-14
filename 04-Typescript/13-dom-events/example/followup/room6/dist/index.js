var box = document.querySelector("#box1");
box === null || box === void 0 ? void 0 : box.addEventListener("mouseout", function (ev) {
    ev.target.style.scale = 1.2;
});
box === null || box === void 0 ? void 0 : box.addEventListener("click", function (ev) {
    ev.target.style.backgroundColor = "red";
});
