
interface Friend {
    name: string;
    email: string;
    phoneNumber: number;
    instagramAccount: string;
    id?:string;
} 

async function handleAddFriend(event:any) {
    try {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.valueAsNumber;
        const instagramAccount = event.target.instagramAccount.value;
        if(!name || !email || !phoneNumber || !instagramAccount){
            throw new Error("Please complete all fields")
        }

        const friend: Friend = {name, email, phoneNumber, instagramAccount};

        const response = await fetch('/API/add-friend', //the res from the server
        { 
            method: 'POST',    //the req
            headers: {'Content-Type': 'application/json'}, //the req
            body: JSON.stringify(friend) //the req
        });

        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.error(error);
    }
}

async function getFriends (){
    try {
        const response = await fetch('/API/get-friends')
        const results = await response.json();
        const { friends } = results;
        if(!Array.isArray(friends)) throw new Error("friends are not array");
        console.log(friends);
        console.log(results);
        return friends
        
    } catch (error) {
        console.error(error);
        return []
    }
}

// When rendering we don't need to use async before function
function renderFriendHTML (friend: Friend){
    try {
        const html = `<div class="friend">
        <h2>Name: ${friend.name}</h2>
        <img src ="${friend.instagramAccount}" />
        <h3>Email: ${friend.email}</h3>
        <p>Phone number: ${friend.phoneNumber}</p>
        <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
        </div>`
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

function renderFriends(friends: Friend[], HTMLElement: HTMLDivElement ) {
    try {
        if(!HTMLElement) throw new Error("HTMLElement not found")
        console.log(friends);
        if(!Array.isArray(friends)) throw new Error ("Friends are not array")
        const friendsHTML = friends.map(friend => renderFriendHTML(friend)).join("")
    HTMLElement.innerHTML = friendsHTML;
    } catch (error) {
        console.error(error)
    }
}

async function handleGetFriends() {
    const friends = await getFriends();

    const root = document.querySelector("#root") ;
    renderFriends(friends, root as HTMLDivElement);
}

async function handleDeleteFriend(id:string){
    try {
        const response = await fetch("/API/delete-friend", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        const result = await response.json();
        console.log(result);
        const {friends} = result

        renderFriends(friends, document.querySelector("#root") as HTMLDivElement)
        
    } catch (error) {
        console.error(error)
    }
}




// We need to use event in function when it get us some info