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
    addDishe(){
        //add dishe to open order
    }
}