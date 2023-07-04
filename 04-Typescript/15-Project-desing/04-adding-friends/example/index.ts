//model

class Friend {
    id: string;
    isEdit: boolean = false;
    constructor(public name: string, public image: string, public phoneNumber: string, id?: string | null) {
        if (id) {
            this.id = id;
        } else {
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        }
    }

    setEdit(set: boolean) {
        this.isEdit = set;
    }
}

// const someone = new Friend("Katya", "...", "....", "id-1231234")
// const someone11 = new Friend("Katya", "...", "....")

const friends: Friend[] = getFriendsFromStorage();

renderAllFriends(friends, document.querySelector("#rootFriends"));

function getFriendsFromStorage(): Friend[] {

    try {
        //get friends from locastorage (string)
        const friendsString = localStorage.getItem("friends");
        if (!friendsString) return [];

        //convert string to array of objects
        const friendsArray = JSON.parse(friendsString);

        //convert array of objects to array of friends
        const friends: Friend[] = friendsArray.map((friend: Friend) => {
            return new Friend(friend.name, friend.image, friend.phoneNumber, friend.id);
        })

        return friends

    } catch (error) {
        console.error(error)
        return []
    }

};


//view
//input form

// from view to model: view-control-model

function handleAddFriend(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const image = ev.target.elements.image.value;
        const phoneNumber = ev.target.elements.phoneNumber.value;

        const newFriend = new Friend(name, image, phoneNumber);
        friends.push(newFriend);
        renderAllFriends(friends, document.querySelector("#rootFriends"))

        //save to localStorage

        localStorage.setItem("friends", JSON.stringify(friends))
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}

//render list of friends
//model -> controler --> view

function renderAllFriends(friends: Friend[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error("No element");
        const html = friends.map(friend => renderFriendCard(friend)).join(' ')

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}


function renderFriendCard(friend: Friend) {
    try {
        if (friend.isEdit) {
            return `<div class="card">
                    <img src="${friend.image}">
                    <form onsubmit="handleSetEditFriend(event)" id="${friend.id}">
                        <input type="text" name="name" value="${friend.name}">
                        <input type="text" name="phoneNumber" value="${friend.phoneNumber}">
                        <br>
                        <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
                        <input type="submit" value="SET">
                    </form>
                </div>
                `
        } else {
            return `<div class="card">
        <img src="${friend.image}">
        <p>${friend.name}</p>
        <p>${friend.phoneNumber}</p>
        <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
        <button onclick="handleEdit('${friend.id}')">Edit</button>
    </div>
`
        }


    } catch (error) {
        console.error(error);
        return ''
    }
}

//Delete

//button (view (card)) -> control to delete from array -> edit model (and save to local) -> reder new model-view 


function handleDeleteFriend(friendId: string) {
    try {
        const index = friends.findIndex(friend => friend.id === friendId);
        if (index === -1) throw new Error("Could not find friend");

        friends.splice(index, 1);
        localStorage.setItem("friends", JSON.stringify(friends))

        renderAllFriends(friends, document.querySelector("#rootFriends"))

    } catch (error) {
        console.error(error);
    }
}


//Edit
//

// enable editing

function handleEdit(friendId: string) {
    try {
        const friend = friends.find(friend => friend.id === friendId)
        if (!friend) throw new Error("couldnt find friend")

        friend.setEdit(true);
        renderAllFriends(friends, document.querySelector("#rootFriends"))
    } catch (error) {
        console.error(error);
    }
}

function handleSetEditFriend(ev:any){
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const phoneNumber = ev.target.phoneNumber.value;
        const friendId:string = ev.target.id;

        const friend:Friend|undefined = friends.find(friend => friend.id === friendId)
        if(!friend) throw new Error("couldnt find friend")
        friend.name = name;
        friend.phoneNumber = phoneNumber
        friend.setEdit(false)
        console.log(friends)
        localStorage.setItem("friends", JSON.stringify(friends))
        renderAllFriends(friends, document.querySelector("#rootFriends"));


    } catch (error) {
        console.error(error);
    }
}