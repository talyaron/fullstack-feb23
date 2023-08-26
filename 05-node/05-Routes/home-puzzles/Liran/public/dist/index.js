var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import { Note } from "../API/note/noteModel";
renderEntrencePanel();
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
        renderTitle(document.querySelector('#title'), "Welcome to NoteList");
        renderFirstButtons(document.querySelector('#buttons'));
    }
    catch (error) {
        console.error(error);
    }
}
function renderTitle(HTMLElement, title) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<h1>" + title + "</h1>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderFirstButtons(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<div><button onclick=\"handleLogin()\">Login</button>\n        <button onclick=\"handleRegister()\">Register</button></div>";
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogin() {
    try {
        renderTitle(document.querySelector('#title'), "Login");
        renderLogin(document.querySelector('#form'));
    }
    catch (error) {
        console.error(error);
    }
}
function handleRegister() {
    try {
        renderTitle(document.querySelector('#title'), "Register");
        renderRegister(document.querySelector('#form'));
    }
    catch (error) {
        console.error(error);
    }
}
function renderLogin(HTMLElement) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (!HTMLElement)
                    throw new Error("HTMLElement not found");
                HTMLElement.innerHTML = "<form class=loginForm onsubmit=\"handleLoginSubmit(event)\">\n        <select id=\"user\">\n        <option style=\"color:blue\" value=\"blueSword\">Blue sword</option>\n        <option style=\"color:green\" value=\"greenSword\">Green sword</option>\n        <option style=\"color:red\" value=\"redSword\">Red sword</option>\n        <option style=\"color:white\" value=\"whiteSword\">White sword</option>\n        </select> \n        <input type=\"password\" name=\"password\" placeholder=\"Password\" />\n        <button type=\"submit\">Go</button>\n      </form>";
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function renderRegister(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<form class=registerForm onsubmit=\"handleRegisterSubmit(event)\">\n        <input type=\"text\" name=\"userName\" placeholder=\"User Name\" />\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" />\n        <input type=\"text\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n        <input type=\"text\" name=\"email\" placeholder=\"Email\" />\n        <button type=\"submit\">Go</button>\n      </form>";
    }
    catch (error) {
        console.error(error);
    }
}
