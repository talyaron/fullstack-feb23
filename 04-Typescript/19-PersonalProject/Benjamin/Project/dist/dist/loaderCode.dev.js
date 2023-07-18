"use strict";

window.addEventListener("load", function () {
  var loader = document.querySelector(".loader");
  if (loader) loader.classList.add("loader-hidden");
  loader === null || loader === void 0 ? void 0 : loader.addEventListener("transitioned", function () {
    document.body.removeChild(loader);
  });
});