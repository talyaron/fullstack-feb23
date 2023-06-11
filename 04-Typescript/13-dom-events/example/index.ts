const boxes = document.querySelectorAll(".box");
const box = document.querySelector("#box");

box?.addEventListener("click",(ev:any)=>{
    ev.target.style.backgroundColor = getRandomColor();
})

// boxes.forEach((box) => {
//     console.dir(box);
//   box.addEventListener("mouseout", (ev: any) => {
//     console.log(ev);

//     ev.target.style.backgroundColor = getRandomColor();
//   });

//   box.addEventListener("mouseenter", (ev: any) => {
//     console.log(ev);

//     ev.target.style.backgroundColor = getRandomColor();
//   });
// });

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
