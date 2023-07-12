// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM


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

const img: HTMLDivElement | null = document.querySelector("#img");

const imgLink = image
    .map((link) => {
        return `<img class="img" src="${link}" alt="${link}" >`
    })
    .join(" ");

if (img) {
    img.innerHTML = imgLink;
}