// Create an app which store vegtebels in a fridge.

// add a button to remove one item from a Vegetable (eg: you had 5 tomatos, and when you press the button "I ATE ONE", you will be left with 4 tomatos )

// add a button to add Vegetable

// all the data must be saved to localstorage

// add edit mode, to change quantity vegetables, and name of vegetable

// add remove button, which will remove tomatos or other tomato

// Use the MVC model

// create model for Vegetable,

class Vegetable {
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
const rootvegetables = document.querySelector(`#vegetables-cards`);
const vegetables: Vegetable[] = getVegetablesFromStorage();
renderVeagtable(vegetables, rootvegetables);
function getVegetablesFromStorage(): Vegetable[] {
  try {
    const vegtebelsString = localStorage.getItem(`vegetables`);
    if (!vegtebelsString) return [];
    //convert string to array of objects
    const vegetablesArray = JSON.parse(vegtebelsString);
    console.dir(vegetablesArray);
    //convert array of objects to array of friends
    const vegetables: Vegetable[] = vegetablesArray.map(
      (vegetable: Vegetable) => {
        return new Vegetable(
          vegetable.name,
          vegetable.image,
          vegetable.amount,
          vegetable.id
        );
      }
    );
    return vegetables;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// add Vegetable and amount, and an image
function handleAddingVaegtable(ev) {
  ev.preventDefault();
  vegetables.forEach((vegetable) => {
    if (ev.target.elements.name.value === vegetable.name) {
      alert(`this vegetable is already exist. please try to Edit`);
      throw new Error(`this vegetable is already exist. please try to Edit`);
    }
  });

  const name: string = ev.target.elements.name.value;
  const amount: number = ev.target.elements.amount.value;
  const url: string = ev.target.elements.url.value;
  vegetables.push(new Vegetable(name, url, amount));

  ev.target.reset();

  renderVeagtable(vegetables, rootvegetables);
  // save data to localstorage

  localStorage.setItem("vegetables", JSON.stringify(vegetables));
}

function renderVeagtable(allvegetables: Vegetable[], htmlRoot: Element | null) {
  try {
    let html: string = `<div class="cards-wrapper">`;
    allvegetables.forEach((vegetable) => {
      if (vegetable.isEdit === false) {
        html += `<div class="card">
      <img src="${vegetable.image}" alt="">
      <p>vegetable name: ${vegetable.name}</p>
      <p>vegetable amount: ${vegetable.amount}</p><button onclick="ateOne('${vegetable.id}')">I ate one</button><button onclick="addOne('${vegetable.id}')">I bought one</button><button onclick="editvegetable('${vegetable.id}')">EDIT</button><button onclick="removevegetable('${vegetable.id}')">REMOVE</button></div>`;
      } else {
        html += `<div class="card"><img src="${vegetable.image}" alt="">
      <p>current name: ${vegetable.name}</p>
      <p>current amount: ${vegetable.amount}</p><form onsubmit="saveChanges(event)" id="${vegetable.id}">
      <input type="text" name="name" id="name" placeholder="new name" /><input type="number" name="amount" id="amount" placeholder="new amount"/><input type="submit" value="SET" />
      </form><button onclick="removevegetable('${vegetable.id}')">REMOVE</button></div>`;
      }
    });
    html += `</div>`;
    if (!htmlRoot) throw new Error(`no html element`);
    htmlRoot.innerHTML = html;
  } catch (error) {
    console.error(error);
    return;
  }
}

// add edit mode, to change quantity vegetables, and name of vegetable

function editvegetable(vegetableId: string) {
  try {
    const vegetable = vegetables.find(
      (vegetable) => vegetable.id === vegetableId
    );
    if (!vegetable) throw new Error(`coulnt find vegetable`);
    vegetable.setEdit(true);
    renderVeagtable(vegetables, rootvegetables);
    console.log(vegetableId);
  } catch (error) {
    console.error(error);
  }
}
// add remove button, which will remove tomatos or other tomato

function removevegetable(vegetableId: string) {
  try {
    const index = vegetables.findIndex(
      (vegetable) => vegetable.id === vegetableId
    );
    vegetables.splice(index, 1);
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
    renderVeagtable(vegetables, rootvegetables);
  } catch (error) {
    console.error(error);
  }
  console.log(vegetableId);
}
function saveChanges(ev) {
  ev.preventDefault();
  try {
    debugger;
    const name = ev.target.name.value;
    const amount = ev.target.amount.value;
    const id = ev.target.id;
    const vegetable = vegetables.find((vegetable) => vegetable.id === id);
    if (!vegetable) throw new Error(`couldnt find vegetable`);
    vegetables.forEach((vegetable) => {
      if (ev.target.name.value === vegetable.name) {
        alert(`this vegetable is already exist. please try to Edit`);
        throw new Error(`this vegetable is already exist. please try to Edit`);
      }
    });
    vegetable.name = name;
    vegetable.amount = amount;
    vegetable.setEdit(false);
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
    renderVeagtable(vegetables, rootvegetables);
  } catch (error) {
    console.error(error);
  }
}
function ateOne(vegetableId) {
  try {
    const vegetable = vegetables.find(
      (vegetable) => vegetable.id === vegetableId
    );
    if (!vegetable) throw new Error(`couldnt find vegetable`);
    vegetable.amount = Number(vegetable.amount) - 1;
    localStorage.setItem("vegetables", JSON.stringify(vegetables));
    renderVeagtable(vegetables, rootvegetables);
  } catch (error) {
    console.error(error);
  }
}
function addOne(vegetableId) {
  try {
    try {
      const vegetable = vegetables.find(
        (vegetable) => vegetable.id === vegetableId
      );
      if (!vegetable) throw new Error(`couldnt find vegetable`);
      vegetable.amount = Number(vegetable.amount) + 1;
      localStorage.setItem("vegetables", JSON.stringify(vegetables));
      renderVeagtable(vegetables, rootvegetables);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
function userSearch() {
  const search: any = document.querySelector(`#search`);
  const userSearch = search.value;
  const regexp = new RegExp(`^${userSearch}`);
  const vegetablesFromSearch: Vegetable[] = [];
<<<<<<< HEAD
  const result = vegetables.filter((vegetable) => regexp.test(vegetable.name));
  if (result.length === 0) {
    renderVeagtable(vegetablesFromSearch, rootvegetables);

    throw new Error(`there is no match`);
  }

  result.forEach((vegetable) => {
    switch (regexp.test(vegetable.name)) {
      case regexp.test(vegetable.name) !== null:
        vegetablesFromSearch.push(vegetable);
        renderVeagtable(vegetablesFromSearch, rootvegetables);
        break;
      case regexp.test(vegetable.name) === null:
        throw new Error(`there is no match`) && alert(`there is no match`);
=======
  vegetables.forEach((vegetable) => {
    if (regexp.test(vegetable.name)) {
      vegetablesFromSearch.push(vegetable);
      renderVeagtable(vegetablesFromSearch, rootvegetables);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    }
  });
}
