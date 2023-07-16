//Model

class Vegetable {
    id: number
    isEdit: boolean = false;
    constructor(public name: string, public amount: number, public image: string, id?: number) {
        if (id) {
            this.id = id;
        } else
            if (vegetables) {
              
                this.id = vegetables.length + 1
            }
    }
    setEdit(set: boolean) {
        this.isEdit = set;
    }
}

//view

const form = document.querySelector(".form");
const wrapper = document.querySelector(".renderVegs");
const table = document.createElement("table");
var vegetables: Vegetable[] = getVegetablesFromStorage();



function renderForm(div) {
    const html = ` <form onsubmit="handleAddVegetable(event)">
            
    <h2>
    Add Vegetables

    </h2>
    <input type="text" name="name"  placeholder="Enter Name">
    <input type="text" name="image"  placeholder="Enter image url">
    <input type="number" name="amount"  placeholder="Enter amount of vegetables">
    <input type="submit" value="add">
</form>`
    div.innerHTML = html;
}

renderForm(form)
function renderVegetables(div) {

    let html = `<table class="vegetables"><tr><th>Image</th><th>Name</th><th>Amount</th><th>Buttons</th></tr>`
    html += vegetables.map(vegetable => renderVegetableList(vegetable)).join("")

    html += "</table>"

    div.innerHTML = html;
}
renderVegetables(wrapper)
function renderVegetableList(vegetable: Vegetable) {
    try {
        if (vegetable.isEdit) {
            return ` <tr>
                  <td><img class="vegetableImage" src="${vegetable.image}" alt="${vegetable.name}" /></td>
                  <td><input type="text" name="editName" value="${vegetable.name}"></td>
                  <td>
                  <input type="number" name="editAmount"  placeholder="" value="${vegetable.amount}"></td>
                  <td>
                  <button onclick=saveEdit("${vegetable.id}")>Save</button>
                  <button onclick="handleDeleteVegetable('${vegetable.id}')">Delete</button>
                  </td>
                  </tr>   
                  `;
        } else {
            return `        <tr>
        <td><img class="vegetableImage" src="${vegetable.image}" alt="${vegetable.name}" /></td>
        <td>${vegetable.name}</td>
        <td>${vegetable.amount}</td>
        <td><button onclick=handleEdit("${vegetable.id}")>Edit</button></td>
        </tr>   
  `;
        }
    } catch (error) {
        console.error(error);
        return "";
    }
}

function handleAddVegetable(event: any) {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const amount = event.target.amount.value.toString();
    const newVegetable = new Vegetable(name, amount, image);
    vegetables.push(newVegetable);
    renderVegetables(wrapper)
    localStorage.setItem("vegetable", JSON.stringify(vegetables))
}

function getVegetablesFromStorage(): Vegetable[] {

    try {
        //get vegetables from locastorage (string)
        const vegetablesString = localStorage.getItem("vegetable");

        if (!vegetablesString) return [];

        //convert string to array of objects
        const vegetableArray = JSON.parse(vegetablesString);

        //convert array of objects to array of vegetables
        const vegetables: Vegetable[] = vegetableArray.map((vegetable: Vegetable) => {
            return new Vegetable(vegetable.name, vegetable.amount, vegetable.image, vegetable.id);
        })

        return vegetables

    } catch (error) {
        console.error(error)
        return []
    }

};

function handleEdit(id: number) {
    try {
        const vegetable = vegetables.find(vegetable => vegetable.id == id)
        //   const vegetable = vegetables.find((vegetable) => vegetable.id === id);
        if (!vegetable) throw new Error("couldnt find vegetable");

        vegetable.setEdit(true);
        renderVegetables(wrapper)
    } catch (error) {
        console.error(error);
    }
}

function saveEdit(id: any) {
    try {
        console.log(vegetables)
        const editName = document.querySelector('[name="editName"]');
        const editAmount = document.querySelector('[name="editAmount"]');


        const name = editName.value;
        const amount = editAmount.value;

        const vegetable = vegetables.find(vegetable => vegetable.id == id)
        if (!vegetable) throw new Error("couldnt find vegetable");
        vegetable.name = name;
        vegetable.amount = amount;
        vegetable.setEdit(false);
        console.log(vegetable);
        localStorage.setItem("vegetable", JSON.stringify(vegetables));
        renderVegetables(wrapper)

    } catch (error) {
        console.error(error);
    }
}

function handleDeleteVegetable(id: number) {
 
        
        try {
            const index = vegetables.findIndex((vegetable) => vegetable.id == id);
            if (index === -1) throw new Error("Could not find id");
        
            vegetables.splice(index, 1);
            localStorage.setItem("vegetable", JSON.stringify(vegetables));
        
            renderVegetables(wrapper)
          } catch (error) {
            console.error(error);
          }
        
            
          
          

    
}

function renderDefaults(){
    const item1 = new Vegetable("Carrot",2,"https://images.freeimages.com/fic/images/icons/1187/pickin_time/256/carrot.png")
    vegetables.push(item1)
    const item2 = new Vegetable("Banana",8,"https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/banana.png")
    vegetables.push(item2,)
    const item3 = new Vegetable("Cherry",5,"https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cherry-png-image_2392970.jpg")
    vegetables.push(item3)
    const item4 = new Vegetable("Apple",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVq1bY_y5cAH4ktS-XWcKmR5oTH8uy-9TdA&usqp=CAU")
    vegetables.push(item4)

    localStorage.setItem("vegetable", JSON.stringify(vegetables));
    renderVegetables(wrapper)

}