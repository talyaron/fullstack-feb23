class Friend {
    name: string;
    email: string;
    phone: string;
    instagram: string;
    id?: string;
}

async function handleAddFriend(event:any) {
    try {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const phone = event.target.phone.valueAsNumber;
      const instagram = event.target.instagram.value;
      if (!name || !email || !phone || !instagram) {
        throw new Error("Please complete all fields");
      }
  
      const friend: Friend = { name, email, phone, instagram };
  
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
      // console.log(friends);
      // console.log(results);
      return friends;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  function renderFriendHTML(friend: Friend) {
    try {
      const html = `<div class="friend">
        <h3>${friend.name}</h3>
        
        <form id="${friend.id}" onsubmit="handleUpdateFriend(event)">
        <input type="text" name="name" value="${friend.name}"/>
        <input type="text" name="email" value="${friend.email}"/>
        <input type="text" name="instagram" value="${friend.instagram}"/>
        <input type="number" name="phone"  value="${friend.phone}" placeholder="Price" /><button type="submit">Update</button></form>
        <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
      </div>`;
      return html;
    } catch (error) {
      console.error(error);
      return "";
    }
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

  async function handleUpdateFriend(ev: any) {
    try {
      // debugger;
      ev.preventDefault();
      const name = ev.target.name.value;
      const id = ev.target.id;
      const phone = ev.target.phone.valueAsNumber;
      // const instagram = "11111";
      const email = ev.target.email.value;
      const instagram = ev.target.instagram.value;
    
  
      const response = await fetch("/API/update-friend", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id,name,phone,email,instagram }),
      });
  
      const result = await response.json();
      console.log(result);
      // const { friends } = result;
      // renderFriends(friends, document.querySelector("#root") as HTMLDivElement);
    } catch (error) {
      console.error(error);
    }
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