// model
class Friend {
    id:string;
    constructor(public name:string, public image:string, public phonenumber:string) {
        this.id= `id- ${new Date().getTime()}-${Math.random()}`
    }
}

const friend:Friend[]= []

// view
// input form- in html


// from view to model: view-control-model

function handleAddFriend(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const image  = ev.target.elements.img.value;
        const phonenumber = ev.target.elements.PhoneNumber.value;


        const newFriend= new Friend (name, image, phonenumber)
        friend.push(newFriend)
        
        // save to localstorage
        const newObj = structuredClone(newFriend)
        newObj.name
        localStorage.setItem("friend", JSON.stringify(friend))
        console.log(friend)
      
        
    } catch ( error) {
        console.error(error);
          
    }
}


