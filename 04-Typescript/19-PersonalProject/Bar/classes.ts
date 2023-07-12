class Img {
    id: string;
    constructor(public image: string) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

// const image1 = new Img('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');

const storedImages = localStorage.getItem('images');
const imagesArray: Img[] = getImgsFromLocalStorage();
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
const usersArray: User[] = getUsersFromLocalStorage();
console.log(usersArray);
//

function saveImgToLocalStorage(image: Img[]){
    localStorage.setItem('image', JSON.stringify(image));
}

function getImgsFromLocalStorage():Img[]{
    try {
        const imgsStorage = localStorage.getItem('imgs');
        if(!imgsStorage) return [];
        const imagesArray = JSON.parse(imgsStorage);
        const imgs = imagesArray.map(img => new Img(img.image));
        return imgs;
    } catch (error) {
        console.error(error);
        return [];
    }
}
//
function saveUserToLocalStorage(user: User[]){
    localStorage.setItem('user', JSON.stringify(user));
}

function getUsersFromLocalStorage():User[]{
    try {
        const usersStorage = localStorage.getItem('users');
        if(!usersStorage) return [];
        const usersArray = JSON.parse(usersStorage);
        const users = usersArray.map(user => new User(user.name, user.imageProfile, user.images));
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}

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