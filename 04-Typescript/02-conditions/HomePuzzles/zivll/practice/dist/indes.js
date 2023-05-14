{
    var element = document.getElementById("FirstBtn");
    if ((element === null || element === void 0 ? void 0 : element.className) == "focus") {
        element.classList.remove("focus");
        document.getElementById("SecondBtn");
        element.classList.add("focus");
    }
    else {
        element.classList.add("focus");
        document.getElementById("SecondBtn");
        element.classList.remove("focus");
    }
}
