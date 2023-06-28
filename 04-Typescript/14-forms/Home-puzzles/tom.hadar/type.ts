class Img{
    constructor(public imgUrl, public width){}
}

const imgs= []

function UrlWidth(event){
    try {
    event.preventDefault();
    const imgUrl= event.target.elements.imgUrl.value;
    const width= event.target.elements.width.value;
    const data= new Img(imgUrl,width);
    imgs.push(data);
    console.log(imgs);
    event.target.reset()
    const root= document.querySelector("#root")
    hadar(imgs,root)
    } catch (error) {
        console.error(error)
    }
}
function hadar(imgArray, root) {
    try {
        const html = imgArray.map((img) => {
            return `<div>
            <img src="${img.imgUrl}" style="width: ${img.width}px;">
            </div>`;
        }).join("");
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}   