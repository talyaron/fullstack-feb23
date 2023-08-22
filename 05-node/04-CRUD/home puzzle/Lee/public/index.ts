interface Friend {
  name: string;
  email: string;
  phone: string;
  igName: string;
}



async function handleAddFriend(event: any) {
  try {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const igName = event.target.igName.value;

    if (!name || !email || !phone || !igName) {
      throw new Error('Please complete all fields')
    }

    const friend: Friend = { name, email, phone, igName }

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
    

    console.log(results)
    return results;

  } catch (error) {
    console.error(error)
    return []
  }
}
getFriends()

async function handleGetFriends() {
  const friends = getFriends();

}