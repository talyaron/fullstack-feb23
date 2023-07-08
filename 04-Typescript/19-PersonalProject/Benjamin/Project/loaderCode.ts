window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if(loader)
    loader.classList.add("loader-hidden")

    loader?.addEventListener("transitioned", ()=>{
        document.body.removeChild(loader)
    })

})
