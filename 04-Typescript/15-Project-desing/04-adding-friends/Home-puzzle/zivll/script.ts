// Create an app which store vegtebels in a fridge.

// add a button to remove one item from a vegtabel (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )

// add a button to add vegtabel

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model

// create model for vegtabel,

class Vegtabel {
  id: string;
  isEdit: boolean = false;
  constructor(
    public name: string,
    public image: string,
    public amount: number,
    id?: string | null
  ) {
    if (id) {
      this.id = id;
    } else {
      this.id = `id-${Math.round(Math.random() * 1000000)}`;
    }
  }
  setEdit(set: boolean) {
    this.isEdit = set;
  }
}
const vegtablesCards = document.querySelector(`#vegtables-cards`);
const vegtablesArray: Vegtabel[] = [];
console.log(vegtablesArray);

// add vegtabel and amount, and an image
function handleAddingVaegtable(ev) {
  ev.preventDefault();

  const name: string = ev.target.elements.name.value;
  const amount: number = ev.target.elements.amount.value;
  const url: string = ev.target.elements.url.value;
  vegtablesArray.push(new Vegtabel(name, url, amount));
  console.dir(ev);
  ev.target.reset();
  console.dir(vegtablesArray);
  renderVeagtable(vegtablesArray, vegtablesCards);
}

function renderVeagtable(allVegtables: Vegtabel[], htmlRoot: Element | null) {
  try {
    let html: string = `<div class="cards-wrapper">`;
    allVegtables.forEach((vegtable) => {
      html += `<div class="card">
      <img src="${vegtable.image}" alt="">
      <p>vegtable name: ${vegtable.name}</p>
      <p>vegtable amount: ${vegtable.amount}</p><button onclick="editVegtable(event)">EDIT</button><button onclick="removeVegtable(event)">REMOVE</button></div>`;
    });
    html += `</div>`;
    if (!htmlRoot) throw new Error(`no html element`);
    htmlRoot.innerHTML = html;
  } catch (error) {
    console.error(error);
    return;
  }
}

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegtable

function editVegtable(ev) {
  console.dir(ev);
}
// add remove button, which will remove tomatos or other tomato

function removeVegtable(ev) {
  console.dir(ev);
}
