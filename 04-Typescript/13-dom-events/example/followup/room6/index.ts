let box = document.querySelector("#box1");

box?.addEventListener("mouseout", (ev: any) => {
    ev.target.style.scale = 1.2
}
)
box?.addEventListener("click", (ev: any) => {
    ev.target.style.backgroundColor = "red"
}
)
