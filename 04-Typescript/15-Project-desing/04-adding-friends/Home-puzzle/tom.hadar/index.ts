
class Friend {
  id: string;
  isEdit: boolean;
  constructor(
    public friendName: string,
    public friendNumber: number,
    public url: string,
    id?: string | null
  ) {
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

const friends: Friend[] = [];

function inputAddFriend(event) {
  try {
    event.preventDefault();
    const friendName = event.target.elements.friendName.value;
    const friendNumber = event.target.elements.friendNumber.value;
    const url = event.target.elements.url.value;
    const id = event.target.elements.id;
    const data = new Friend(friendName, friendNumber, url, id);
    friends.push(data);
    event.target.reset();
    const root = document.querySelector("#root");
    render(friends, root);
  } catch (error) {
    console.error(error);
  }
}

function render(friends, root) {
  try {
    const html = friends
      .map((friend) => {
        if (friend.isEdit) {
          return `<div class="card">
        <form onsubmit="handleSetEditFriend(event)" id="${friend.id}">
        <img src="${friend.url}">
              <input class=input1 type="text" name="friendName" value="${friend.friendName}">
              <input class=input2 type="text" name="friendNumber" value="${friend.friendNumber}">
              <br>

              <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
              <input type="submit" value="SET">
          </form>
        </div>`;
        } else {
          return `<div class="card">
          <img src="${friend.url}">
          <p>Name: ${friend.friendName}</p>
          <p>Number: ${friend.friendNumber}</p>
          <button onclick="addToProduct('${friend.id}')"> + </button>
          <button onclick="revToProduct('${friend.id}')"> - </button>
          <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
          <button onclick="handleEdit('${friend.id}')">Edit</button>
        </div>`;
        }
      })
      .join("");

    root.innerHTML = html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function handleEdit(id) {
  const friend = friends.find((friend) => friend.id === id);
  if (friend) {
    friend.setEdit(true); // שינוי הערך לעריכה
    const root = document.querySelector("#root");
    render(friends, root);
  }
}

function handleSetEditFriend(event) {
  event.preventDefault();
  const id = event.target.id;
  const friendName = event.target.elements.friendName.value;
  const friendNumber = event.target.elements.friendNumber.value;
  const friend = friends.find((friend) => friend.id === id);
  if (friend) {
    friend.friendName = friendName;
    friend.friendNumber = friendNumber;
    friend.setEdit(false); // שינוי הערך לצפייה
    const root = document.querySelector("#root");
    render(friends, root);
  }
}

function handleDeleteFriend(id) {
  const index = friends.findIndex((friend) => friend.id === id);
  if (index !== -1) {
    friends.splice(index, 1);
    const root = document.querySelector("#root");
    render(friends, root);
  }
}

function addToProduct(id) {
  const friend = friends.find((friend) => friend.id === id);
  if (friend) {
    friend.friendNumber++;
    const root = document.querySelector("#root");
    render(friends, root);
  }
}

function revToProduct(id) {
  const friend = friends.find((friend) => friend.id === id);
  if (friend) {
    friend.friendNumber--;
    const root = document.querySelector("#root");
    render(friends, root);
  }
}