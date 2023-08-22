interface Friend {
  friendsName: string;
  friendsEmail: string;
  friendsPhoneNumber: string;
  friendsInstagramAccount: string;
  id?: string;
}

async function handleSubmit(ev: any) {
  try {
    ev.preventDefault();
    const friendsName: string = ev.target.friendsName.value;
    const friendsEmail = ev.target.friendsEmail.value;
    const friendsPhoneNumber = ev.target.friendsPhoneNumber.value;
    const friendsInstagramAccount = ev.target.friendsInstagramAccount.value;
    if (
      !friendsName ||
      !friendsEmail ||
      !friendsPhoneNumber ||
      !friendsInstagramAccount
    )
      throw new Error(`please fill all the fields`);
    const friend: Friend = {
      friendsName,
      friendsEmail,
      friendsPhoneNumber,
      friendsInstagramAccount,
    };
    console.log(friend);
    const response = await fetch("/API/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(friend),
    });
    const result = await response.json();
    console.log(result);

    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}

async function handleGetAllFriends() {
  try {
    const response = await fetch("/API/getAllFriends");
    const result = await response.json();
    const friends = result;

    console.log(friends);
    renderAllFriends(friends);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function friendsHTML(friend: Friend) {
  try {
    const html = `<div class="friends-card"><div>friend's name: ${friend.friendsName}</div><div>email: ${friend.friendsEmail}</div><div>phone number: ${friend.friendsPhoneNumber}</div><div>instagram account: ${friend.friendsInstagramAccount}</div><div>id: ${friend.id}</div><form id="${friend.id}" onsubmit="handleUpdateFriends(event)"><input type="text" name="friendsName" value="${friend.friendsName}" placeholder="New friend's Name" /><input type="text" name="friendsEmail" value="${friend.friendsEmail}" placeholder="New friend's Email" /><input type="text" name="friendsPhoneNumber" value="${friend.friendsPhoneNumber}" placeholder="New friend's Phone number" /><input type="text" name="friendsInstagramAccount" value="${friend.friendsInstagramAccount}" placeholder="New friend's Instagram Account" /><button type="submit">Update</button></form><button onclick="handleDeleteFriend('${friend.id}')">Delete friend</button></div>`;
    return html;
  } catch (error) {
    console.error(error);
  }
}
function renderAllFriends(friends: Friend[]) {
  const root = document.querySelector("#root");
  const htmlFriends = friends
    .map((friend: Friend) => friendsHTML(friend))
    .join("");
  if (!root) throw new Error("root element not found");
  root.innerHTML = htmlFriends;
}
async function handleUpdateFriends(event: any) {
  try {
    console.dir(event);
    event.preventDefault();
    const friendsName = event.target.friendsName.value;
    const friendsEmail = event.target.friendsEmail.value;
    const friendsPhoneNumber = event.target.friendsPhoneNumber.value;
    const friendsInstagramAccount = event.target.friendsInstagramAccount.value;
    const id = event.target.id;

    const response = await fetch("/API/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        friendsName,
        friendsEmail,
        friendsPhoneNumber,
        friendsInstagramAccount,
        id,
      }),
    });
    console.log(response);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
async function handleDeleteFriend(id: string) {
  try {
    const response = await fetch(`/API/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    // const result = await response.json();
  } catch (error) {
    console.error(error);
  }
}
