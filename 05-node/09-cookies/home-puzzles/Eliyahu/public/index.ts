
async function picturesShow(){
    try {
        const response = await fetch('API/pictures/get-pictures')
        const result = await response.json()
        const { pictures } = result
        if (!Array.isArray(pictures)) throw new Error("pictures is not array");

        const index = Math.floor(Math.random()*pictures.length) 
        
        const imgsRoot = document.querySelector('#imgs') as HTMLDivElement
        const imgUrl = pictures[index].imgUrl
        imgsRoot.style.backgroundImage = `url("${imgUrl}")`

        imgsRoot.innerHTML = 
        `<p>${pictures[index].title}.   ${pictures[index].location}.   ${pictures[index].userName} </p>`
        imgsRoot.style.color = 'white'
        imgsRoot.style.textAlign = 'center'
        imgsRoot.style.fontSize = 'large'
        
    } catch (error) {
        console.error(error.massage);
    }
}
picturesShow()
setInterval(picturesShow,4000)