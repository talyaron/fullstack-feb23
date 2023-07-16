class Product {
  constructor(
    public name: string,
    public amount: number = 0,
    public imgSrc: string,
    public price: number,
    public id: string = createId(),
    public isEdit: boolean = false,
  ) { }

  setEdit(set: boolean) {
    this.isEdit = set;
  }
}

function createId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}

const firstProducts: Product[] = [
  new Product(
    "Medical food can",
    6,
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAyzAhgyuBcL3IL0VlfGbcEesqxNKcqFoSWISCb2jEdiTBKBpKYPU2Eh3EvdIITjim8fqfx8m2N79dyQXIp8gTPeS0S0sQfPLs2dwfvtwJU5WAD4US89Fd&usqp=CAc", 17
  ),
  new Product(
    "Ampoule Anti-flea & Tick",
    5,
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7ER1AcRiMl6jrJDpnzzxlipIEYWPDK6ywuVhv9bLcBTlNiSi7ZgryJO6yd-_0_cyXhioq_tCVyNKi616y0dxBwgyNfKsRZO11tjigZPd1ND_J1FPPP3fUNA&usqp=CAc", 179
  ),
  new Product(
    "Ampoule Anti-flea & Tick",
    5,
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7ER1AcRiMl6jrJDpnzzxlipIEYWPDK6ywuVhv9bLcBTlNiSi7ZgryJO6yd-_0_cyXhioq_tCVyNKi616y0dxBwgyNfKsRZO11tjigZPd1ND_J1FPPP3fUNA&usqp=CAc", 179
  ),
  new Product(
    "seringe",
    2,
    "https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg", 10
  ),
  new Product(
    "Anti-flea & Tick tablets",
    11,
    "https://www.gag-lachayot.co.il/wp-content/uploads/2020/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9B%D7%95%D7%9C%D7%9C%D7%AA-%D7%A1%D7%98%D7%A8%D7%95%D7%A0%D7%92%D7%94%D7%95%D7%9C%D7%93-%D7%97%D7%AA%D7%95%D7%9C.jpg", 189
  ),
  new Product(
    "Ear & eye drops",
    11,
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_gi6ZjmjE7NZQ4rig15PDbSPwy-oXu6tykhosqgx10dKbBJkNw6skcYje9p6zXtGxY8YWNyJVMcnM90I2_Z1I42bp7rr-xrv67OKhUqfIiEWV000cSp07&usqp=CAc", 38
  ),
];

let products: Product[] = getProductsFromLocalStorage();

function getProductsFromLocalStorage() {
  try {
    const productsString = localStorage.getItem("products");
    if (!productsString) {
      localStorage.setItem("products", JSON.stringify(firstProducts));
      return firstProducts;
    } else {
      const productsArray = JSON.parse(productsString);
      const products = productsArray.map((pro) => {
        return new Product(pro.name, pro.amount, pro.imgSrc, pro.price);
      });
      return products;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderProducts() {
  const html = products
    .map((product) => {
      if (!product.isEdit)
        return `
      <div class="productItem ${product.id}" name="${product.name}">
      <button id="deleteBtn" onclick="deleteProduct('${product.id}')" >
      <span class="material-symbols-outlined"> delete </span></button>
      <button id="editBtn" onclick="editProduct(event, '${product.id}')"> <span class="material-symbols-outlined"> edit </span></button>
      <img src="${product.imgSrc}" alt="">
      <h3 id="productName">${product.name}</h3>
      <button onclick="addToProduct('${product.id}')"> + </button>
      <h4 id="productAmount">${product.amount}</h4>
      <button onclick="reduceFromProduct('${product.id}')"> - </button>
      </div>
      `;
      else
        return `
      <div class="productItem" name="${product.name}">
      <button id="deleteBtn" onclick="deleteProduct('${product.id}')" > <span class="material-symbols-outlined"> delete </span></button>
      <button id="editBtn" onclick="editProduct(event, '${product.id}')"> <span class="material-symbols-outlined"> edit </span></button>
  
      <img src="${product.imgSrc}" alt="">
      <h3 id="productName">${product.name}</h3>
      <button onclick="addToProduct('${product.id}')"> + </button>
      <input type="number" value = ${product.amount} id="editProductAmount"></input>
      <button onclick="reduceFromProduct('${product.id}')"> - </button>
      </div>
      `;
    })
    .join(" ");

  const root = document.querySelector("#productGallery") as HTMLDivElement;
  root.innerHTML = html;
}

function addToProduct(productId: string) {
  const chosenPro: Product = products.find((pro) => pro.id === productId)!;
  if (chosenPro) {
    chosenPro.amount++;
    renderProducts();
    updateInLocalStorage();
  }
}
function reduceFromProduct(productId: string) {
  const chosenPro: Product = products.find((pro) => pro.id === productId)!;
  if (chosenPro && chosenPro.amount > 0) {
    chosenPro.amount--;
    renderProducts();
    updateInLocalStorage();
  }
}

function deleteProduct(productId: string) {
  const indexToRemoved = products.findIndex((pro) => pro.id === productId);

  products.splice(indexToRemoved, 1);
  updateInLocalStorage();
  renderProducts();
}

function editProduct(event: any, productId: string) {
  try {
    const productToEdit: Product = products.find(
      (pro) => pro.id === productId,
    )!;
    if (!productToEdit) throw new Error("couldn't fined productToEdit ");
    if (productToEdit.isEdit == true) {
      const amountValue =
        event.target.parentNode.parentNode.querySelector("input").value;
      productToEdit.amount = amountValue;
      productToEdit.setEdit(false);
      renderProducts();
    } else {
      productToEdit.setEdit(true);
      renderProducts();
    }
    updateInLocalStorage();
    renderProducts();
  } catch (error) {
    console.error(error);
  }
}

function updateInLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

function renderAddProductForm() {
  const root: HTMLDivElement = document.querySelector(
    ".addProductForm",
  ) as HTMLDivElement;
  root.classList.toggle("active");
  if (root.classList.contains("active")) {
    const btn = document.querySelector("#addProductBtn") as HTMLButtonElement;
    btn.innerHTML = ` x `;
  } else {
    const btn = document.querySelector("#addProductBtn") as HTMLButtonElement;
    btn.innerHTML = "+";
  }
  root.innerHTML = `
      <form id="addProductForm" onsubmit="handelNewProduct(event)">
      <label for="newName"> name of product: </label>
      <input type="text" id="newName" required><br>
      <label for="newImgSrc"> Image source of product: </label>
      <input type="url" id="newImgSrc" required><br>
      <label for="newAmount"> Image address: </label>
      <input type="number" id="newAmount" value="0" min="0"><br>
      <label for="newPrice"> Price: </label><br>
      <input type="text" id="newPrice" required>
      <br><button type="submit">ADD</button>
      </form>`;
}

function handelNewProduct(ev: any) {
  ev.preventDefault();
  const newName = ev.target.newName.value;
  const newAmount = ev.target.newAmount.value;
  const newImgSrc = ev.target.newImgSrc.value;
  const newPrice = ev.target.newPrice.value;

  products = getProductsFromLocalStorage();
  products.push(new Product(newName, newAmount, newImgSrc, newPrice));
  renderProducts();
  updateInLocalStorage();
  const root: HTMLDivElement = document.querySelector(".addProductForm")!;
  root.innerHTML = "";
  root.classList.toggle("active");
  const btn = document.querySelector("#addProductBtn") as HTMLButtonElement;
  btn.innerHTML = "+";
}

function searchProducts(event: any) {
  const textToSearch = event.target.value.toLowerCase();
  products.forEach((product) => {
    const element = document.querySelector(`[name= "${product.name}" ]`,) as HTMLDivElement;
    if (!product.name.toLowerCase().includes(textToSearch))
      element.classList.add("isntFound");
    else element.classList.remove("isntFound");
  });
}
