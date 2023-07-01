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
// load categiries
const categories: DishesCategories[]= [];
categories.push(new DishesCategories("Drinks"))
categories.push(new DishesCategories("Pizza"))
categories.push(new DishesCategories("Meat"))

//save to local storage
const categoriesJson = JSON.stringify(categories);
localStorage.setItem('categories', categoriesJson);
console.log(categoriesJson);


class Dishe {
    idDishe: number;
    constructor(public category:DishesCategories, public name:string, public img:string, public price:number, public description:string){
        this.idDishe = Number(Math.random());
    }
}
// load dishes 
const dises: Dishe[]|undefined=[];
dises.push(new Dishe(categories[0],"CoCa cola","https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=ais",7.99,"the taste of life"))
dises.push(new Dishe(categories[1],"Napolitana","https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.1.9697832.1687471476&semt=sph",17.99,"Good pizza comes with good friends"))
dises.push(new Dishe(categories[2],"steak","https://img.freepik.com/free-photo/grilled-sirloin-steak-cooked-rare-plate-generated-by-ai_24640-81771.jpg?size=626&ext=jpg&uid=R96966099&ga=GA1.2.9697832.1687471476&semt=sph",47.99,"Vampires are here"))

// save to local storege
const disesJson = JSON.stringify(dises);
localStorage.setItem('dises', disesJson);



class Order {
    idOrder: number;
    constructor(public table: Table|undefined, public dishes: Dishe[]|undefined,public status:boolean){
        this.idOrder = Number(Math.random());
    }
    addDishe(){
        //add dishe to open order
    }
}



// View

function GoTablePage( idTable:number ){

                const tableIDJson = JSON.stringify(idTable);
                localStorage.setItem('tableID', tableIDJson);
                  window.location.href = './Table.html';
        
    }
    




