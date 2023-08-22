interface Friend {
    fullName: string;
    email: string;
    phoneNumber: string;
    instegram?:string;
    imgUrl?: string;
    id?:string;
  }
  
  getfriends();
  
  async function handleAddfriends(event: any) {
    try {
      event.preventDefault();
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phoneNumber = event.target.phoneNumber.value;
      const instegram = event.target.instegram.value;
      const imgUrl = event.target.imgUrl.value;
      if (!fullName || !email || !phoneNumber) {
        throw new Error('Please complete all first free fields');
      }
  
      const friend: Friend = { fullName, email, phoneNumber, instegram, imgUrl };
  
      const response = await fetch('/API/add-friends', {
        method: 'POST',  //catch the data from user and save it in server
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(friend)
      });
  
      const result = await response.json();
      console.log(result);
  
  
    } catch (error) {
      console.error(error);
    }
  
  }
  
  async function getfriends() {
    try {
      const response = await fetch('/API/get-friends')
      const results = await response.json();
      const { friends } = results;
      if (!Array.isArray(friends)) throw new Error("friendss are not array");
      console.log(friends)
      console.log(results)
      return friends;
  
    } catch (error) {
      console.error(error);
      return []
    }
  }
  
  function renderfriendsHTML(friends: Friend) {
    try {
      const html = `<div class="friends">
        <img src="${friends.imgUrl}" />
        <h3>${friends.fullName}</h3>
        <p>phoneNumber: ${friends.phoneNumber}</p>
        <p>instegram: ${friends.instegram}</p>
        <form id="${friends.id}" onsubmit="handleUpdatefriends(event)">
        <input type="text" name="email" value="${friends.email}" placeholder="*e-mail">
        <input type="text" name="phoneNumber"  value="${friends.phoneNumber}" placeholder="Price" />
        <input type="text" name="instegram" value="${friends.instegram}" placeholder="instegram accaunte">
        <input type="url" name="imgUrl" value="${friends.imgUrl}" placeholder="my friend Image">
        <button type="submit">Update</button></form>
        <button onclick="handleDeletefriends('${friends.id}')">Delete</button>
      </div>`
      return html;
    } catch (error) {
      console.error(error)
      return ""
    }
  }
  
  function renderfriends(friends: Friend[], HTMLElement: HTMLDivElement) {
    try {
      if (!HTMLElement) throw new Error("HTMLElement not found")
      console.log(friends)
      if (!Array.isArray(friends)) throw new Error("friendss are not array");
      const friendssHTML = friends.map(friends => renderfriendsHTML(friends)).join("")
      HTMLElement.innerHTML = friendssHTML;
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleShowFriends() {
    const friends = await getfriends();
  
    const root = document.querySelector('#root');
    renderfriends(friends, root as HTMLDivElement);
  
  
  }
  
  async function handleDeletefriends(id:string){
    try {
      const response = await fetch('/API/delete-friends', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      });
      const result = await response.json();
      console.log(result);
      const {friends} = result;
  
      renderfriends(friends, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleUpdatefriends(ev:any){
    try {
      ev.preventDefault();
      const phoneNumber = ev.target.phoneNumber.valueAsNumber;
      const id = ev.target.id;
      console.log(id, phoneNumber)
  
      const response = await fetch('/API/update-friends', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, phoneNumber})
      });
  
      const result = await response.json();
      console.log(result);
      const {friendss} = result;
      renderfriendss(friendss, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
  