class User{
    constructor (public id :number ,public userName:string, public imageURL:string, public color:string, public yearOfBirth:number) {

    }
    calculateAge (){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    renderUser(root: HTMLElement | null) {
        try {
           
            if (!root) throw new Error("missing root element");
            const html = `<div class="userCard" color="${this.color}" id="A${this.id}">
            <img class="userImg" src="${this.imageURL}">
            <h4 class="userName">my Name: ${this.userName}</h4>
            <h3 class="userAge">my Age: ${this.calculateAge()}</h3>
            <button class="updateBtn" data-user="${this.userName}" onclick="updateUser('${this.userName}')">Update</button>
        </div>`;
            root.innerHTML += html;
        } catch (error) {
            console.error(error);
        }
    }
}

const users : User[] = [] ;
const root: HTMLElement | null = document.querySelector(".root");
let idIndex=1000;
function cardcolorStyle(){

    if (root) {
        root.style.width = '100%';
        const usersCards :any= root.querySelectorAll('.userCard');
        usersCards.forEach((userCard) => {
            const color = userCard.getAttribute('color');
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}

function addUser(ev: any) {
    try {
        ev.preventDefault();
        const user: User = new User(idIndex++,
            ev.target.userName.value,
            ev.target.userURL.value,
            ev.target.userColor.value,
            ev.target.yearOfBirth.valueAsNumber
        );

        if (user) {
          const addUserForm= document.querySelector(`#addUserForm`)
          if (addUserForm)
          addUserForm.reset();
            users.push(user);
            user.renderUser(root);
            cardcolorStyle();
        }
    } catch (error) {
        console.error(error);
        return;
    }
}


function updateUser(userName: string) {
   try {
    const user = users.find(user => user.userName === userName);
    if (!user) {
        console.error("User not found");
        return;
    }

   // deleteUserCard(user.userName);

    const field = prompt("Which field would you like to update? (userName, imageURL, color, yearOfBirth)");
    if (!field) {
       throw new Error ("no field to update")
    }

    let newValue;
    let elem:any;
    switch (field) {
        case "userName":
            newValue = prompt("Enter new userName:");
            if (newValue)
             elem = document.querySelector(`#A${user.id}`);  // html card user
             if (elem) {
                elem.remove(); // Remove the element from the DOM
                user.userName=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        case "imageURL":
            newValue = prompt("Enter new userName:");
            if (newValue)
             elem = document.querySelector(`#A${user.id}`);  // html card user
             if (elem) {
                elem.remove(); // Remove the element from the DOM
                user.imageURL=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        case "color":
            newValue = prompt("Enter new userName:");
            if (newValue)
             elem = document.querySelector(`#A${user.id}`);  // html card user
             if (elem) {
                elem.remove(); // Remove the element from the DOM
                user.color=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        case "yearOfBirth":
            newValue = prompt("Enter new userName:");
            if (newValue)
             elem = document.querySelector(`#A${user.id}`);  // html card user
             if (elem) {
                elem.remove(); // Remove the element from the DOM
                user.yearOfBirth=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        default:
            console.log("Invalid field specified");
            return;
    }

    
   } catch (error) {
    console.error(error);
    
   }
}
