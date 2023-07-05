function getMenuForEditMenuPage(): Dishe[]{
    try {
        const disesString = localStorage.getItem('menuDises');
        if (!disesString) {
          console.log("There are no orders");
          return [];
        } else {
          const dishesArray = JSON.parse(disesString);
          const dises = dishesArray.map(dishe => new Dishe(dishe.category,dishe.name,dishe.img,dishe.price,dishe.description));
          return dises;
        }
      } catch (error) {
        console.error(error);
        return [];
    } 
}

function renderMenu(){
    const menuHtml= document.querySelector("#menuContainer")
    if(!menuHtml) {throw new Error("Cant Find MenuContainer")};
    const html = `<form id="MenueForm" class="MenuForm" onsubmit="handleAddDishesToOrder(event)"">
    ${MenuForEditMenuPage.map(
        (dish) => `
        <div class="disheCard">
            <div class="dishDetails">
                <p class="dishName">${dish.name}</p>
                <p class="dishPrice">Price: ${dish.price}</p>
                <img class="dishImage" src="${dish.img}" alt="">
            </div>
            <div class="dishActions">
                <button class="dishActionButton edit" onclick="handleEditDish('${dish.idDishe}')">Edit</button>
                <button class="dishActionButton delete" onclick="handleDeleteDish('${dish.idDishe}')">Delete</button>
            </div>
        </div>
    `
).join("")}
<input type="submit" value="Add Dishes">
  </form>`
  menuHtml.innerHTML=html;
} 
debugger
const MenuForEditMenuPage  = getMenuForEditMenuPage();
renderMenu()