const smiley: HTMLDivElement | null = document.querySelector("#smiley")
const clown: HTMLDivElement | null = document.querySelector("#clown")
document.body.style.backgroundImage= "url(https://t3.ftcdn.net/jpg/02/86/18/20/360_F_286182066_yY72dajL2Vv9pYZ0LWiDiYZrMEStz0Fo.jpg)"
if(clown){
    clown.style.display= "none"
}
if(smiley && clown){
smiley.addEventListener("click", (ev:any)=>{
    smiley.style.display= "none"
    clown.style.display= "block"
    document.body.style.backgroundImage= "url(https://img.freepik.com/premium-photo/haunted-house-background_173387-601.jpg)"

})
}
if(clown && smiley){
    smiley&&clown.addEventListener("mouseout", (ev:any)=>{
        smiley.style.display= "block"
        clown.style.display= "none"
        document.body.style.backgroundImage= "none"
        document.body.style.backgroundImage= "url(https://t3.ftcdn.net/jpg/02/86/18/20/360_F_286182066_yY72dajL2Vv9pYZ0LWiDiYZrMEStz0Fo.jpg)"
    })
    }
    