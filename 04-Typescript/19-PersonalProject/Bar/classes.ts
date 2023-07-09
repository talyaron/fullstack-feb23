class Img {
    id: string;
    constructor(public image: string, public description: string) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const image1 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My image');
const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg', 'My new image');

const storedImages = localStorage.getItem('images');
const imageArray: Img[] = storedImages ? JSON.parse(storedImages): [image1, image2];
console.log(imageArray[0].description)

class User {
    id: string;
    constructor(public name: string, public followUp: number, public followers: number, public imageProfile: string, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
const netanel = new User('Netanel', 657, 603, 'https://photoscissors.com/images/samples/3-before.jpg', Img[1]);

const storedUsers = localStorage.getItem('Users');
const usersArray: Img[] = storedUsers ? JSON.parse(storedUsers): [bar, netanel];
console.log(usersArray[1].name);

class UserImg {
    id: string;
    constructor(public user: User, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const userImg1 = new UserImg(bar, Img[0]);
const userImg2 = new UserImg(netanel, Img[1]);

const storedUserImgs = localStorage.getItem('UserImgs');
const userImgArray: Img[] = storedUserImgs ? JSON.parse(storedUserImgs): [userImg1, userImg2];
console.log(userImgArray[0].user.name);