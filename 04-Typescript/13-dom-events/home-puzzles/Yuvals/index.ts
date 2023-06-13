const box1 = document.querySelector("#box1");
box1?.addEventListener("click", (ev:any) => {
    ev.target.style.backgroundImage = "url(./dist/Screenshot_netflix1.png)"
});

box1?.addEventListener("mouseleave", (ev:any) => {
    ev.target.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/414px-Mr._Smiley_Face.svg.png?20150207231107)"
});

