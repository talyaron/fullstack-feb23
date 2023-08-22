interface Friend {
  name: string;
  email: string;
  phone: string;
  igName: string;
  img?: string;
}



async function handleAddFriend(event: any) {
  try {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const igName = event.target.igName.value;
    const img = event.target.img.value;

    if (!name || !email || !phone || !igName) {
      throw new Error('Please complete all fields')
    }

    const friend: Friend = { name, email, phone, igName, img }

    const response = await fetch('/API/add-friend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(friend)
    })

    const results = await response.json();
    console.log(results);


  } catch (error) {
    console.error(error)
  }
}

async function getFriends() {
  try {
    const response = await fetch('/API/get-friends')
    const results = await response.json()
    const {friends} = results;
    if (!Array.isArray(friends)) throw new Error ('Friends are not array')
    console.log(friends)
    console.log(results)
    return friends;

  } catch (error) {
    console.error(error)
    return []
  }
}

function renderFriendsHTML(friend: Friend) {
  try {
    const html = `<div class="friend">
    <h3>Name: ${friend.name}</h3>
    <h4>email: ${friend.email}</h4>
    <h4>phone: ${friend.phone}</h4>
    <h4>IG: ${friend.igName}</h4>
    </div>`
    return html;
  } catch (error) {
    console.error(error)
    return ""

  }
}

function renderFriends(friends: Friend[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) {
      throw new Error('HTMLElement not found')
      const friendsHTML = friends.map(friend => renderFriendsHTML(friend)).join("")
      HTMLElement.innerHTML = friendsHTML;
    }
  } catch (error) {
    console.error(error)

  }
}

async function handleGetFriends() {
  const friends = await getFriends();

  const root = document.querySelector("#root")
  renderFriends(friends, root as HTMLDivElement);
}