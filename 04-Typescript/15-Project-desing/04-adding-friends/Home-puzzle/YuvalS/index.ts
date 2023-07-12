//model
class Product {
    id: string;
    isEdit: boolean = false;
    constructor(public name: string, public image: string, public number: number, id?: string | null) {
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

const products: Product[] = getProductsFromStorage();
renderAllProducts(products, document.querySelector("#rootProducts"));

function getProductsFromStorage(): Product[] {
    try {
      //get producta from locastorage (string)
      const producstString = localStorage.getItem("products");
      if (!producstString) return [];
  
      //convert string to array of objects
      const productsArray = JSON.parse(producstString);
  
      //convert array of objects to array of product
      const products: Product[] = productsArray.map((product: Product) => {
        return new Product(
          product.name,
          product.image,
          product.number,
          product.id,
        );
      });
  
      return products;
    } catch (error) {
      console.error(error);
      return [];
    }
  }


// from view to model: view-control-model

function handleAddProduct(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const image = ev.target.elements.image.value;
        const number = ev.target.elements.number.value;

        const newProduct = new Product(name, image, number);
        products.push(newProduct);
        renderAllProducts(products, document.querySelector("#rootProducts"))

        //save to localStorage

        localStorage.setItem("products", JSON.stringify(products))
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}

//render list of friends
//model -> controler --> view

function renderAllProducts(products: Product[], htmlElement: HTMLElement | null) {
    try {
        if (!htmlElement) throw new Error("No element");
        const html = products.map(product => renderProductCard(product)).join(' ')

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}


function renderProductCard(product: Product) {
    try {
        if (product.isEdit) {
            return `<div class="card">
                    <img src="${product.image}">
                    <form onsubmit="handleSetEditProduct(event)" id="${product.id}">
                        <input type="text" name="name" value="${product.name}">
                        <input type="url" name="image" value="${product.image}">
                        <input type="number" name="number" value="${product.number}">
                        <br>
                        <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
                        <input type="submit" value="SET">
                    </form>
                </div>
                `
        } else {
            return `<div class="card">
        <img src="${product.image}">
        <p>${product.name}</p>
        <p>${product.number}</p>
        <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
        <button onclick="handle_Edit('${product.id}')">Edit</button>
    </div>
`
        }


    } catch (error) {
        console.error(error);
        return ''
    }
}

//delete

function handleDeleteProduct(productId: string) {
    try {
      const index = products.findIndex((product) => product.id === productId);
      if (index === -1) throw new Error("Could not find product");
  
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
  
      renderAllProducts(products, document.querySelector("#rootProducts"));
    } catch (error) {
      console.error(error);
    }
  }


  // enable editing

function handle_Edit(productId: string) {
    try {
      const product = products.find((product) => product.id === productId);
      if (!product) throw new Error("couldnt find product");
  
      product.setEdit(true);
      renderAllProducts(products, document.querySelector("#rootProducts"));
    } catch (error) {
      console.error(error);
    }
  }

  function handleSetEditProduct(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.name.value;
      const image = ev.target.image.value;
      const number = ev.target.number.value;
      const productId: string = ev.target.id;
  
      const product: Product | undefined = products.find(
        (product) => product.id === productId,
      );
      if (!product) throw new Error("couldnt find product");
      product.name = name;
      product.image = image;
      product.number = number;
      product.setEdit(false);
      console.log(products);
      localStorage.setItem("products", JSON.stringify(products));
      renderAllProducts(products, document.querySelector("#rootProducts"));
    } catch (error) {
      console.error(error);
    }
  }
  