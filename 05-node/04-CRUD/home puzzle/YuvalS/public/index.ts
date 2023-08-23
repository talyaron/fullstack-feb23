interface Product {
  name: string;
  phoneNumber: number;
  imgUrl: string;
  id?: string;
}

getproducts();

async function handleAddProduct(event: any) {
  try {
    event.preventDefault();
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const imgUrl = event.target.imgUrl.value;
    if (!name || !phoneNumber || !imgUrl) {
      throw new Error("Please complete all fields");
    }

    const product: Product = { name, phoneNumber, imgUrl };

    const response = await fetch("/API/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function getproducts() {
  try {
    const response = await fetch("/API/get-products");
    const results = await response.json();
    const { products } = results;
    if (!Array.isArray(products)) throw new Error("products are not array");
    console.log(products);
    console.log(results);
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderProductHTML(product: Product) {
  try {
    const html = `<div class="product">
      <img src="${product.imgUrl}" />
      <h3>${product.name}</h3>
      <p>Phone Number: ${product.phoneNumber}</p>
      <form id="${product.id}" onsubmit="handleUpdateProduct(event)"><input type="text" name="phoneNumber"  value="${product.phoneNumber}" placeholder="Price" /><input type="text" name="name"  value="${product.name}" placeholder="Name" /><input type="url" name="imgUrl"  value="${product.imgUrl}" placeholder="imgUrl" /><button type="submit">Update</button></form>
      <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
    </div>`;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderProducts(products: Product[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElement not found");
    console.log(products);
    if (!Array.isArray(products)) throw new Error("products are not array");
    const productsHTML = products
      .map((product) => renderProductHTML(product))
      .join("");
    HTMLElement.innerHTML = productsHTML;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetProducts() {
  const products = await getproducts();

  const root = document.querySelector("#root");
  renderProducts(products, root as HTMLDivElement);
}

async function handleDeleteProduct(id: string) {
  try {
    const response = await fetch("/API/delete-product", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    console.log(result);
    const { products } = result;

    renderProducts(products, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateProduct(ev: any) {
  try {
    ev.preventDefault();
    const phoneNumber = ev.target.phoneNumber.valueAsNumber;
    const id = ev.target.id;
    console.log(id, phoneNumber);

    const response = await fetch("/API/update-product", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, phoneNumber }),
    });

    const result = await response.json();
    console.log(result);
    const { products } = result;
    renderProducts(products, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}


