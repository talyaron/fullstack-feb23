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
debugger;
   
    if (user) {
        
        user?.renderUser(root)


        users.push(user)
    }


        
    } catch (error) {
        console.error(error);
        return
    }
}
