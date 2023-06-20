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
const users: User[] = [];
const usersRender: any = document.querySelector(".usersRender")
const usersPopup:any = document.querySelector(".usersPopup")

class User {
    constructor(public imgUrl: string, public imgSize: number) { }
}
function handleSubmit(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        const imgUrl = ev.target.imgUrl.value;
        const imgSize = ev.target.imgSize.value;
        const result: User = { imgUrl, imgSize };
        if (usersPopup) {
            usersPopup.style.display = 'block';  // display the div containing the users renderings in a modal box
            usersPopup.innerHTML = "You have" + (users.length + 1) + " image(s)"; 	// Display number of images. 	// Display user names. 	// Display user cards.

            users.push(result)
        }


    } catch (error) {
        console.error(error);
    }
}



function test() {

    if (users) {
        let usersHtml = ""
        users.forEach(user => {
            usersHtml += `<div class='user'><img src='${user.imgUrl}' style="width:${user.imgSize}vw"></div>`

            console.log(usersHtml)
            usersRender.innerHTML = usersHtml;
        })
    }
}

