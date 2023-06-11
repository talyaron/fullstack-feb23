class User {
    ImgName: string | null
    Img: string | null

    constructor(ImgName: string | null, Img: string | null) {
        this.ImgName = ImgName;
        this.Img = Img;
    }
}

const firstImgName = prompt("Enter the name of the first image");
const firstImgUrl = prompt("Please write the URL of the first image");
const secondImgName = prompt("Enter the name of the second image");
const secondImgUrl = prompt("Please write the URL of the second image");
const thirdImgName = prompt("Enter the name of the third image");
const thirdImgUrl = prompt("Please write the URL of the third image");
const fourthImgName = prompt("Enter the name of the fourth image");
const fourthImgUrl = prompt("Please write the URL of the fourth image");
const fifthImgName = prompt("Enter the name of the fifth image");
const fifthImgUrl = prompt("Please write the URL of the fifth image");

const firstUser = new User(firstImgName, firstImgUrl);
const secondUser = new User(secondImgName, secondImgUrl);
const thirdUser = new User(thirdImgName, thirdImgUrl);
const fourthUser = new User(fourthImgName, fourthImgUrl);
const fifthUser = new User(fifthImgName, fifthImgUrl);

const div = document.getElementById("box1");

div.innerHTML += `<p>First User: ${firstUser.ImgName}<br> <img src="${firstUser.Img}"></img></p><hr>`;
div.innerHTML += `<p>Second User: ${secondUser.ImgName}<br> <img src="${firstUser.Img}"></img></p><hr>`;
div.innerHTML += `<p>Third User: ${thirdUser.ImgName}<br> <img src="${firstUser.Img}"></img></p><hr>`;
div.innerHTML += `<p>Fourth User: ${fourthUser.ImgName}<br> <img src="${firstUser.Img}"></img></p><hr>`;
div.innerHTML += `<p>Fifth User: ${fifthUser.ImgName}<br> <img src="${firstUser.Img}"></img></p><hr>`;



