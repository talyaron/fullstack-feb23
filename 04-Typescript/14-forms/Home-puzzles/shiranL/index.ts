class User{
    constructor (public userName:string, public imageURL:string, public color:string, public yearOfBirth:number) {

    }
    calculateAge (){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    renderUser(root: HTMLElement | null) {
        try {
           
            if (!root) throw new Error("missing root element");
            const html = `<div class="userCard" color="${this.color}" id="userCard-${this.userName}">
                      <img class="userImg" src="${this.imageURL}">
                      <h4 class="userName">my Name: ${this.userName}</h4>
                      <h3 class="userAge">my Age: ${this.calculateAge()}</h3>
                    </div>`;
            root.innerHTML += html;
        } catch (error) {
            console.error(error);
        }
    }
}

const users : User[] = [] ;
const root: HTMLElement | null = document.querySelector(".root");

function addUser(ev:any) {
    try {
        ev.preventDefault();
        const user:User = new User(ev.target.userName.value, 
                                    ev.target.userURL.value,
                                    ev.target.userColor.value,
                                    ev.target.yearOfBirth.valueAsNumber);
       
    if (user) {
        
        users.push(user)
        user.renderUser(root)
       
        cardStyle();
    }

    } catch (error) {
        console.error(error);
        return
    }
}
function cardStyle(){

    if (root) {
        root.style.width = '100%';
        const userCards :any= root.querySelectorAll('.userCard');
        userCards.forEach((userCard) => {
            const color = userCard.getAttribute('color');
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}

if (root) {
    root.addEventListener('click', function handleClick(event: any) {
      const target = event.target as HTMLElement;
      console.dir(target);
      console.log(target.className);
      
      
      if (target.classList.contains('userCard')) {
        const userCardId = target.id;
        const selectedCard = document.getElementById(userCardId);
        if (selectedCard) {
          selectedCard.classList.toggle('selected');
        }
      }
    });
  }