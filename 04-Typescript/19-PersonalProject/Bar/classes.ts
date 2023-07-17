// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
// # Points
// 10 good BEM model - v
// 10 beutifull and accurate design - v
// 10 reponsive - v
// 10 clear code - v
// 10 clear structure. -
// 20 using MVC - v
// 10 trycatch with good exceptions -
// 10 error free - v
//
//class - user, image.
class Img {
    id: string;
    constructor(public image: string) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}
const imagesArray: Img[] = getImgsFromLocalStorage();

class User {
    id: string;
    constructor(public name: string, public imageProfile: string, public imagse: Img[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}
const usersArray: User[] = getUsersFromLocalStorage();
if (usersArray.length === 0) {
    const bar = new User('Bar', 'https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_640.jpg', []);
    const netanel = new User('Netanel', 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_640.jpg', []);
    const shir = new User('Shir', 'https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_640.jpg', []);
    const ahava = new User('Ahava', 'https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_640.jpg', []);
    usersArray.push(bar, netanel, shir, ahava);
}

//creat class how join the user to his imagse.
class UsersImg {
    id: string;
    constructor(public user: User[]) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
}
const usersImgArray: UsersImg[] = getUsersImgFromLocalStorage();
if (usersImgArray.length === 0) {
    const barImg = new UsersImg([usersArray[0]]);
    const netanelImg = new UsersImg([usersArray[1]]);
    const shirImg = new UsersImg([usersArray[2]]);
    const ahavaImg = new UsersImg([usersArray[3]]);
    usersImgArray.push(barImg, netanelImg, shirImg, ahavaImg);
};
console.log(usersImgArray);

//Image local storage
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

//User local storage
function saveUserToLocalStorage(user: User[]) {
    localStorage.setItem('usersArray', JSON.stringify(user));
}

function getUsersFromLocalStorage(): User[] {
    try {
        const usersStorage = localStorage.getItem('usersArray');

        if (!usersStorage) return [];

        const usersArray = JSON.parse(usersStorage);

        if(!usersArray) throw new Error('Users not found');
        if(!Array.isArray(usersArray)) throw new Error('usersArray is not array');

        const users = usersArray.map(user => new User(user.name, user.imageProfile, user.imagse));
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}

//usersImg local storage
function saveUsersImgToLocalStorage(usersImg: UsersImg[]) {
    localStorage.setItem('usersImgArray', JSON.stringify(usersImg));
}

function getUsersImgFromLocalStorage(): UsersImg[] {
    try {
        const usersImgStorage = localStorage.getItem('usersImgArray');

        if (!usersImgStorage) return [];

        const usersImgArray = JSON.parse(usersImgStorage);

        if(!usersImgArray) throw new Error('Users not found');
        if(!Array.isArray(usersImgArray)) throw new Error('usersImgArray is not array');

        const usersImg = usersImgArray.map(usersImg => new UsersImg(usersImg.user));
        return usersImg;
    } catch (error) {
        console.error(error);
        return [];
    }
}