// complete on your own the class puzzle

// 1) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.


// 2) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
// Use the "Puzzle Users" class:

// 3) Access the "Puzzle class" class, which likely represents a collection of user data or user profiles.
// Edit each card: Update the information contained in each card, such as modifying user details or deleting a card from the collection.
// These instructions outline three different tasks: creating a form to render an image with a specified width, creating a form to render multiple images, and using the "Puzzle Users" class to edit user cards. Each task has specific requirements and actions to be performed.
class User {
    constructor(public imageUrl, public imageSize ){

    }
}
const arrayOfUser:User[] = new Array()
function rander (user:User) {
    
    try{ 
        const card = document.querySelector('#root');
    if (!card) throw new Error("Missing information");
    card.innerHTML += `<div id="${arrayOfUser.length}" class="roots">
        <img class="imageUrl" src="${user.imageUrl}"> 
        <div class="imageSize" style="width:${user.imageSize}vw:"> </div>`;
  } catch (error) {
    console.error(error);
  }
}

function handleInput(event) {
    console.dir(event)
    console.log(event.target.value);
    const root = document.querySelector('#root');
    if(root) {
        root.innerHTML = event.target.value;
    }
}

function handleSubmit(event) {
   
    const root = document.querySelector('#root');
    if(root) {
        try {
             event.preventDefault();
            console.dir(event);

           const imageUrl = event.target.imageUrl.value;
            const imageSize = event.target.imageSize.value;
            const result =  new User(imageUrl, imageSize);
            arrayOfUser.push(result);
            rander(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    console.log(event)

}

