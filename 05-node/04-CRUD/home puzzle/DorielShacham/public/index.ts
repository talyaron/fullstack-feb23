interface Friend {
  firstName: string;
  lastName: string;
  age: number;
  imgUrl: string;
  id?: string;
}
getfriends();

async function handleAddFriend(event: any) {
    try {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.valueAsNumber;
        const imgUrl = event.target.imgUrl.value;

        const errorMessageElement: HTMLElement | null = document.getElementById("errorMessage");

        if (!firstName || !lastName || !age || !imgUrl) {
            const errorMessage = "Please complete all fields.";
            errorMessageElement.textContent = errorMessage;
            errorMessageElement.style.display = "block"; 
            return; 
        }

        errorMessageElement.style.display = "none"; 

        const friend: Friend = { firstName, lastName, age, imgUrl };
        const response = await fetch("/API/add-friend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friend),
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getfriends() {
  try {
    const response = await fetch("/API/get-friends");
    const results = await response.json();
    const { friends } = results;
    if (!Array.isArray(friends)) throw new Error("friends are not array");
    console.log(friends);
    console.log(results);
    return friends;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderFriendHTML(friend: Friend) {
  const html = `<div class="friend">
        <img src="${friend.imgUrl}" />
        <h3>${friend.firstName} ${friend.lastName}</h3>
        <p>Age: ${friend.age}</p>
        <form id="${friend.id}" onsubmit="handleUpdateFriend(event)">
            <input type="number" name="age" value="${friend.age}" placeholder="Age" />
            <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
    </div>`;
  return html;
}

function renderFriends(friends: Friend[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElement not found");
    console.log(friends);
    if (!Array.isArray(friends)) throw new Error("friends are not array");
    const friendsHTML = friends
      .map((friend) => renderFriendHTML(friend))
      .join("");
    HTMLElement.innerHTML = friendsHTML;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetFriends() {
  const friends = await getfriends();

  const root = document.querySelector("#root");
  renderFriends(friends, root as HTMLDivElement);
}

async function handleDeleteFriend(id: string) {
  try {
    const response = await fetch("/API/delete-friend", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    console.log(result);
    const { friends } = result;

    renderFriends(friends, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateFriend(ev: any) {
    console.log("asdasd", ev);
    
    try {
      ev.preventDefault();
      console.log("ev.target.age.valueAsNumber", typeof ev.target.age.valueAsNumber);
      
      const age = ev.target.age.valueAsNumber;
      const id = ev.target.id;
  
      const response = await fetch("/API/update-friend", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, age }),
      });
  
      const result = await response.json();
      console.log("Response:", result);
      const { friends } = result;
      renderFriends(friends, document.querySelector("#root") as HTMLDivElement);
    } catch (error) {
      console.error(error);
    }
  }

