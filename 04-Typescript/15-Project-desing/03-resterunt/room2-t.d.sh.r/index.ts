//entities:
//Tables, Order, Dishes

//return a random complex number as string
const uid = function () {
   return Date.now().toString(36) + Math.random().toString(36).substr(2);
 };

 //table number with number of people sitting on it
class Table {
    constructor(public tableNumbe :number, public capacity: number, public chatch: boolean){}
}


class Dish {
    uidDishe: number;
    constructor(public disgName:string, public img:string, public price:number, public status:boolean, public description:string){
        this.uidDishe = Number(uid());
    }

}

//all the dishes for one table
class Order {
    uidOrder: number;
    constructor(public table: Table, public dishes: Dish[],public status:boolean){
        this.uidOrder = Number(uid());
    }
    openTable(){
        //add new order
        try {
            if(!this.table.tableNumbe) throw new Error("no table catched");
            //3 btns -> add, del, close
            return (this.table.chatch=true)

        } catch (error) {
            console.error(error)   
        }

    }
    addDish(table: Table, dish:Dish){
        //add dish to order array
        try {
           if(!table.chatch) throw new Error("not an open table"); 
           order.push(dish) 

        } catch (error) {
               console.error(error)   
        }
    }

    deletDish(){
        //delet dish from order array
    }
    closeOrder(){

        // calc sum of dises price
        this.status=false;
    }


}