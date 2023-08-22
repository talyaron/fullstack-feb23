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
        throw new Error('Please complete all mandatory fields');
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
        <input type="text" name="phoneNumber"  value="${friends.phoneNumber}" placeholder="Price">
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
  
  function renderfriends(friends: Friend[], HTMLElement: HTMLDivElement) { //show the list on screen
    try {
      if (!HTMLElement) throw new Error("HTMLElement not found")
      console.log(friends)
      if (!Array.isArray(friends)) throw new Error("friendss are not array");
      const friendsHTML = friends.map(friend => renderfriendsHTML(friend)).join("")
      HTMLElement.innerHTML = friendsHTML;
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleGetFriends() { //get the list from server
    const friends = await getfriends();
    const root = document.querySelector('#root');
    renderfriends(friends, root as HTMLDivElement); //call the function to show the list on-screen
  }
  
  async function handleDeletefriends(id:string){
    try {
      const response = await fetch('/API/delete-friends', {
        method: 'DELETE', //delet the data saved in server
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      });
      const result = await response.json();
      console.log(result);
      const {friends} = result;
  
      renderfriends(friends, document.querySelector('#root') as HTMLDivElement); //call the function to shoe the update list
  
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleUpdatefriends(ev:any){ //deal with the update from user and save it in server
    try {
      ev.preventDefault();
      const phoneNumber = ev.target.phoneNumber.value;
      const email = ev.target.email.value;
      const instegram = ev.target.instegram.value;
      const imgUrl = ev.target.imgUrl.value;
      const id = ev.target.id;
      console.log(id, phoneNumber, email, instegram, imgUrl)
  
      const response = await fetch('/API/update-friends', {
        method: 'PATCH', //catch the update and save it in server
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, phoneNumber, email, instegram, imgUrl})
      });
  
      const result = await response.json();
      console.log(result);
      const {friends} = result;
      renderfriends(friends, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
  