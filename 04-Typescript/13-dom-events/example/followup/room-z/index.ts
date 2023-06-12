const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (ev: any) => {
    console.log(ev);
    ev.target.style.backgroundColor = `blue`;
  });
});
