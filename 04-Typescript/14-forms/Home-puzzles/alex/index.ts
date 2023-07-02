// complete on your own the class puzzle

// 1) Create a form with the following inputs:
// `
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.

class User{
    constructor (public userName:string, public imageURL:string, public color:string, public yearOfBirth:number) {

    }
    calculateAge (){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    renderUser(root: HTMLElement | null) {
        try {
            if (!root) throw new Error("missing root element");
            const html: string = `<div class='card'><img src="${this.imageURL}"></img></div>`;
            root.innerHTML += html;
        } catch (error) {
            console.error(error);
        }
    }

}
    
const users : User[] = [] ;

function addUser(ev:any) {
    try {
        ev.preventDefault();
        const user:User = new User(ev.target.userName.value, 
                                    ev.target.userURL.value,
                                    ev.target.userColor.value,
                                    ev.target.yearOfBirth.valueAsNumber);
       const root: HTMLElement | null = document.querySelector(".root");

   
    if (user) {
        
        user?.renderUser(root)


        users.push(user)
    }


        
    } catch (error) {
        console.error(error);
        return
    }
}