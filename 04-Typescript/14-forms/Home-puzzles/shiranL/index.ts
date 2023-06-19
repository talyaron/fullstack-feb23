class User{
    constructor (public userName:string, public imageURL:string, public color:string, public yearOfBirth:number) {

    }
    calculateAge (){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    renderUser(root: HTMLElement | null) {
        try {
           
            if (!root) throw new Error("missing root element");
            const html: string = `<div class="userCard" color="${this.color}"><img class="userImg" src="${this.imageURL}"></img></div>`;
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
        // root.style.backgroundColor = 'aqua';

        const userCards :any= root.querySelectorAll('.userCard');
        debugger;
        userCards.forEach((userCard) => {
            const color = userCard.getAttribute('color');
            if (color) {
                userCard.style.backgroundColor = color;
            }
        });
    }
}