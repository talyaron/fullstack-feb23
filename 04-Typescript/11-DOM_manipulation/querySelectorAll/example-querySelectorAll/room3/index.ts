const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
    box.style.position = "absolute";
    box.style.left = `${getRandomNumber(50)}vw`;
    box.style.top = `${getRandomNumber(50)}vh`;
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

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}
console.log(getRandomNumber(100));

// newspaper.addEventListener("click", () => {
//   newspaper.animate(newspaperSpinning, newspaperTiming);
// });
