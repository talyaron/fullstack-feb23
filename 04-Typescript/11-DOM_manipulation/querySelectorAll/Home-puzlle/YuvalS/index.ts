// const imgUrl: string|null = prompt("Insert url pls");
// const container1 = document.querySelector("#container1");
// const imgHTML = `<img src="${imgUrl}" />`;
// if (imgUrl && container1) container1.innerHTML = imgHTML;

const imgUrl1: string|null = prompt("Insert first url pls");
const imgUrl2: string|null = prompt("Insert second url pls");
const imgUrl3: string|null = prompt("Insert third url pls");
const imgUrl4: string|null = prompt("Insert fourth url pls");
const imgUrl5: string|null = prompt("Insert fifth url pls");


class Imgs{
    image:string;
    constructor(image:string){
        this.image = image
    }
}

const imgs: Imgs[] = [
    new Imgs(`${imgUrl1}`),
    new Imgs(`${imgUrl2}`),
    new Imgs(`${imgUrl3}`),
    new Imgs(`${imgUrl4}`),
    new Imgs(`${imgUrl5}`)
]

const container1 = document.querySelector("#container1");

const imgsHtml = imgs
.map((img) => {
    return `
    <img src="${img.image}" />`
}).join(" ")

if (container1) container1.innerHTML = imgsHtml;
