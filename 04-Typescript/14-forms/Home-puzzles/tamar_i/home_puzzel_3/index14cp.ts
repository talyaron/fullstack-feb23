//create a form for user profile (with name, image (url), preferd color, year of birth)
//On submit, add the new profiles in to an array of class User
//Render all instances of user into cards of profiles.

//step 1:
//bild a class for user

class User {
    constructor(public username: string, public imageUrl: string, public preferdColor: string, public yearOfBirth: number) {
    }
    calculateAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    renderCards(root: HTMLElement | null) {
        try {
            if (!root) throw new Error("missing root element");
            let cardstoHTML = `<div class = 'wrapper' color="${this.preferdColor}">`;
            cardstoHTML = cardstoHTML + usersArray.map((card) =>
                `<p>name: ${card.username}.</p> <img src=${card.imageUrl}>  <p>age:${card.yearOfBirth}`).join("");
            cardstoHTML += `</div>`;
        } catch (error) {
            console.error(error);
        }
    }

}

// bild an array of this class

const usersArray: User[] = []

//bild a function that get the data from the user and put it in the class and store the new class into the array

function handleSubmit(event: any) {
    try {
        event.preventDefault();
        const username = event.target.username.value;  //the name after the target mast be the same as in the name defined in the HTML!
        console.log(username);
        const imageUrl = event.target.imageUrl.value;
        const preferdColor = event.target.preferdColor.value;
        const yearOfBirth = event.target.yearOfBirth.value;
        const newUser = new User(username, imageUrl, preferdColor, yearOfBirth);
        console.log(newUser);
        usersArray.push(newUser);
        console.dir(usersArray);
        styleCard();
    } catch (error) {
        console.log(error)
    }
}

//step 2:
//criate a card (css)

function styleCard(){

    if (root) {
        root.style.width = '100%';

        const wrapper :any= root.querySelectorAll('.wrapper');
        debugger;
        wrapper.forEach((wrapper: any) => {
            const color = wrapper.getAttribute('color');
            if (color) {
                wrapper.style.backgroundColor = color;
            }
        });
    }
}

//put the data from the user on the card

const root = document.querySelector(".root") as HTMLDivElement;

//show the card onscreen


//step 3:
//show all users that store in the array as carsd on-screen
