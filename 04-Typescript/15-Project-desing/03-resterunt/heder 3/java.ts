
// Design the data entities (class Modle). Tables, Order, Dishes, including the methods

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


 
class dishes {
    constructor(public dish, public id,public price  ){
        this.id= uid()
    }
}

class order{
    constructor(public typeOfDish:dishes,public id ){
        this.id= uid()
    }
}
class table{
    
    constructor( public order:order,public id ){
        this.id= uid()
    }
}

const wrapper=document.querySelector(".wrapper")

