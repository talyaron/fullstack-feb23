// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM

class UserImg {
    img:string | null;

    constructor(img: string | null) {
        this.img = img;
    }
}

function UserImage() {
    const firstImageUrl = prompt("Enter Url of an Image");

    const firstImage = new UserImg(firstImageUrl)

    const div = document.querySelector("#root");

    div?.innerHTML += `<p>${firstImage.img}`
}

UserImage()
