const boxes = document.querySelectorAll(".box");
const box = document.querySelector("#box");

box?.addEventListener("click",(ev:any)=>{
    ev.target.style.backgroundColor= `red`;
})

boxes?.addEventListener("click",(ev:any)=>{
    ev.target.style.backgroundColor= `red`;
})


