// import { Note } from "../API/note/noteModel";
renderEntrencePanel()

// async function handleAddProduct(event: any) {
//     try {
//         event.preventDefault();
//         const title = event.target.title.value;
//         const price = event.target.price.valueAsNumber;
//         const imgUrl = event.target.imgUrl.value;
//         if (!title || !price || !imgUrl) {
//             throw new Error('Please complete all fields');
//         }

//         const product: Product = { title, price, imgUrl };

//         const response = await fetch('/API/products/add-product', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(product)
//         });

//         const result = await response.json();
//         console.log(result);


//     } catch (error) {
//         console.error(error);
//     }

// }

// async function getPersons() {
//     try {
//         const response = await fetch('/API/persons/get-persons')
//         const results = await response.json();
//         const { persons } = results;
//         if (!Array.isArray(persons)) throw new Error("persons are not array");
//         console.log(persons)
//         console.log(results)
//         return persons;

//     } catch (error) {
//         console.error(error);
//         return []
//     }
// }

// function renderProductHTML(product: Product) {
//     try {
//         const html = `<div class="product">
//         <img src="${product.imgUrl}" />
//         <h3>${product.title}</h3>
//         <p>Price: ${product.price}</p>
//         <form id="${product.id}" onsubmit="handleUpdateProduct(event)"><input type="number" name="price"  value="${product.price}" placeholder="Price" /><button type="submit">Update</button></form>
//         <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
//       </div>`
//         return html;
//     } catch (error) {
//         console.error(error)
//         return ""
//     }
// }

// function renderProducts(products: Product[], HTMLElement: HTMLDivElement) {
//     try {
//         if (!HTMLElement) throw new Error("HTMLElement not found")
//         console.log(products)
//         if (!Array.isArray(products)) throw new Error("products are not array");
//         const productsHTML = products.map(product => renderProductHTML(product)).join("")
//         HTMLElement.innerHTML = productsHTML;
//     } catch (error) {
//         console.error(error)
//     }
// }

// async function handleGetProducts() {
//     const products = await getproducts();

//     const root = document.querySelector('#root');
//     renderProducts(products, root as HTMLDivElement);


// }

// async function handleDeleteProduct(id: string) {
//     try {
//         const response = await fetch('/API/products/delete-product', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ id })
//         });
//         const result = await response.json();
//         console.log(result);
//         const { products } = result;

//         renderProducts(products, document.querySelector('#root') as HTMLDivElement);

//     } catch (error) {
//         console.error(error)
//     }
// }

// async function handleUpdateProduct(ev: any) {
//     try {
//         ev.preventDefault();
//         const price = ev.target.price.valueAsNumber;
//         const id = ev.target.id;
//         console.log(id, price)

//         const response = await fetch('/API/products/update-product-price', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ id, price })
//         });

//         const result = await response.json();
//         console.log(result);
//         const { products } = result;
//         renderProducts(products, document.querySelector('#root') as HTMLDivElement);

//     } catch (error) {
//         console.error(error)
//     }
// }

function renderEntrencePanel() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Welcome to NoteList")
        renderFirstButtons(document.querySelector('#buttons') as HTMLDivElement)
    } catch (error) {
        console.error(error)
    }
}

function renderTitle(HTMLElement: HTMLDivElement, title: string) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<h1>${title}</h1>`
    } catch (error) {
        console.error(error)
    }
}

function renderFirstButtons(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<div><button onclick="handleLogin()">Login</button>
        <button onclick="handleRegister()">Register</button></div>`
    } catch (error) {
        console.error(error)
    }
}

function handleLogin() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Login")
        renderLogin(document.querySelector('#form') as HTMLDivElement);
    } catch (error) {
        console.error(error)
    }
}

function handleRegister() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Register")
        renderRegister(document.querySelector('#form') as HTMLDivElement);
    } catch (error) {
        console.error(error)
    }
}

async function renderLogin(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        
        HTMLElement.innerHTML = `<form class=loginForm onsubmit="handleLoginSubmit(event)">
        <select id="user">
        <option style="color:blue" value="blueSword">Blue sword</option>
        <option style="color:green" value="greenSword">Green sword</option>
        <option style="color:red" value="redSword">Red sword</option>
        <option style="color:white" value="whiteSword">White sword</option>
        </select> 
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Go</button>
      </form>`
    } catch (error) {
        console.error(error)
    }
}

function renderRegister(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<form class=registerForm onsubmit="handleRegisterSubmit(event)">
        <input type="text" name="userName" placeholder="User Name" />
        <input type="password" name="password" placeholder="Password" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" />
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Go</button>
      </form>`
    } catch (error) {
        console.error(error)
    }
}