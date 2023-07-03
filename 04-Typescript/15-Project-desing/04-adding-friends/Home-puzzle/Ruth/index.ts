class Product {
  constructor(
    public name: string,
    public amount: number = 0,
    public imgSrc: string,
    public id: string = createId(),
  ) {}
}

function createId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}

const firstProducts: Product[] = [
  new Product(
    "carrot",
    6,
    "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_1280.jpg",
  ),
  new Product(
    "tomato",
    12,
    "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_1280.jpg",
  ),
  new Product(
    "stawberry",
    4,
    "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg",
  ),
  new Product(
    "pineapplw",
    2,
    "https://cdn.pixabay.com/photo/2023/06/11/19/09/fruit-8056663_1280.jpg",
  ),
  new Product(
    "cucumber",
    11,
    "https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg",
  ),
  new Product(
    "lemon",
    11,
    "https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_1280.jpg",
  ),
  new Product(
    "lettuce",
    1,
    "https://cdn.pixabay.com/photo/2015/05/17/14/29/salad-771056_1280.jpg",
  ),
  new Product(
    "celery",
    2,
    "https://cdn.pixabay.com/photo/2015/07/31/12/07/soup-greens-869075_1280.jpg",
  ),
  new Product(
    "mushroom",
    1,
    "https://media.istockphoto.com/id/1290604185/photo/shiitake-mushrooms-set-on-black-background-side-view-space-for-text.jpg?s=612x612&w=0&k=20&c=wR8fSeaARySoHGD2rdm0AoZRtS8rjZdKzXQSrEm-QyI=",
  ),
  new Product(
    "avocado",
    5,
    "https://cdn.pixabay.com/photo/2015/09/09/20/17/avocado-933060_1280.jpg",
  ),
  new Product(
    "apple",
    7,
    "https://cdn.pixabay.com/photo/2016/08/14/11/56/apples-1592588_1280.jpg",
  ),
  new Product(
    "orange",
    9,
    "https://cdn.pixabay.com/photo/2016/03/29/01/06/cilantro-1287301_1280.jpg",
  ),
];

const products: Product[] = getProductsFromLocalStorage();

function getProductsFromLocalStorage() {
  try {
    const productsString = localStorage.getItem("products");
    if (!productsString){
        localStorage.setItem("products", JSON.stringify(firstProducts))
        return firstProducts;
    } 
    else {
      const productsArray = JSON.parse(productsString);
      const products = productsArray.map((pro) => {
        return new Product(pro.name, pro.amount, pro.imgSrc);
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
    .map(
      (product) => `
    <div class="productItem" name="${product.name}">
    <img src="${product.imgSrc}" alt="">
    <h3 id="productName">${product.name}</h3>
    <button onclick="addToProduct('${product.id}')"> + </button>
    <h4 id="productAmount">${product.amount}</h4>
    <button onclick="reduceFromProduct('${product.id}')"> - </button>
    </div>
    `,
    )
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

function updateInLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}
