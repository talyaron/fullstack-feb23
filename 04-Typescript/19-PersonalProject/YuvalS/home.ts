function renderHowtoImg(htmlElement: HTMLElement | null){
try {
    const imageHowTo = document.querySelector("#imageHowTo") as HTMLDivElement;
      const html =  `<div id="imageHowTo">
        <img src="./dist/imges/HowTo.png" alt="">
    </div>`
    imageHowTo.innerHTML = html;
} catch (error) {
    console.error(error)
}
}


    
    


function handleHowtoImg(ev:any) {
    ev.preventDefault();
    renderHowtoImg(document.querySelector("#imageHowTo"))
}


const imageHowTo = document.querySelector("#imageHowTo") as HTMLDivElement;
imageHowTo.addEventListener("click", function (event) {
        imageHowTo.remove()
        });
