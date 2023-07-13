// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
// # Points
// 10 good BEM model
// 10 beutifull and accurate design
// 10 reponsive
// 10 clear code
// 10 clear structure.
// 20 using MVC
// 10 trycatch with good exceptions
// 10 error free
//
//MVC - Model View Controller
//class - user, image.

// getImgsFromLocalStorage();
// getUsersFromLocalStorage();

class Img {
    id: string;
    constructor(public image: string) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

// const image1 = new Img('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');

const imagesArray: Img[] = getImgsFromLocalStorage();
// imagesArray.push();
console.log(imagesArray);
//
function saveImgToLocalStorage(image: Img[]) {
    localStorage.setItem('imagesArray', JSON.stringify(image));
}

function getImgsFromLocalStorage(): Img[] {
    try {
        const imgsStorage = localStorage.getItem('imagesArray');
        if (!imgsStorage) return [];
        const imagesArray = JSON.parse(imgsStorage);
        const imgs = imagesArray.map(img => new Img(img.image));
        return imgs;
    } catch (error) {
        console.error(error);
        return [];
    }
}
//

class User {
    id: string;
    constructor(public name: string, public imageProfile: string, public images: Img[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}

const usersArray: User[] = getUsersFromLocalStorage();
if (usersArray.length === 0) {
    const bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', []);
    const netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', []);
    usersArray.push(bar, netanel);
   
}
console.log(usersArray);
//

function saveUserToLocalStorage(user: User[]) {
    localStorage.setItem('usersArray', JSON.stringify(user));
}

function getUsersFromLocalStorage(): User[] {
    try {
    
        const usersStorage = localStorage.getItem('usersArray');
        console.log(usersStorage)
        if (!usersStorage) return [];
        const usersArray = JSON.parse(usersStorage);
        console.log(usersArray)
        if(!usersArray) throw new Error('Users not found');
        if(!Array.isArray(usersArray)) throw new Error('usersArray is not array');
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