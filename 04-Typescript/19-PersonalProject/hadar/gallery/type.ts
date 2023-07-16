// נגדיר את האירוע בעזרת JavaScript
const icons = document.querySelectorAll(".gallery__imgs--p i");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.color = "red";
  });
});
