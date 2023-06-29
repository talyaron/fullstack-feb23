//entities:
//Tables, Order, Dishes

//return a random complex number as string
const uid = function () {
   return Date.now().toString(36) + Math.random().toString(36).substr(2);
 };

 //table number with number of people sitting on it
class Table {
    constructor(public tableNumbe :number, public capacity: number, public catched: boolean){}
}


class Dish {
    constructor(public dishName:string, public img:string, public price:number, public status:boolean, public description:string){
    }
}

const dishes: Dish[] = []; 
const order: Order[] = [];

//all the dishes for one table
class Order {
    uidOrder: number;
    constructor(public table: Table, public dishes: Dish[], public status:boolean){
        this.uidOrder = Number(uid());
    }
    openTable(){
        //the function return that the table is catched (=true)
        try {
            if(!this.table.tableNumbe) throw new Error("no table catched");
            //3 btns -> add, del, close
            return (this.table.catched=true)

        } catch (error) {
            console.error(error)   
        }

    }
    addDish(table: Table, dish:Dish, order:Order[]){
        //add dish to order array
        //need to get the table num and to find in it the uid of the order to 
        try {
           if(!table.catched) throw new Error("not an open table"); 
           order.push(dish) 

        } catch (error) {
               console.error(error)   
        }
    }

    deletDish(){
        //delet dish from order array
    }
    closeOrder(){
        //close the order and return the calcolat of all dises price in the order (sum of the order)
        this.status=false;
    }


}