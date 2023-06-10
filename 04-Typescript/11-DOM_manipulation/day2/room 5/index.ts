const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.style.position = "relative";
    box.style.left = Math.random() * 1000 + "px"
    box.style.bottom = Math.random() * 100 + "px"
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

console.log(Math.random() * 10)