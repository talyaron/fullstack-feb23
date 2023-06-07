const root: HTMLDivElement | null = document.querySelector("#root");
if (root) {
  root.innerText = "hi";
  root.style.backgroundColor = "pink";
  root.style.color = "white";
  console.dir(root);

  setInterval(() => {
    console.log(getRandomColor());
    root.style.backgroundColor = getRandomColor();
    root.style.color = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();
    
  }, 1000);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
