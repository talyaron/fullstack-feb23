var icons = document.querySelectorAll(".gallery__imgs--p i");
icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
        icon.style.color = "red";
    });
});
