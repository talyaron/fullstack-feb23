// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User

// Render all instances of user into cards of profiles

//// complete on your own the class puzzle

// 1) Create a form with the following inputs:

// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user
// to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

class User{
    constructor(public userName:string, public birthYear:number, public imgURL:string ,public favoriteColor:string){}
}

const userArray:User[] = new Array(); 


function handleSubmit(ev:any){
    try {
        ev.preventDefault();
        console.dir(ev);
        const username = ev.target.username.value;
        const birthYear = ev.target.birthYear.valueAsNumber;
        const imgURL = ev.target.imgURL.value;
        const favoriteColor = ev.target.favoriteColor.value;
        const user = new User(username, birthYear, imgURL, favoriteColor);
        console.log(user)
        userArray.push(user);
        renderCard(user);
    } catch (error) {
        console.error(error);
    }
}

// function handleColor(ev:any){
//     try {
       
    
//         document.body.style.backgroundColor = ev.target.value;  
//     } catch (error) {
//         console.error(error);
//     }
// }