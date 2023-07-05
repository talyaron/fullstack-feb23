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
function loadMenucategoriesForEdit(): DishesCategories[]{
    try {
        debugger
        const categoriesString = localStorage.getItem('categories');
        
        if (!categoriesString) {
            const categories: DishesCategories[]= [];
            categories.push(new DishesCategories("Drinks"))
            categories.push(new DishesCategories("Pizza"))
            categories.push(new DishesCategories("Meat"))
            categories.push(new DishesCategories("BurGer"))
            categories.push(new DishesCategories("Toppings"))
            //save to local storage
            const categoriesJson = JSON.stringify(categories);
            localStorage.setItem('categories', categoriesJson);
            return categories;
            
        } else {
          const categoriesArray = JSON.parse(categoriesString);
          const  categories = categoriesArray.map(category => new DishesCategories(category.categoyName,category.idCategory));
          return categories;
        }
      
      } catch (error) {
        console.error(error);
        return [];
      }
}    
function renderMenuCategories(){
    try {
        const container = document.querySelector("#menuCategoryContainer");
        if(!container)throw new Error("can not find Menu html elment")
        if(!EditPgeCategories)throw new Error("can not find Categories")
        renderSearch();
        EditPgeCategories.forEach((category) => { // each table is a btn
              const button = document.createElement("button");
              button.classList.add("category-button"); // Add the "table-button" class to the button
              button.innerText = category.categoyName;
              button.addEventListener("click", () => {
                RenderMenuByCategory(category.idCategory);
              });
              container.appendChild(button);
            });
            const ALLcategoriesBtn =document.createElement("button");
            ALLcategoriesBtn.classList.add("category-button"); // Add the "table-button" class to the button
            ALLcategoriesBtn.innerText = `ALL`;
            ALLcategoriesBtn.addEventListener("click", () => {
              
              RenderMenuByCategory(-10);
             
            });
            container.appendChild(ALLcategoriesBtn);
          
    } catch (error) {
        console.error(error);
        
    }
   
   
} 
function renderDishes (filteredMenu:dishes[], container: HTMLElement|null){
    try {
        filteredMenu.forEach(dish => {
            // Create a div element for each dish
            const dishDiv = document.createElement("div");
            dishDiv.classList.add("dish");
      
            // Create and append the dish name
            const nameElement = document.createElement("h3");
            nameElement.innerText = dish.name;
            dishDiv.appendChild(nameElement);
      
            // Create and append the dish image
            const imgElement = document.createElement("img");
            imgElement.src = dish.img;
            dishDiv.appendChild(imgElement);
      
            // Create and append the dish price
            const priceElement = document.createElement("p");
            priceElement.innerText = `Price: $${dish.price.toFixed(2)}`;
            dishDiv.appendChild(priceElement);
      
            // Create and append the dish description
            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = dish.description;
            dishDiv.appendChild(descriptionElement);
            container?.appendChild(dishDiv);
           
          });
         
    } catch (error) {
        console.error(error);
        
    }
    
}
function RenderMenuByCategory(id: number) {
    try {
        
      const container: HTMLElement|null = document.querySelector("#menuDishesContainer");
      if (!container) throw new Error("Cannot find Menu html element");
      if (!MenuForEditMenuPage) throw new Error("Cannot find Menu");
  
      container.innerHTML = ""; // Clear the container before rendering the menu
  
      const filteredMenu = id === -10 ? MenuForEditMenuPage : MenuForEditMenuPage.filter(dish => dish.category.idCategory === id);

      if(filteredMenu) renderDishes(filteredMenu,container);
 
 
      
    } catch (error) {
      console.error(error);
    }
  }
function renderSearch() {
    try {
      const searchContainer = document.querySelector("#searchDish");
      if (!searchContainer) throw new Error("Cannot find search container");
  
      const searchInput = document.createElement("input");
      searchInput.classList.add("inputSearch")
      searchInput.type = "text";
      searchInput.placeholder = "Search by name";
      searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        RenderMenuBySearch(searchTerm);
      });
  
      searchContainer.innerHTML = "";
      searchContainer.appendChild(searchInput);
    } catch (error) {
      console.error(error);
    }
  }
  function RenderMenuBySearch(searchTerm: string) {
    try {
      const container :HTMLElement|null = document.querySelector("#menuDishesContainer");
      if (!container) throw new Error("Cannot find Menu html element");
      if (!MenuForEditMenuPage) throw new Error("Cannot find Menu");
  
      container.innerHTML = ""; // Clear the container before rendering the menu
  
      const filteredMenu = MenuForEditMenuPage.filter(
        dish => dish.name.toLowerCase().includes(searchTerm)
      );
  
      if(filteredMenu) 
      renderDishes(filteredMenu,container);
     
  } catch (error) {
    console.error(error);
  }
}
function GoBakc(){
    const menuJson = JSON.stringify(MenuForEditMenuPage); // save to local 
            localStorage.setItem('menuDises', menuJson);
            
    window.location.href = './Main.html';
}
const MenuForEditMenuPage  = getMenuForEditMenuPage();
const EditPgeCategories= loadMenucategoriesForEdit();
renderMenuCategories()


