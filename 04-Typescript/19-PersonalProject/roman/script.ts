//model

class Product {
    // id: string;

    constructor(
        public name: string,
        public brand: string,
        public category: string,
        public price: number,
        public description: string,
        public img: URL | string,
        public id?: string) {
        if (id) {
            this.id = id
        } else {
            this.id = "id-" + Math.random().toString(16).slice(2)

        }
    }


}

class Cart {
    private items: string[];

    constructor() {
        this.items = [];
    }

    addItem(product: Product): void {
        console.log(product)
        this.items.push(product);
    }

    removeItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getItems(): string[] {
        return this.items;
    }

    clearCart(): void {
        this.items = [];
    }
    renderCart(): string {
        let tableHTML = '<h2>Cart</h2><br><table><tr><th>Image:</th><th>Name:</th><th>Amount:</th><th>Price</th><th>Remove</th></tr>';
        tableHTML += this.items.map(item => {
            return `
            <tr><td><img src='${item.img}'></td><td>${item.brand} ${item.name}</td><td></td><td>${item.price}</td><td><button onclick="removeFromCart('${item.id}')">Remove</button></td></tr>`

        }).join("")
        //  
        //     <tr>
        //       <td class="products__item" id="${item.id}" onclick="renderProductPage(event.target.id)">
        //         <div class="products__item-img" id="${item.id}" style="background-image: url(${item.img})"></div>
        //         <div class="products__item-name" id="${item.id}">${item.name}</div>
        //         <div class="products__item-description" id="${item.id}">${item.description}</div>
        //         <div class="products__item-price" id="${item.id}">Price: <span>${item.price}</span> ₪</div>
        //       </td>
        //     </tr>
        //   `;
        // }
        tableHTML += '</table>';
    
        productsDiv.innerHTML = tableHTML;
}}
const cart = new Cart;

const db: Product[] = [
    new Product("SONAMASTER SB1P",
        "Washburn",
        "Bass Guitar",
        918,
        "גיטרה בס מסדרת Sonamaster בגימור TOBACCO SUNBURST מבית Washburn",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5519201/large/37a537bc5d9e74f147ed99e754f489f3.jpg'
    ),
    new Product(
        "T24",
        "Washburn",
        "Bass Guitar",
        4026,
        "גיטרה בס חשמלית מסדרת טאורוס של Washburn",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/561302/large/5dafd8db48490019f65b158f7cea513b.jpg'
    ),
    new Product(
        'ARROW-NT BLACK METAL',
        'ESP',
        'Electric Guitar',
        4276,
        "גיטרה חשמלית מסדרת LTD BLACK METAL בגימור BLACK SATIN מבית ESP",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/9803362/large/8bca8e9cc2ef77410f837825128f8c3f.jpg'

    ),
    new Product(
        'LTD H-1001FR',
        'ESP',
        'Electric Guitar',
        4603,
        "גיטרה חשמלית מסדרת H בגימור BLACK NATURAL BURST מבית ESP LTD",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5286638/large/f77e897d1719e3100ffa05e142f39ac6.jpg'
    ),
    new Product(
        'V2.6MDS',
        'Solar',
        'Electric Guitar',
        4293,
        "גיטרה חשמלית בגימור Metallic Dark Silver מסדרת ה-V2 של Solar Guitars",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/5815197/large/a773435d8a139a90ecaf6d522b1dc009.jpg'
    ),
    new Product(
        'OC11',
        'Oscar Schmidt',
        'Classic Guitar',
        674,
        "גיטרה קלאסית קלת משקל ומפיקה צליל חלק, מאוזן וברור, מבית Oscar Schmidt",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/562341/large/9d0c9266bf0f08b5aea5a4e9d2382d50.jpg'

    ),
    new Product(
        "OG2CE",
        "Oscar Schmidt",
        'Acoustic Guitar',
        620,
        "גיטרה אקוסטית מוגברת בתצורת dreadnought cutaway בגימור שחור מבריק מבית Oscar Schmidt",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/4694331/large/6c9ca0600f5cd9f60dc857dddce76ca4.jpg'
    ),
    new Product(
        "APPRENTICE AG40CE",
        "Washburn",
        'Acoustic Guitar',
        704,
        "גיטרה אקוסטית מוגברת עם cut מסדרת Apprentice מבית Washburn",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/10873267/large/720cfc2546e226358e7b7c45ed7ca428.jpg'
    ),
    new Product(
        "WI200PRO",
        "Washburn",
        'Electric Guitar',
        2471,
        "גיטרה חשמלית מסדרת ה-IDOL של Washburn",
        'https://d3m9l0v76dty0.cloudfront.net/system/photos/11676477/large/c049a6cc44221dc05c33ee01d2263b8f.jpg'
    ),
    new Product(
        "AVANTE GRYPHON 12 Natural",
        "ESP",
        "Acoustic Guitar",
        6458,
        "גיטרה אקוסטית מוגברת 12 מיתרים מסדרת GRYPHON בגימור Natural מבית ESP",
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/5168441/large/9366b0175b835fda3f71248f83633f8f.jpg"
    )
]

saveProductsToLocalStorage(db);

const products: Product[] = getProductsFromStorage();



//view
const productsDiv: HTMLElement | null = document.querySelector(".products");
const navDiv: HTMLElement | null = document.querySelector(".nav");


function renderProductsPage(elm) {
    try {
        if (!elm) throw new Error('no div element')
        if (!products) throw new Error('no products')
        var html = products.map(item => {
            return `
            <div class="products__item" id="${item.id}" onclick="renderProductPage(event.target.id)">
            <div class="products__item-img" id="${item.id}" style="background-image: url(${item.img})"></div>
            <div class="products__item-name"id="${item.id}" >${item.name}</div>
            <div class="products__item-description" id="${item.id}">${item.description}</div>
            <div class="products__item-price" id="${item.id}">Price: <span>${item.price}</span> ₪</div>
          </div>`
        }).join(" ")
        elm.innerHTML = html;



    } catch (error) {
        console.error(error)
    }
}
navDiv.addEventListener("click", (event: Event) => {
    try {
        if (!event) {
            throw new Error('No event');
        }

        const target = event.target as HTMLElement;
        const value = target.innerHTML;

        switch (value) {
            case 'Classic Guitars':
            case 'Acoustic Guitars':
            case 'Electric Guitars':
            case 'Bass Guitars':
                renderCategoryPage(value, productsDiv);
                break;
            default:
                throw new Error('Invalid category value');
        }
    } catch (error) {
        console.error(error);
    }
});




function renderCategoryPage(category, divElement) {
    try {
        if (!category) throw new Error('no category')
        // if (!divElement) throw new Error('no divElement')
        if (!products) throw new Error('no products')

        var filteredCategory = products.filter(cat => {
            return cat.category === category.slice(0, -1)
        })

        var html = filteredCategory.map(item => {
            return `
            <div class="products__item" id="${item.id}" onclick="renderProductPage(event.target.id)">
            <div class="products__item-img" id="${item.id}"style="background-image: url(${item.img})"></div>
            <div class="products__item-name"id="${item.id}">${item.name}</div>
            <div class="products__item-description"id="${item.id}">${item.description}</div>
            <div class="products__item-price"id="${item.id}">Price: <span>${item.price}</span> ₪</div>
          </div>`
        }).join(" ")
        divElement.innerHTML = html;



    } catch (error) {
        console.error(error)
    }
}


function renderProductPage(productId) {
    try {
        if (!productId) {
            throw new Error('No product ID provided');
        }

        if (!products) {
            throw new Error('No products data available');
        }

        const product = products.find(product => product.id === productId);

        if (product !== undefined) {
            const html = `
                <div class="product" id="${product.id}">
                    <div class="product__img" style="background-image: url(${product.img})" alt="${product.description}"></div>
                    <div class="product__text">
                        <h2 class="product__text-name">${product.name} ${product.brand}</h2>
                        <div class="product__text-description">${product.description}</div>
                        <div class="product__text-price">מחיר: <span>${product.price}</span> ₪</div>
                        <button class="btn product__btn-add" onclick="addToCart('${product.id}')">Add To Cart</button>
                    </div>
                </div>`;
            if (!productsDiv) throw new Error('no div element')
            productsDiv.innerHTML = html;
        } else {
            throw new Error('Product not found');
        }
    } catch (error) {
        console.error(error);
    }
}



renderProductsPage(productsDiv)


// function renderCartPage(){
//   console.log(cart)
//   var html = cart.items.map(item => {
//     return `
//     <div class="products__item" id="${item.id}" onclick="renderProductPage(event.target.id)">
//     <div class="products__item-img" id="${item.id}"style="background-image: url(${item.img})"></div>
//     <div class="products__item-name"id="${item.id}">${item.name}</div>
//     <div class="products__item-description"id="${item.id}">${item.description}</div>
//     <div class="products__item-price"id="${item.id}">Price: <span>${item.price}</span> ₪</div>
//   </div>`
// }).join(" ")
// productsDiv.innerHTML = html;
// }


function addToCart(id) {
    console.log(id);
    const product = products.find(product => product.id === id);
    cart.addItem(product)
    cart.renderCart()

}
function removeFromCart(id) {
    const product = products.find(product => product.id === id);
    cart.removeItem(product)
    cart.renderCart()
}

function saveProductsToLocalStorage(products: Product[]) {
    localStorage.setItem("Products", JSON.stringify(products));
}

function getProductsFromStorage() {
    let productsString = localStorage.getItem("Products");
    if (!productsString) return [];
    const productsArray = JSON.parse(productsString);
    const products: Product[] = productsArray.map((product: Product) => {
        return new Product(product.name, product.brand, product.category, product.price, product.description, product.img, product.id);
    })

    return products;

}




// restartButton.addEventListener('click', startGame)
//control


