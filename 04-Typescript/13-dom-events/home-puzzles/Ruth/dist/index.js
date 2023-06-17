var dog = document.querySelector(".dog");
var kennel = document.querySelector(".kennel");
kennel.style.left = "calc(" + Math.random() * 100 + "% - 100px)";
kennel.style.top = "calc(" + Math.random() * 100 + "% - 100px)";
dog.addEventListener("click", onClick);
var isClick = false;
function onClick(e) {
    if (isClick == false) {
        document.addEventListener("mousemove", onMouseMove);
        isClick = true;
    }
    else {
        document.removeEventListener("mousemove", onMouseMove);
        isClick = false;
        checkArrived();
    }
}
var onMouseMove = function (e) {
    dog.style.left = e.pageX - 40 + "px";
    dog.style.top = e.pageY - 50 + "px";
};
function checkArrived() {
    var kannelSize = kennel === null || kennel === void 0 ? void 0 : kennel.getBoundingClientRect();
    var dogSize = dog.getBoundingClientRect();
    if (kannelSize.left <= dogSize.right &&
        kannelSize.right >= dogSize.left &&
        kannelSize.top <= dogSize.bottom &&
        kannelSize.bottom >= dogSize.top) {
        alert("congratulation!");
        location.reload();
    }
}
