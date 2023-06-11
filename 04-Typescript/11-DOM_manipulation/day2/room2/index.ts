const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  
    box.style.top=(randomNumbers())+"vh"
    box.style.left=(randomNumbers())+"vw"
    
    box.style.transition="1s"
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

function randomNumbers(){
  return Math.floor(Math.random() * 100)
}
