// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM

class Images {
    imgUrl: []

    constructor(imgUrl: string) {
        // this.imgUrl.push(imgUrl);
    }
    // imgUrl.push(this);
}

const imgUrl = [];
function getUrl(){
    for (let i = 0; i < 5; i++) {
        const url = prompt("Enter image link");
        imgUrl.push(url);

    }

}
getUrl();



console.dir(imgUrl)


const item: HTMLDivElement | null = document.querySelector("#item");


const imgHTML = imgUrl
    .map((url) => {
        return `<img class="img" src="${url}" alt="${url}" >`
    })
    .join(" ");

if (item) {
    item.innerHTML = imgHTML;
}







