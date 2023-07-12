// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM



class Images {
    imgUrl: Array<string>


    constructor(data: string) {
        this.imgUrl = [data]

    }

}


function getUrl() {
    for (let i = 0; i < 5; i++) {
        const url: any = prompt("Enter image link");
        imgUrl.push(url);
        // let x = new Images(url)
        // console.dir(x);

    }

    return imgUrl;
}
let imgUrl: Images = [];
const imgUrl = getUrl();
// console.dir(imgUrl)
const item: HTMLDivElement | null = document.querySelector("#item");
const imgHTML = imgUrl
    .map((url) => {
        return `<img class="img" src="${url}" alt="${url}" >`
    })
    .join(" ");
if (item) {
    item.innerHTML = imgHTML;
}







