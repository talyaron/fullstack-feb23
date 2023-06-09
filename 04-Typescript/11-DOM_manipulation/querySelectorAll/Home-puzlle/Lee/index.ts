class Images {
    image: string;

    constructor(image: string) {
        this.image = image;
    }
}

const image: Array<any> = [];
function imageUrl() {
    for (let i = 0; i < 5; i++) {
        const url = prompt("Send image adress");
        image.push(url);
    }
    return image;
}
imageUrl();

console.dir(image)

const pic: HTMLDivElement | null = document.querySelector("#img");

const imgLink = image 
.map((link) => {
    return `<img class="img" src="${link}" alt="${link}" >`
})
.join(" ");

if (img) {
    img.innerHTML = imgLink;
}