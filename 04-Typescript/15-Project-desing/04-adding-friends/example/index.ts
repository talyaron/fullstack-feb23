//model

class Friend {
<<<<<<< HEAD
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
=======
  id: string;
  isEdit: boolean = false;
  constructor(
    public name: string,
    public image: string,
    public phoneNumber: string,
<<<<<<< HEAD
<<<<<<< HEAD
    id?: string | null,
=======
    id?: string | null
>>>>>>> 589377e16a074c872107f45e6350324ef7a56e40
=======
    id?: string | null,
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
  ) {
    if (id) {
      this.id = id;
    } else {
      this.id = `id-${new Date().getTime()}-${Math.random()}`;
>>>>>>> 4f4014876ee22bcaa6299a818521bff3bb995fcb
    }

}

const friends: Friend[] = getFriendsFromStorage();

renderAllFriends(friends, document.querySelector("#rootFriends"));

function getFriendsFromStorage(): Friend[] {

    try {
        //get friends from locastorage (string)
        const friendsString = localStorage.getItem("friends");
        if (!friendsString) return [];

<<<<<<< HEAD
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
=======
    //convert array of objects to array of friends
    const friends: Friend[] = friendsArray.map((friend: Friend) => {
      return new Friend(
        friend.name,
        friend.image,
        friend.phoneNumber,
<<<<<<< HEAD
<<<<<<< HEAD
        friend.id,
=======
        friend.id
>>>>>>> 589377e16a074c872107f45e6350324ef7a56e40
=======
        friend.id,
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
      );
    });
>>>>>>> 4f4014876ee22bcaa6299a818521bff3bb995fcb


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
<<<<<<< HEAD
    try {
        if (!htmlElement) throw new Error("No element");
        const html = friends.map(friend => renderFriendCard(friend)).join(' ')
=======
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    debugger;
>>>>>>> 589377e16a074c872107f45e6350324ef7a56e40
=======
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    if (!htmlElement) throw new Error("No element");
    const html = friends.map((friend) => renderFriendCard(friend)).join(" ");
>>>>>>> 4f4014876ee22bcaa6299a818521bff3bb995fcb

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

<<<<<<< HEAD
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
=======
    const friend: Friend | undefined = friends.find(
<<<<<<< HEAD
<<<<<<< HEAD
      (friend) => friend.id === friendId,
=======
      (friend) => friend.id === friendId
>>>>>>> 589377e16a074c872107f45e6350324ef7a56e40
=======
      (friend) => friend.id === friendId,
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    );
    if (!friend) throw new Error("couldnt find friend");
    friend.name = name;
    friend.phoneNumber = phoneNumber;
    friend.setEdit(false);
    console.log(friends);
    localStorage.setItem("friends", JSON.stringify(friends));
    renderAllFriends(friends, document.querySelector("#rootFriends"));
  } catch (error) {
    console.error(error);
  }
}
>>>>>>> 4f4014876ee22bcaa6299a818521bff3bb995fcb
