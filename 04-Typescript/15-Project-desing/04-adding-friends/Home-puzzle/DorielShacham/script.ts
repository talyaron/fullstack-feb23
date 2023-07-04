interface FridgeItem {
  name: string;
  image?: string;
} //<--type of object

let Fridge: FridgeItem[] = [];//<--array of objects

const boxOne: FridgeItem = { name: "Tomato", image: "https://i5.walmartimages.com/asr/9f8b7456-81d0-4dc2-b422-97cf63077762.0ddba51bbf14a5029ce82f5fce878dee.jpeg" };
const boxTwo: FridgeItem = { name: "Cucumber", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNxIRh1EpNF_Iqqhbl8XspVvjAfhGEWJvA45x9EjRrhLXnyawScHPjIN-9aXn0ieO1ss&usqp=CAU"  };
const boxThree: FridgeItem = { name: "Onion", image: "https://images.immediate.co.uk/production/volatile/sites/30/2013/06/Onions-cut-in-half-16d3ade.jpg"  }; //<--whats inside the object

Fridge.push(boxOne, boxTwo, boxThree); //<--push objects to the array
loadFridgeFromLocalStorage();
console.log(Fridge)


function handleObjects() {
  const btn = document.querySelector("body > form > button");
  btn?.addEventListener("click", function (event) {
    event.preventDefault();
    const inputName = document.querySelector("#nameInput") as HTMLInputElement;
    const inputImage = document.querySelector("#imageInput") as HTMLInputElement;    

    const newObject: FridgeItem = {
      name: inputName.value,
      image: inputImage.value
    };

    Fridge.push(newObject);
    console.log(Fridge);
    renderAllVegetables(Fridge, fridgeContainer);
    saveFridgeToLocalStorage();
  });
}
debugger
window.addEventListener("DOMContentLoaded", function() {
  handleObjects();
});//<-- Call handleObjects after DOM is loaded


function renderAllVegetables(
  fridgeItems: FridgeItem[],
  htmlElement: HTMLElement | null
) {
  try {
    if (!htmlElement) throw new Error("No element"); //<--if there is no objects then show error
    const html = fridgeItems.map((item) => renderCard(item)).join(" "); //<---create the objects on the screen by going over the object and turning it to a string ""
    htmlElement.innerHTML = html; //<--html creation
  } catch (error) {
    console.error(error);
  }
}

function renderCard(fridgeItem: FridgeItem) {
  try {
    if (fridgeItem) {
      return `
          <div class="card">
            <img src="${fridgeItem.image}">
            <p>${fridgeItem.name}</p>
            <button onclick="handleDeleteFridgeItem('${fridgeItem.name}')">Delete</button>
            <button onclick="handleEdit('${fridgeItem.name}')">Edit</button>
          </div>
        `; //<-- this create how the object will look
    } else { 
      return ""; //<-- this will return no object "else"
    }
  } catch (error) {
    console.error(error);
    return "";
  }
}

const fridgeContainer: HTMLElement | null = document.querySelector(".fridge-container");//<-- Render the fridge items on the HTML page on the speciifc div
renderAllVegetables(Fridge, fridgeContainer);


function handleDeleteFridgeItem(name: string) {
  const index = Fridge.findIndex((item) => item.name === name);
  if (index !== -1) {
    Fridge.splice(index, 1);//<-- Handle delete fridge item
    renderAllVegetables
(Fridge, fridgeContainer);
    saveFridgeToLocalStorage();
  }    //<-- Save updated fridge to localStorage or JSON
}


function saveFridgeToLocalStorage() {
  localStorage.setItem("fridge", JSON.stringify(Fridge));
}//<-- Save fridge to localStorage


function loadFridgeFromLocalStorage() {
  const fridgeData = localStorage.getItem("fridge");
  if (fridgeData) {
    Fridge = JSON.parse(fridgeData);
    renderAllVegetables
(Fridge, fridgeContainer);
  }
}//<-- Load fridge from localStorage

window.addEventListener("load", loadFridgeFromLocalStorage);//<-- Call loadFridgeFromLocalStorage on page load (load saved new objects)
