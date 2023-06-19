//create a form for user profile (with name, image (url), preferd color, year of birth)
//On submit, add the new profiles in to an array of class User
//Render all instances of user into cards of profiles.

//step 1:
//bild a class for user

class User {
    constructor (public username:string, public urlimg: string, public peColor: string, public yearOfBirth: number){

    }
    calculateAge (){
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

// bild an array of this class

const usersArray: User[] = []

//bild a function that get the data from the user and put it in the class and store the new class into the array

function handleSubmit(event: any){
    try {
    event.preventDefault();
    const username = event.target.username.value;
    console.log(username);
    const urlimg =  event.target.urlimg.value;
    const peColor =  event.target.peColor.value;
    const yearOfBirth =  event.target.yearOfBirth.value;
    usersArray.push(new User(username, urlimg, peColor, yearOfBirth));
    console.dir(usersArray);    
    } catch (error){
        console.log(error)
    }
}

//step 2:
//criate a card (css)
//put the data from the user on the card
//show the card onscreen

//step 3:
//show all users that store in the array as carsd on-screen
