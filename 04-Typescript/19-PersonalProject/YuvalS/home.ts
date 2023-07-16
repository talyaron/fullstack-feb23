function renderHowtoImg(htmlElement: HTMLElement | null){
try {
    const imageHowTo = document.querySelector("#imageHowTo");
    const howTo = document.querySelector("#howTo");
    howTo?.addEventListener("click", (ev:any) => {
        `<div id="imageHowTo">
        <img src="./dist/imges/HowTo.png" alt="">
    </div>`
    });
} catch (error) {
    console.error(error)
}
}


function handleHowtoImg(ev:any) {
    renderHowtoImg(document.querySelector("#imageHowTo"))
}
