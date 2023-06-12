
function GetImg() {
    
    const urlImg: string | null = prompt('insert url image please')
    
    const box: HTMLDivElement | null = document.querySelector('#box')
    
    if (urlImg && box) {
       return box.style.backgroundImage = `${urlImg}px`
       
        
    }
}

GetImg();


console.dir(GetImg)
