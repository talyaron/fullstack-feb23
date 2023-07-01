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
    constructor( public table: Table|undefined, public dishes: Dishe[]|undefined,public status:boolean){
        this.idOrder = Number(Math.random());
        this.total = 0;
        this.OpenTime = new Date();
        this.CloseTime = null;

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
            menuDises.push(new Dishe(categories[1],"Napolitana","https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph",17.99,"Good pizza comes with good friends"))
            menuDises.push(new Dishe(categories[2],"steak","https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",47.99,"Vampires are here"))
            
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


