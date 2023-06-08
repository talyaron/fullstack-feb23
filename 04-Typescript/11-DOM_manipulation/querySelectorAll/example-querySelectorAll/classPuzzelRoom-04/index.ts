const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  });
}, 1000);
setInterval(() => {
  boxes.forEach((box) => {
    box.style.top = `${getRandomPosition()}px`;
    box.style.left = `${getRandomPosition()}px`;
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
function getRandomPosition() {
  let num = Math.floor(Math.random() * 999);
  return num.toString();
}
