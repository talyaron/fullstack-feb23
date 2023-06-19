// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User

// Render all instances of user into cards of profiles
class User {
    constructor(public userName:string , public imgUrl: string,  public preferdColor:string , public year:number){
        
    }
}
const Users:User[]= []
function handleSubmit(ev:any){
    try {
        ev.preventDefault();
       const username = ev.target.elements.userName.value;
        const imgUrl = ev.target.elements.imgUrl.value;
        const year = ev.target.elements.year.valueAsNumber;
        const color = ev.target.elements.preferdColor.value;
        const person = new User( username, imgUrl, color, year)
       
        console.log(person)
    } catch (error) {
        console.error(error);
    }
}
