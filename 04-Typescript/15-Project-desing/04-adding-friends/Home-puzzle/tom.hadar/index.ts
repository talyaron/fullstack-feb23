
  class Vegetables {
    id: string;
    isEdit: boolean;

    constructor(
      public vegetablesName: string,
      public vegetablesNumber: number,
      public url: string,
      id?: string | null
    ) {
      if (id) {
        this.id = id;
      } else {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
      }
    }

    setEdit(set: boolean) {
      this.isEdit = set;
    }
  }

  const vegetables: Vegetables[] = [];

  // function inputAddvegetables(event) {
  //   try {
  //     event.preventDefault();
  //     const vegetablesName = event.target.elements.vegetablesName.value;
  //     const vegetablesNumber = event.target.elements.vegetablesNumber.value;
  //     const url = event.target.elements.url.value;
  //     const id = event.target.elements.id;
  //     const data = new Vegetables(vegetablesName, vegetablesNumber, url, id);
  //     vegetables.push(data);
  //     event.target.reset();
  //     const root = document.querySelector("#root");
  //     render(vegetables, root);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  function inputAddvegetables(event) {
    try {
      event.preventDefault();
      const vegetablesName = event.target.elements.vegetablesName.value;
      const vegetablesNumber = Number(event.target.elements.vegetablesNumber.value);
      const url = event.target.elements.url.value;
      const id = event.target.elements.id;
      const data = new Vegetables(vegetablesName, vegetablesNumber, url, id);
      vegetables.push(data);
      event.target.reset();
      const root = document.querySelector("#root");
      render(vegetables, root);
    } catch (error) {
      console.error(error);
    }
  }

  // function render(vegetables, root) {
  //   try {
  //     const html = vegetables
  //       .map((vegetable) => {
  //         if(vegetable.vegetablesNumber<=0){
  //           vegetable.vegetablesNumber="empty"
  //         }
  //         if (vegetable.url === '') {
  //           vegetable.url = "https://cdn.carmella.co.il/wp-content/uploads/2020/11/9012.jpg";
  //         }
  //         if (vegetable.isEdit) {
  //           return `<div class="card">
  //             <form onsubmit="handleSetEditvegetables(event)" id="${vegetable.id}">
  //               <input type="text" name="url" placeholder="vegetable-url" value="${vegetable.url}">
  //               <input class="input1" type="text" name="vegetablesName" placeholder="vegetable-name" value="${vegetable.vegetablesName}">
  //               <input class="input2" type="number" name="vegetablesNumber" placeholder="vegetable-Number" value="${vegetable.vegetablesNumber}">
  //               <br>
  //               <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
  //               <input type="submit" value="SET">
  //             </form>
  //           </div>`;
  //         } else {
  //           return `<div class="card">
  //             <img src="${vegetable.url}">
  //             <p>Name: ${vegetable.vegetablesName}</p>
  //             <p>Number: ${vegetable.vegetablesNumber}</p>
  //             <button onclick="addToProduct('${vegetable.id}')"> I buy one </button>
  //             <button onclick="revToProduct('${vegetable.id}')"> I ate one </button>
  //             <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
  //             <button onclick="handleEdit('${vegetable.id}')">Edit</button>
  //           </div>`;
  //         }
  //       }).join("");

  //     root.innerHTML = html;
  //   } catch (error) {
  //     console.error(error);
  //     return "";
  //   }
  // }
  function render(vegetables, root) {
    try {
      const html = vegetables
        .map((vegetable) => {
          let vegetablesNumber = vegetable.vegetablesNumber;
          if (vegetablesNumber <= 0) {
            vegetablesNumber = "empty";
          }
  
          if (vegetable.url === '') {
            vegetable.url = "https://cdn.carmella.co.il/wp-content/uploads/2020/11/9012.jpg";
          }
  
          if (vegetable.isEdit) {
            return `<div class="card">
              <form class="from1" onsubmit="handleSetEditvegetables(event)" id="${vegetable.id}">
                <input type="text" name="url" placeholder="vegetable-url" value="${vegetable.url}">
                <input class="input1" type="text" name="vegetablesName" placeholder="vegetable-name" value="${vegetable.vegetablesName}">
                <input class="input1" type="number" name="vegetablesNumber" placeholder="vegetable-Number" value="${vegetablesNumber}">
                <br>
                <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
                <input class="input2" type="submit" value="SET">
              </form>
            </div>`;
          } else {
            return `<div class="card">
              <img src="${vegetable.url}">
              <p>Name: ${vegetable.vegetablesName}</p>
              <p>Number: ${vegetablesNumber}</p>
              <button onclick="addToProduct('${vegetable.id}')"> I buy one </button>
              <button onclick="revToProduct('${vegetable.id}')"> I ate one </button>
              <button onclick="handleDeletevegetables('${vegetable.id}')">Delete</button>
              <button onclick="handleEdit('${vegetable.id}')">Edit</button>
            </div>`;
          }
        })
        .join("");
  
      root.innerHTML = html;
    } catch (error) {
      console.error(error);
      return "";
    }
  }
  

  function handleEdit(id) {
    const vegetable = vegetables.find((vegetable) => vegetable.id === id);
    if (vegetable) {
      vegetable.setEdit(true);
      const root = document.querySelector("#root");
      render(vegetables, root);
    }
  }

  function handleSetEditvegetables(event) {
    event.preventDefault();
    const id = event.target.id;
    const vegetablesName = event.target.elements.vegetablesName.value;
    const vegetablesNumber = event.target.elements.vegetablesNumber.value;
    const url = event.target.elements.url.value;
    const vegetable = vegetables.find((vegetable) => vegetable.id === id);
    if (vegetable) {
      vegetable.vegetablesName = vegetablesName;
      vegetable.vegetablesNumber = vegetablesNumber;
      vegetable.url = url;
      vegetable.setEdit(false);
      const root = document.querySelector("#root");
      render(vegetables, root);
    }
  }

  function handleDeletevegetables(id) {
    const index = vegetables.findIndex((vegetable) => vegetable.id === id);
    if (index !== -1) {
      vegetables.splice(index, 1);
      const root = document.querySelector("#root");
      render(vegetables, root);
    }
  }

<<<<<<< HEAD
  function addToProduct(id:string) {
    const vegetable = vegetables.find(vegetable => vegetable.id === id);
=======
  function addToProduct(id) {
    const vegetable = vegetables.find((vegetable) => vegetable.id === id);
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    if (vegetable) {
      vegetable.vegetablesNumber++;
      const root = document.querySelector("#root");
      render(vegetables, root);
      console.log(vegetable.vegetablesNumber);
    }
  }
  
<<<<<<< HEAD
  function revToProduct(id:string) {
=======
  function revToProduct(id) {
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
    const vegetable = vegetables.find((vegetable) => vegetable.id === id);
    if (vegetable) {
      if (vegetable.vegetablesNumber <= 0) {
        throw new Error("empty");
      } else {
        vegetable.vegetablesNumber--;
      }
      const root = document.querySelector("#root");
      render(vegetables, root);
    }
  }