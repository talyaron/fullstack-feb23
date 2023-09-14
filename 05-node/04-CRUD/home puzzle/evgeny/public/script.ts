



getFriends()
async function handleAddFriend(ev) {
    ev.preventDefault()
    const firstname=ev.target.firstname.value
    const lastname=ev.target.lastname.value
   const age=ev.target.age.value

   const friend={firstname,lastname,age}
        
        
    
    const response = await fetch('/API/add-friend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(friend)
      });

      const result = await response.json();
        
}


async function getFriends() {
    const response=await fetch('/API/get-friends')
    const results= await response.json()
    const {friends}=results
    if (!Array.isArray(friends)) throw new Error("friends are not array");
    console.log(friends)
    console.log(results)
    
    return friends;
    
}

function renderProductHTML(friend) {
    try {
      const html = `<div class="product">
        
        <p>first name:${friend.firstname}</p>
        <p>last name: ${friend.lastname}</p>
        <p>age: ${friend.age}</p>
      </div>`
      return html;
    } catch (error) {
      console.error(error)
      return ""
    }
  }

  function renderProducts(friends , HTMLElement: HTMLDivElement) {
    try {
      if (!HTMLElement) throw new Error("HTMLElement not found")
      console.log(friends)
      if (!Array.isArray(friends)) throw new Error("products are not array");
      const productsHTML = friends.map(friend => renderProductHTML(friend)).join("")
      HTMLElement.innerHTML = productsHTML;
     
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleGetProducts() {
    const products = await getFriends();
  
    const root = document.querySelector('#root');
    renderProducts(products, root as HTMLDivElement);
   
  
  
  }