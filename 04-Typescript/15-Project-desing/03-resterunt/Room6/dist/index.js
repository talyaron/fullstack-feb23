// class Table{
//     id:number;
//     occupide:boolean  = false;
//     constructor(public order:Order )
//     {
//         this.id =Math.random() * 10; 
//     }
//     setOccupide(){
//         this.occupide = !this.occupide;
//     }
// }
// const tables:Table[] = [];
// class Order{
//     id:number;
//     totalPayment:number = 0;
//     constructor(public tableOrder:Dish[], public phoneNum:string ){
//         this.id = Math.random()*10000;
//     }
//     calculatePayment(){
//         try {
//             if(this.tableOrder === null)throw new Error();
//             this.tableOrder.forEach(dish =>{
//                 this.totalPayment += dish.price;
//             } )
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }
// const orders:Order[] = [];
// class Dish{
//     constructor(public name:string, public price:number, public img:string, public description:string){}
//     setPrice(price:number){
//         this.price = price;
//     }
// }
// const dishes:Dish[] = [];
// function renderMain(rootElement: HTMLElement | null) {
//     try {
//         const html = `<h2>${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}</h2>
//         <form onclick="handleFormSelect(event)">
//         <input type="button" id="newOrder" value="New Order">
//         <input type="button" id=""OpensOrders" value="Opens Orders">
//         <input type="button" id="DishManaging" value="Dish Managing">
//         </form>`;
//         if (!rootElement) throw new Error("no root element");
//         rootElement.innerHTML = html;
//     } catch (error) {
//         console.error(error);
//     }
// }
// renderMain(document.querySelector("#main"));
function handleFormSelect(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        debugger;
        var action = ev.target.id;
        if (action === "NewOrder") {
            location.href = "newOrder.html";
        }
        else if (action === "openOrders") {
            location.href = "openOrders.html";
        }
        else {
            location.href = "dishManaging.html";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderMain(rootElement) {
    try {
        var html = "<h2>" + new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + "</h2>\n        <form onclick=\"handleFormSelect(event)\">\n        <input type=\"button\" id=\"newOrder\" value=\"New Order\">\n        <input type=\"button\" id=\"openOrders\" value=\"Open Orders\">\n        <input type=\"button\" id=\"DishManaging\" value=\"Dish Managing\">\n        </form>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderMain(document.querySelector("#main"));
