class Img {
    imgSrc: string;
    constructor(imgSrc: string) {
        this.imgSrc = imgSrc;
    }
}

function getImageUrl() {
    try {
        const imgUrl: string | null = prompt("Enter image url")
        const img: HTMLDivElement | null = document.querySelector("#img")
        if (img && imgUrl) {
            img.style.backgroundImage = `url(${imgUrl})`
        }
    } catch (error) {
        console.error(error);

    }
}

function getImagesUrl() {
    try {
        const imgs: NodeListOf<HTMLDivElement> | null = document.querySelectorAll(".img")
        if (imgs) {
            imgs.forEach(img => {
                img.style.backgroundImage = `url(${prompt("Enter image url")})`


            });

        }
    } catch (error) {
        console.error(error);

    }
}

// function xxx(imgsArr: Array<Img>) {
//     const imgUrl: string | null = prompt("Enter image url")
//     if (imgUrl) {
//         imgsArr.forEach(element => {
//             imgsArr.push(new Img (`${imgUrl}`))
//         });
//         console.log (imgsArr)
//     }
// }

getImageUrl()
getImagesUrl()

// const arr:Array<Img> = []
// arr.length = 5
// xxx(arr)
