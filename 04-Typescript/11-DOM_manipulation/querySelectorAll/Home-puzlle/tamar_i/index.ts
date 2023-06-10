//1

function gerURLimg() {
    try {
        const imgURLfromuser: string | null = prompt("please enter URL for your image");

        const imgurl: HTMLDivElement | null = document.querySelector("#imgurl");

        if (imgurl && imgURLfromuser) {
            imgurl.style.backgroundImage = `url(${imgURLfromuser})`;
            console.log(imgURLfromuser);
        }

    } catch (error) {
        console.error(error)
    }
}
gerURLimg();

//2
function get_url_images_fromUser() {
    try {
        const images: NodeListOf<HTMLDivElement> = document.querySelectorAll(".image");
        console.dir(images);
        let i = 1;
        images.forEach((image) => {
            image.style.backgroundImage = `url(${prompt(`please enter your ${i} from 5 URL for your images`)})`;
            i++;
        })

    }

    catch (error) {
        console.error(error)
    }
}

get_url_images_fromUser();

//3
class Imagesfromuser {
    imgsrc: string;
    constructor(imgsrc: string) {
        this.imgsrc = imgsrc;
    }
}

const imgesArray: Array<Imagesfromuser[]> = [];

function get_images_fromUser_toArray() {
    try {
        const images: NodeListOf<HTMLDivElement> = document.querySelectorAll(".image");
        console.dir(images);
        let imgtoHTML = imgesArray.map((img) => `url(${prompt(`please enter URL for your images`)})`).join("");
    }

    catch (error) {
        console.error(error)
    }
}

