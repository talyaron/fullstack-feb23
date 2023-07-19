var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav__links");
var links = document.querySelector(".nav__links li");
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.toggle("open");
    links.forEach(function (link) {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});
