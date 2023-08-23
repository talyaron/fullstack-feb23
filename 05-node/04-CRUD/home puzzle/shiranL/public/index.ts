// //index.ts

interface Friend {
    name: string;
    email: string;
    phone: number;
    instegram: string;
    imgSrc:string;
    id?:string;
  }

  
  async function getfriends() {
    try {
      const response = await fetch('/API/get-friends')
      const results = await response.json();
      const { friends } = results;
      if (!Array.isArray(friends)) throw new Error("products are not array");
      console.log(friends)
      return friends;
  
    } catch (error) {
      console.error(error);
      return []
    }
  }

async function handleGetFriends() {
  const friends = await getfriends();

  const root = document.querySelector('#root');
  renderFriends(friends, root as HTMLDivElement);


}
function renderFriendHTML(friend: Friend) {
  try {
    const html = `<div class="friend">
      <img src="${friend.imgSrc}" />
      <h3>${friend.name}</h3>
      <p> phone: ${friend.phone}</p>
      <p> email: ${friend.email}</p>  
      <p> instegram: ${friend.instegram}</p>
      <form id="${friend.id}" onsubmit="handleUpdateFriendName(event)">
      <input type="text" name="name"  value="${friend.name}" placeholder="name" />
      <button type="submit">Update</button></form>
      <button onclick="handleDeleteFriend('${friend.id}')">Delete</button>
    </div>`
    return html;
  } catch (error) {
    console.error(error)
    return ""
  }
}
function renderFriends(friends: Friend[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElement not found")
    console.log(friends)
    if (!Array.isArray(friends)) throw new Error("products are not array");
    const friendsHTML = friends.map(friend => renderFriendHTML(friend)).join("")
    HTMLElement.innerHTML = friendsHTML;
  } catch (error) {
    console.error(error)
  }
}

  
async function handleAddFriend(event: any) {
  try {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const imgSrc = event.target.imgSrc.value;
    const instegram = event.target.instegram.value;
    if (!name || !email || !phone || !instegram) {
      throw new Error('Please complete all fields');
    }
    const friend: Friend = { name, email, phone, instegram,imgSrc };
    const response = await fetch('/API/add-friend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(friend)
    }); 
    const result = await response.json();
    console.log(result);
     // Clear the form after successful submission
     const friendForm = document.getElementById('friendForm') as HTMLFormElement;
     friendForm.reset();
    

  } catch (error) {
    console.error(error);
  }

}


//delete - friend


async function handleDeleteFriend(id:string){
  try {
    const response = await fetch('/API/delete-friend', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    });
    const result = await response.json();
    console.log(result);
    const {friends} = result;

    renderFriends(friends, document.querySelector('#root') as HTMLDivElement);

  } catch (error) {
    console.error(error)
  }
}

async function handleUpdateFriendName(ev:any){
  try {
    ev.preventDefault();
    const name = ev.target.name.value;
    const id = ev.target.id;
    console.log(id, name)

    const response = await fetch('/API/update-friend', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, name})
    });

    const result = await response.json();
    console.log(result);
    const {friends} = result;
    renderFriends(friends, document.querySelector('#root') as HTMLDivElement);

  } catch (error) {
    console.error(error)
  }
}