//------------------------------------Dish----------------------------------------

class Dish {
    constructor(
        public dishName: string,
        public price: number,
        public dishImg: string,
        public dishNumber: number = 1,
  ) {}
}

const dishesArray : Dish[] = [
    new Dish("pasta", 42 , "https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_1280.jpg"),
    new Dish("sushi", 48 , "https://cdn.pixabay.com/photo/2017/10/16/09/00/sushi-2856544_1280.jpg"),
    new Dish("salad-Japanese", 55 , "https://cdn.pixabay.com/photo/2014/10/03/15/41/salad-471861_1280.jpg", 4),
    new Dish("ramen", 65 , "https://cdn.pixabay.com/photo/2017/04/04/00/36/ramen-2199962_1280.jpg", 4),
    new Dish("bread", 22 , "https://cdn.pixabay.com/photo/2019/05/06/14/24/bread-4183225_1280.jpg", 4),
]
const emptyDishArray:Dish[] = []


//------------------------------------Table----------------------------------------
class Table{
    constructor(public numOfTable:number, public numOfDiners:number = 1){}
}

const tables:Table[] = [
]
for(let i = 0 ; i<11; i++){
    const newTable = new Table(i, 1);
    tables.push(newTable);
}
//---------------------------------Table Order Handler-------------------------------
class TableOrderHandler{
    constructor(public table:Table, public dishesOrdered:Dish[] = emptyDishArray){
    }
}