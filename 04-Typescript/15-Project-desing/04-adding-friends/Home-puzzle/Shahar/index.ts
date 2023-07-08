class Vegetable {
    id:string;
    // isEdit:boolean = false;
    constructor(public name:string , public amount:string , public image:string ){

            this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
    
}

const vegetables: Vegetable[] = [];



// renderVegetableCard(vegetables, document.querySelector("#rootVegetables"))

function HandleAddVegetable(ev:any){
    try {
        ev.preventDefault()
        const name = ev.target.name.value;
        const amount = ev.target.amount.value;
        const image = ev.target.image.value;

        const newVegetable = new Vegetable(name , amount , image)
        vegetables.push(newVegetable)
        renderVegetableCards(vegetables);
    } catch (error) {
        console.error(error)
    }
}
renderVegetableCards(vegetables);

function renderVegetableCard(vegetable: Vegetable) {
    try {
      return `<div class="card">
          <img src="${vegetable.image}">
          <p>${vegetable.name}</p>
          <p>${vegetable.amount}</p>
          <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
          <button onclick="handleEditVegetable('${vegetable.id}')">i ate one</button>
      </div>`;
      
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderVegetableCards(vegetables: Vegetable[]) {
    try {
      const cardsHTML = vegetables.map((vegetable) => renderVegetableCard(vegetable)).join('');
      document.querySelector("#rootVegetable").innerHTML = cardsHTML;
    } catch (error) {
      console.error(error);
    }
  }

// function renderVegetableCard(vegetable:Vegetable){
//     try {
//         return `<div class="card">
//         <img src="${vegetable.image}">
//         <p>${vegetable.name}</p>
//         <p>${vegetable.amount}</p>
//         <button onclick="handleDeleteFriend('${vegetable.id}')">Delete</button>
//         <button onclick="handleEdit('${vegetable.id}')">Edit</button>
//     </div>
// `;
//     } catch (error) {
//         console.error(error)
//     }
// }