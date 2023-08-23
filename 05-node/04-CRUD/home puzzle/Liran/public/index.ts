interface _Friend {
  name: string;
  phoneNumber: string;
  imgUrl: string;
  email?: string;
  instegram?: string;
  id?: string;
}

getfriends();

async function handleAddfriend(event: any) {
  try {
    debugger;
    event.preventDefault();
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const instegram = event.target.instegram.value;
    const imgUrl = event.target.imgUrl.value;
    if (!name || !phoneNumber || !imgUrl) {
      throw new Error("Please complete all ** fields");
    }

    const friend: _Friend = { name, phoneNumber, email, instegram, imgUrl };

    const response = await fetch("/API/add-friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    });

    const result = await response.json();
    console.log(result);
    resetForm(document.querySelector("#details") as HTMLFormElement);
    const friends = await getfriends();
    const root = document.querySelector("#root");
    renderfriends(friends, root as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}

function resetForm(form: HTMLFormElement) {
  try {
    if (!form) throw new Error("form not found");
    form.reset();
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

function renderfriendHTML(friend: _Friend) {
  try {
    debugger;
    const html = `<div class="friend">
      <img src="${friend.imgUrl}" alt="${friend.name}" />
      <form id="${friend.id}" onsubmit="handleUpdatefriend(event)">
        <input type="text" name="name" placeholder="${friend.name}">
        <input type="text" name="phoneNum" placeholder="${friend.phoneNumber}">
        <input type="email" name="email" placeholder="${friend.email === "" ? "Email" : friend.email}">
        <input type="text" name="instegram" placeholder="${friend.instegram === "" ? "Instegram" : friend.instegram}">
        <div class="buttons">
          <button type="submit">Update</button>
          <button onclick="handleDeletefriend('${friend.id}')">Delete</button>
        </div>
        </form>
    </div>`;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderfriends(friends: _Friend[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElement not found");
    console.log(friends);
    if (!Array.isArray(friends)) throw new Error("friends are not array");
    const friendsHTML = friends
      .map((friend) => renderfriendHTML(friend))
      .join("");
    HTMLElement.innerHTML = friendsHTML;
  } catch (error) {
    console.error(error);
  }
}

// async function handleGetfriends() {
//   const friends = await getfriends();

//   const root = document.querySelector("#root");
//   renderfriends(friends, root as HTMLDivElement);
// }

async function handleDeletefriend(id: string) {
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

    renderfriends(friends, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdatefriend(ev: any) {
  try {
    ev.preventDefault();
    debugger;
    const name = ev.target.name.value != "" ? ev.target.name.value : undefined;
    const phoneNumber = ev.target.phoneNum.value != "" ? ev.target.phoneNum.value : undefined;
    const email = ev.target.email.value != "" ? ev.target.email.value : undefined;
    const instegram = ev.target.instegram.value != "" ? ev.target.instegram.value : undefined;
    const id = ev.target.id;
    console.log(id, name, phoneNumber, email, instegram);

    const response = await fetch("/API/update-friend", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, phoneNumber, email, instegram }),
    });

    const result = await response.json();
    console.log(result);
    const { friends } = result;
    renderfriends(friends, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}
