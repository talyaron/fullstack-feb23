// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.

//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.

// import { Img } from './dist/invoice.js';

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

//creat view to show the user profile.

function showUserImg(
    HTMLElement: HTMLElement | Element | null,
    userImg: UserImg[]) {
    try {
        if (!HTMLElement) throw new Error('Root element is not found');
        const html =
            userImg.map((userImg) => {
            return ` <div class="userPost">
            <div class="userPost__name">
            <img src="${userImg.user.imageProfile}">
            <h3>${userImg.user.name}</h3>
            </div>
              <div class="userPost__img">
                <img src="${userImg.user.imageProfile}">
              </div>
            </div>`;
            }).join('');
        HTMLElement.innerHTML = html;

        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));

    } catch (error) {
        console.error(error);
    }
}
showUserImg(document.querySelector('#profile'), userImgArray);

//creat a butten to add new image.
function addNewImage(HTMLElement: HTMLElement | Element | null) {
    try {
        if (!HTMLElement) throw new Error('Root element is not found');
        const html = ` <form onclick="handleAdd(event)">
        <button class="addNewImage">+</button>
        </form>`;
        HTMLElement.innerHTML += html;
        
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    } catch (error) {
        console.error(error);
    }
}
addNewImage(document.querySelector('#profile'));

function handleAdd(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
  
        location.href = "addPost.html"
    } catch (error) {
        console.error(error);
    }
  };

//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.