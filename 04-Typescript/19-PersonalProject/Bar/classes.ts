class Img {
    id: string;
    constructor(public image: string) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

// const image1 = new Img('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');

const storedImages = localStorage.getItem('images');
const imagesArray: Img[] = storedImages ? JSON.parse(storedImages) : [];
console.log(imagesArray);
//

class User {
    id: string;
    constructor(public name: string, public imageProfile: string, public images: Img[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

const bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', []);
const netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', []);

const storedUsers = localStorage.getItem('Users');
const usersArray: User[] = storedUsers ? JSON.parse(storedUsers) : [bar, netanel];
console.log(usersArray);
//

// class UserImg {
//     id: string;
//     constructor(public user: User, public image: Img[]) {
//         this.id = Date.now().toString() + Math.random().toString(36).substr(2);
//     }
// }

// const userImg1 = new UserImg(bar, []);
// const userImg2 = new UserImg(netanel, []);

// const storedUserImgs = localStorage.getItem('UserImgs');
// const userImgArray: UserImg[] = storedUserImgs ? JSON.parse(storedUserImgs) : [userImg1, userImg2];
// console.log(userImgArray);