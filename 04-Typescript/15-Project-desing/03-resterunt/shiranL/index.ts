//index ts- Model - entities:
//Tables, Order, Dishes  
class Table {
    
    constructor(public idTable: number, public tableName : string , public capacity: number ){
    }
}
class DishesCategories {
    idDishe: number;
    constructor(public categoyName:string){
        this.idDishe = Number(Math.random());
    }
}

class Dishe {
    idDishe: number;
    constructor(public category:DishesCategories, public name:string, public img:string, public price:number, public description:string){
        this.idDishe = Number(Math.random());
    }
}


class Order {
    idOrder: number;
    total:number;
    OpenTime:Date;
    CloseTime:Date | null;
    constructor( public table: Table|undefined, public dishes: Dishe[]|undefined,public status:boolean,public OpenTimeLocal?:Date){
        this.idOrder = Number(Math.random());
        this.total = 0;
        
        this.CloseTime = null;
        debugger
        if(OpenTimeLocal) this.OpenTime = OpenTimeLocal
        else this.OpenTime = new Date();

    }
    calcTotal(){
        this.total = 0; // Reset the total to zero before calculating
        if (this.dishes) {
          for (const dish of this.dishes) {
            this.total += dish.price; // Add the price of each dish to the total
          }
    }
}}



// View


function loadMenucategories(): DishesCategories[]{
        try {
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
              const  categories = categoriesArray.map(category => new DishesCategories(category.categoyName));
              return categories;
            }
          
          } catch (error) {
            console.error(error);
            return [];
          }
}    
function loadMenuDises()  : Dishe[]{
    try {
        const menuDisesString = localStorage.getItem('menuDises');
        if (!menuDisesString) {
            const menuDises: Dishe[]|undefined=[];
            menuDises.push(new Dishe(categories[0],"CoCa cola","https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais",7.99,"the taste of life"))
            menuDises.push(new Dishe(categories[0],"Sprite","https://img.freepik.com/free-photo/front-view-glass-soda-getting-poured-dark-drink-photo-champagne-xmas-water_140725-93018.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais",7.99,"When you're really thirsty"))
            menuDises.push(new Dishe(categories[0],"water","https://img.freepik.com/free-vector/isolated-water-glass_1368-2673.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais",4.99,"Health is here"))
            menuDises.push(new Dishe(categories[1],"Napolitana","https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph",17.99,"Good pizza comes with good friends"))
            menuDises.push(new Dishe(categories[1],"Pepperoni","https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais",17.99,"And may God help"))
            menuDises.push(new Dishe(categories[2],"steak","https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",69.99,"Vampires are here"))
            menuDises.push(new Dishe(categories[2],"Lamb chops","https://img.freepik.com/free-photo/grilled-lamb-chop-steak_74190-2790.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=ais",47.99,"Go with the herd"))
            menuDises.push(new Dishe(categories[3],"Home BurGer","https://img.freepik.com/premium-photo/classic-cheeseburger-with-beef-cheese-bacon-tomato-onion-lettuce-isolated-white-background_183587-963.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",39.99,"We love hamburger"))
            menuDises.push(new Dishe(categories[3],"CheeseBurGer","https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",41.99,"We love hamburger"))
            menuDises.push(new Dishe(categories[4],"Fries","https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",14.99,"You also need to gain weight"))
            menuDises.push(new Dishe(categories[4],"Rice","https://img.freepik.com/premium-photo/white-background-with-risotto-rice_872147-2590.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph",12.99,"You also need to gain weight"))
            // save to local storege
            const MenudisesJson = JSON.stringify(menuDises);
            localStorage.setItem('menuDises', MenudisesJson);
            return menuDises;
        } else {
          const menuDisesArray = JSON.parse(menuDisesString);
          const menuDises = menuDisesArray.map(dishe => new Dishe(dishe.category,dishe.name,dishe.img,dishe.price,dishe.description));
          return menuDises;
        }
        
      } catch (error) {
        console.error(error);
        return [];
      }

}

// load categiries
const categories : DishesCategories[] = loadMenucategories();
const MenuDished : Dishe[] = loadMenuDises();


