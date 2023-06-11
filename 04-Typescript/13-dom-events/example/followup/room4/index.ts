const boxes = document.querySelectorAll(".box");
const box = document.querySelector("#box");

box.addEventListener("mousedown",(ev:any)=>{
    ev.target.style.borderRadius= 50%
})