const icons:any = document.querySelectorAll(".gallery__imgs--p i");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.color = "red";
  });
});
