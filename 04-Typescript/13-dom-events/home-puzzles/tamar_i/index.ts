const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const box = document.querySelectorAll(".box");

box.forEach(box => {
  box.addEventListener("click", () => {
    audio.play();
  });
});