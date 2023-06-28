//entities:
//Tables, Order, Dishes
const uid = function () {
   return Date.now().toString(36) + Math.random().toString(36).substr(2);
 };

class Table {
    uidTable: number;
    constructor(public capacity: number){
        this.uidTable = Number(uid());
    }

    getTable(){
        return this.capacity 
    }
}

class Dishe {
    uidDishe: number;
    constructor(public name:string,public img:string, public price:number,public status:boolean, public description:string){
        this.uidDishe = Number(uid());
    }

}

class Order {
    uidOrder: number;
    constructor(public table: Table, public dishes: Dishe[],public status:boolean){
        this.uidOrder = Number(uid());
    }
    addOrder(){
        //add new order

    }
    editOrder(action:string,dishe:Dishe){
        //edit dishe
    }
    closeOrder(){

        // calc sum of dises price
        this.status=false;
    }


}