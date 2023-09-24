

function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    return urlParams.get('email');
}

const _email  = getEmailFromQuery();
console.log(_email)

showItems(document.querySelector("#items"));

// async function showItems(items: HTMLDivElement) {
//     try {
//       const response = await fetch(`/API/items/getItems`);
//       const itemData = await response.json(); // Assuming the API returns an object
  
//       console.log(itemData);
  
//       // Create an HTML structure for displaying the item data
//       const itemHTML = `
//         <div class="itemName">${itemData.itemName}</div>
//         <div class="itemDesc">${itemData.itemDesc}</div>
//         <img src="${itemData.itemUrl}>
//         // <div class="itemImg">${itemData.itemUrl}</div>
//       `;
  
//       // Append the HTML to the 'items' div
//       items.innerHTML = itemHTML;
//     } catch (error) {
//       console.error(error);
//     }
//   }
  

  async function showItems(itemsContainer: HTMLDivElement) {
    try {
      const response = await fetch(`/API/items/getItems`);
      const { items } = await response.json(); // Extract the "items" array
  
      console.log(items);
  
      // Create HTML to display the items
      const itemHTML = items.map((item) => `
        <div class="item">
          <div class="itemName">${item.itemName}</div>
          <div class="itemDesc">${item.itemDesc}</div>
          <img src="${item.itemUrl}" id="img" alt="${item.itemName}" />
          <form onsubmit="handlecreateOrder(event)">
          <button type="submit">Add to Order</button>
          <button type="delete">Remove from Order</button>
      </form>
        </div>
      `).join('');
  
      // Set the HTML content of the itemsContainer
      itemsContainer.innerHTML = itemHTML;
    } catch (error) {
      console.error(error);
    }
  }
  