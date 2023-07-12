class Img {
    id: string;
    constructor(public image: string) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

const image1 = new Img('https://pixlr.com/images/index/remove-bg.webp');
const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');

const storedImages = localStorage.getItem('images');
const imageArray: Img[] = storedImages ? JSON.parse(storedImages) : [image1, image2];
console.log(imageArray);
//

class User {
    id: string;
    constructor(public name: string, public imageProfile: string, public img: Img[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

const bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', [image1]);
const netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', [image2]);

const storedUsers = localStorage.getItem('Users');
const usersArray: User[] = storedUsers ? JSON.parse(storedUsers) : [bar, netanel];
console.log(usersArray);
//

class UserImg {
    id: string;
    constructor(public user: User, public image: Img[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

const userImg1 = new UserImg(bar, [image1]);
const userImg2 = new UserImg(netanel, [image2]);

const storedUserImgs = localStorage.getItem('UserImgs');
const userImgArray: UserImg[] = storedUserImgs ? JSON.parse(storedUserImgs) : [userImg1, userImg2];
console.log(userImgArray);

