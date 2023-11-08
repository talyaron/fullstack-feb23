async function handleAddItem(ev: any) {
    try {
      ev.preventDefault(); // stop form from submitting
      const item = {
        // get data from form
        itemName: ev.target.itemName.value,
        itemDesc: ev.target.itemDesc.value,
        itemUrl: ev.target.itemUrl.value,
      };
  
      const response = await fetch("/API/items/addItem", {
        // send data to server
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const { error, itemDB} = await response.json(); // get data from server
      console.log(itemDB);
      if (error) {
        throw new Error(error);
      }
      //if everthink is OK, redirect to login page
      window.location.href = "/login.html";
    } catch (error) {
      console.error(error);
    }
  }
  