//Instegram Profile page.

//MVC - Model View Controller

//class - user, image.
class Img {
    id: string;
    constructor(public image: string, public description: string) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const imageArray: Img[] = [];
const image1 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My image');
const image2 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My new image');
imageArray.push(image1);


class User {
    id: string;
    constructor(public name: string, public followUp: number, public followers: number, public imageProfile: string, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}
const usersArray: User[] = [];
const bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
const netanel = new User('Netanel', 657, 603, 'https://pixlr.com/images/index/remove-bg.webp', Img[1]);

//view - show the user profile.
//create a new user profile.
createProfile(document.querySelector('#profile'));

function createProfile(
    user: User,
    image: Img,
    htmlElement: HTMLElement | any) {
    try {
        const html =
          
        
    } catch (error) {
        console.error(error);
    }
}