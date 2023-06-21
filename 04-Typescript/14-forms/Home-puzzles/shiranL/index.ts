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
                            <button class="updateBtn" data-user="${this.userName}" onclick="updateUser('${this.userName}')">UPDATE</button>
                            </div>`;

                             // Create a temporary element to hold the new user card
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const userCard = tempDiv.firstChild as HTMLElement;

        // Set initial opacity to 0 and add transition
        userCard.style.opacity = '0';
        userCard.style.transition = 'opacity 0.5s ease-in';

        // Append the card to the root element
        root.appendChild(userCard);

        // Trigger the transition by setting opacity to 1 after a small delay
        setTimeout(() => {
            userCard.style.opacity = '1';
        }, 10);
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
                userCard.style.color = getFontColor(color);

                const updateBtn = userCard.querySelector('.updateBtn');
        if (updateBtn) {
          updateBtn.style.backgroundColor = getFontColor(color);
          updateBtn.style.color = color;
        }
            }
        });
    }
}
function getFontColor(color: string): string {
    // Convert color to RGB format
    debugger;
    color = color.replace('#', '');
    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);
  
    // Calculate brightness using a formula
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  
    // Determine the font color based on brightness
    if (brightness > 125) {
      return 'black';
    } else {
      return 'white';
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

    const field = prompt("Which field would you like to update? (userName, imageURL, color, yearOfBirth)");// which filed to updae
    if (!field) {
       throw new Error ("no field to update")
    }
    let newValue  = prompt("Enter new userName:");   // new value to update
    let elem:any = document.querySelector(`#A${user.id}`);  // html card user to update;
    switch (field) {
        case "userName":
            if (newValue && elem )
            {
                elem.remove(); // Remove the element from the DOM
                user.userName=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        case "imageURL":
            if (newValue && elem )
            {
                elem.remove(); // Remove the element from the DOM
                user.imageURL=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
        case "color":
            if (newValue && elem )
            {
                elem.remove(); // Remove the element from the DOM
                user.color=newValue;
                user.renderUser(root);
                cardcolorStyle();
              } 
            break;
           
        case "yearOfBirth":
            if (newValue && elem )
            {
                elem.remove(); // Remove the element from the DOM
                user.yearOfBirth=Number(newValue);
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
