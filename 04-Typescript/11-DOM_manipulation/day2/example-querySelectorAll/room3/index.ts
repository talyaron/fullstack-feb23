const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.style.position = "relative";
    box.style.left = getRandomNumber();
  });

}, 1000);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomNumber() {
  const letters = "123456789";
  let num = "";
  for (let i = 0; i < 3; i++) {
    num += letters[Math.floor(Math.random() * 10)];
  }
  return `${num}px`
  
}
console.log(getRandomNumber())


// newspaper.addEventListener("click", () => {
//   newspaper.animate(newspaperSpinning, newspaperTiming);
// });

