// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User

// Render all instances of user into cards of profiles

//// complete on your own the class puzzle

// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user
// to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

// 2) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen,
// multiplied by the number provided by the user.
// Use the "Puzzle Users" class:


class User {
    id: string;
    constructor(public userName: string, public birthYear: number, public imgURL: string, public favoriteColor: string, public width: number, public NumberOfImages: number) {
        this.id = `id-${Math.random()}`;
    }
    age() {
        const age = new Date().getFullYear() - this.birthYear;
        return age;
    }
}

const usersArray: User[] = new Array();


function handleSubmit(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        console.dir(ev);
        const username = ev.target.username.value;
        const birthYear = ev.target.birthYear.valueAsNumber;
        const imgURL = ev.target.imgURL.value;
        const favoriteColor = ev.target.favoriteColor.value;
        const width = ev.target.width.valueAsNumber;
        const NumberOfImages = ev.target.valueAsNumber;
        const user = new User(username, birthYear, imgURL, favoriteColor, width, NumberOfImages);

        usersArray.push(user);

        renderCards(usersArray, document.querySelector("#cards"));

    } catch (error) {
        console.error(error);
    }
}

function renderCards(users: User[], element: HTMLElement | null) {
    try {
        if (!element) throw new Error("element is not defind");
        const html = users.map((user) => renderCard(user)).join(" ");

        element.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


function renderCard(user: User) {
    try {
        const html =
            `<div id="${user.id}" class="card" style="background-color: ${user.favoriteColor}">
             <div class="userName"> Name: ${user.userName} </div>
             <div class="age"> Age: ${user.age()} </div>
             <img class="img" src="${user.imgURL}" style="width: ${user.width}vw">
        </div>`;

        return html

    } catch (error) {
        console.error(error);
    }
}

function renderMeniImgs(user) {
    try {
      const numberOfImages = parseInt(user.NumberOfImages);
      if (isNaN(numberOfImages) || numberOfImages <= 0) {
        throw new Error("Invalid number of images");
      }
  
      return numberOfImages;
    } catch (error) {
      console.error(error);
    }
  }
  

// function renderMeniImgs(user: User | any) {
//     try {
//         // if(!user.NumberOfImages || user.imgURL) throw new Error(" ");
//         return user.imgURL * user.NumberOfImages

//     } catch (error) {
//         console.error(error);
//     }
// }