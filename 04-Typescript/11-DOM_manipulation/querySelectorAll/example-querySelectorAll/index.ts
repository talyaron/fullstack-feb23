const boxes: NodeListOf<HTMLDivElement> = document.querySelectorAll(".box");
console.dir(boxes);

setInterval(() => {
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
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
function moveElmRand(box){
  box.style.position ='absolute';
  box.style.top = Math.floor(Math.random()*90+5)+'%';
  box.style.left = Math.floor(Math.random()*90+5)+'%';
 }