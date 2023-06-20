// complete on your own the class puzzle

// 1) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

function addAnImage(event:any) {
    event.preventDefault();
    try{
        const image:string = event.target.imageUrl.value;
        const imageSize:number = event.target.imageSize.valueAsNumber;
        console.log(image,imageSize)
    
        const root = document.querySelector('#root') as HTMLDivElement;
        if (root){
            root.innerHTML= `${image}`;
        }
    }

    catch(error) {
        console.error(error);
    }

}









// 2) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
// Use the "Puzzle Users" class:

// 3) Access the "Puzzle class" class, which likely represents a collection of user data or user profiles.
// Edit each card: Update the information contained in each card, such as modifying user details or deleting a card from the collection.
// These instructions outline three different tasks: creating a form to render an image with a specified width, creating a form to render multiple images, and using the "Puzzle Users" class to edit user cards. Each task has specific requirements and actions to be performed.

// <h1>Forms</h1>
// <form onsubmit="handleSubmit(event)">
//     <input type="text" name="username" onkeyup="handleInput(event)" required>
//     <input type="password" name="password" onkeyup="handleInput(event)" required>
//     <input type="number" name="age" onkeyup="handleInput(event)">
//     <input type="datetime-local" name='date' oninput="handleInput(event)">
//     <input type="submit" value="Send">
//     <button type="submit">Send</button>
//     <input type="reset" value="Reset">
// </form>
// <input type="color" oninput="handleColor(event)">
// <div id="root"></div>















// const form = document.querySelector('form') as HTMLFormElement;

// // get all the forms in the html
// document.forms

// // get the second form in html
// document.forms[1]

