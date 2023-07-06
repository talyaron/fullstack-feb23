//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
class Img {
    id: string;
    constructor(public image: string, public description: string) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}

const imageArray = [];
const image1 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My image');
const image2 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My new image');
imageArray.push(image1, image2);

class User {
    id: string;
    constructor(public name: string, public followUp: number, public followers: number, public imageProfile: string, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const usersArray = [];
const bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
const netanel = new User('Netanel', 657, 603, 'https://pixlr.com/images/index/remove-bg.webp', Img[1]);
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.