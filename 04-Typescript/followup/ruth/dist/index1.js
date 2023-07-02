// function renderMenu() {
//   const menuDiv = document.querySelector("#menu") as HTMLDivElement;
//   dishesArray.forEach((dish) => {
//     menuDiv.innerHTML += `
//           <div class ="dish" name = ${dish.dishName}> 
//           <img src=${dish.dishImg} alt="">
//           <h3 class="dishName"> ${dish.dishName} </h3>
//           <h3> ${dish.price}$ </h3>
//         <button onclick="addDishToOrderList(${dish.dishName})"><span class="material-symbols-outlined"> add_box </span></button>
//           </div>
//   `;
//   });
// }
// renderMenu();
// function addDishToOrderList(dishName: string) {
//   const orderList = document.querySelector(".orderList") as HTMLDivElement;
//   const chosenDish = dishesArray.find((dish) => dish.dishName == dishName)!;
//   orderList.innerHTML += `
//     <div class = "orderListItem" name = ${chosenDish.dishName}>
//         <img src=${chosenDish.dishImg} alt="">
//         <h3 class="dishName"> ${chosenDish.dishName} </h3>
//         <input type="number" value="1" min="1" placeholder="amount"> </input>
//         <h3> ${chosenDish.price}$ </h3>
//         <button onclick="removeDishToOrderList(${chosenDish.dishName})"><span class="material-symbols-outlined"> delete </span></button>
//     </div>
//     `;
// }
