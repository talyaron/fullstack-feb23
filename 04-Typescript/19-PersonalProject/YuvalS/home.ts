function renderHowtoImg(htmlElement: HTMLElement | null) {
  try {
    const imageHowTo = document.querySelector("#imageHowTo") as HTMLDivElement;
    const html = `
        <img id="imageH" src="./dist/imges/HowTo.png" alt="">`
    imageHowTo.innerHTML = html;
    const imageH = document.querySelector("#imageH") as HTMLDivElement;
    imageH.addEventListener("click", function () {
      imageH.remove();
    });

  } catch (error) {
    console.error(error)
  }
}




function handleHowtoImg(ev: any) {
  ev.preventDefault();
  renderHowtoImg(document.querySelector("#imageHowTo"))
}


