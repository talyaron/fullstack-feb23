interface Note {
    title: string;
    description: string;
    status: string;
}

class User {
    id?: string;
    constructor(public userName: string, public password: string, public phoneNumber: string, public email: string) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}

let currentUser: User | null = null;

async function handleLoginSubmit(event: any) {
    try {
        event.preventDefault();
        const selectedUser: HTMLSelectElement = document.querySelector("#user") || new HTMLSelectElement();
        if (!selectedUser) throw new Error("User not found")
        const userId = selectedUser.value;
        const password = event.target.password.value;
        
        if (!userId || !password) throw new Error("Please complete all fields")
        const response = await fetch('/API/users/get-users')
        const results = await response.json();
        const { users } = results;
        if (!Array.isArray(users)) throw new Error("users are not array");
        const user = users.find((user) => user.id === userId);
        if (!user) throw new Error("User not found");
        if (user.password !== password) {
            alert("Password is incorrect");
            throw new Error("Password is incorrect");
        }
        currentUser = user;
        renderUserPage(document.querySelector('#root') as HTMLDivElement, user);
    }
    catch (error) {
        console.error(error);
    }
}


async function handleRegisterSubmit(event: any) {
    try {
        event.preventDefault();
        const userName = event.target.userName.value;
        const password = event.target.password.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;
        if (!userName || !password || !phoneNumber || !email) throw new Error("Please complete all fields")
        if (await checkIfUserExist(userName)) throw new Error("User already exist");
        const user = new User(userName, password, phoneNumber, email);
        const response = await fetch('/API/users/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();
        console.log(result);
        


    } catch (error) {
        console.error(error);
    }

}

async function checkIfUserExist(userName: string): Promise<boolean> {
    try {
        const response = await fetch('/API/users/get-users')
        const results = await response.json();
        const { users } = results;
        
        if (!Array.isArray(users)) throw new Error("users are not array");
        const user = users.findIndex((user) => user.userName === userName);
        if (user !== -1) {
            alert("Name already exist, please choose another name")
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}


// async function getusers() {
//     try {
//         const response = await fetch('/API/users/get-users')
//         const results = await response.json();
//         const { users } = results;
//         if (!Array.isArray(users)) throw new Error("users are not array");
//         console.log(users)
//         console.log(results)
//         return users;

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


async function getusers() {
    try {
        const response = await fetch('/API/users/get-users')
        console.log(response)
        const results = await response.json();
        
        const { users } = results;
        if (!Array.isArray(users)) throw new Error("products are not array");
        console.log(users)
        console.log(results)
        return users;

    } catch (error) {
        console.error(error);
        return []
    }
}


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

function renderUserPage(HTMLElement: HTMLDivElement, user: User) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<div id="title"></div>
        <div id="buttons"></div>
        <div id="form"></div>`
        renderTitle(document.querySelector('#title') as HTMLDivElement, `Welcome ${user.userName}`)
        renderUserButtons(document.querySelector('#buttons') as HTMLDivElement, user)
    } catch (error) {
        console.error(error)
    }
}

function renderUserButtons(HTMLElement: HTMLDivElement, user: User) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<div><button onclick="handleAddNote()">Add Note</button>
        <button onclick="handleShowNotes()">Show Notes</button>
        <button onclick="handleUpdatePassword()">Update Password</button>
        <button onclick="handleUpdateEmail()">Update Email</button>
        <button onclick="handleDeleteUser()">Delete User</button></div>`
    } catch (error) {
        console.error(error)
    }
}

function handleAddNote() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Add Note")
        renderAddNoteForm(document.querySelector('#form') as HTMLDivElement)
    } catch (error) {
        console.error(error)
    }
}

function renderAddNoteForm(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<form class=addNoteForm onsubmit="handleAddNoteSubmit(event)">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add</button>
      </form>`
    } catch (error) {
        console.error(error)
    }
}

async function handleShowNotes() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Show Notes")
        renderNotes(document.querySelector('#form') as HTMLDivElement)
    } catch (error) {
        console.error(error)
    }
}

async function renderNotes(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        const response = await fetch('/API/note/get-notes')
        const results = await response.json();
        const { notes } = results;
        if (!Array.isArray(notes)) throw new Error("notes are not array");
        const notesHTML = notes.map(note => renderNoteHTML(note)).join("")
        HTMLElement.innerHTML = notesHTML;
    } catch (error) {
        console.error(error)
    }
}

function renderNoteHTML(note: Note) {
    try {
        const html = `<div class="note">
        <h3>${note.title}</h3>
        <p>${note.description}</p>
        <p>${note.status}</p>
        <button onclick="handleDeleteNote('${note.title}')">Delete</button>
      </div>`
        return html;
    } catch (error) {
        console.error(error)
        return ""
    }
}


async function handleAddNoteSubmit(event: any) {
    try {
        debugger;
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        if (!title || !description) throw new Error("Please complete all fields")
        if (!currentUser) throw new Error("User not found")
        const status = "To-Do";
        const userID = currentUser.id;
        const note = { title, description, status, userID};
        const response =  await fetch('/API/note/add-note', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        });

        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.error(error);
    }
}





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
        const users = await getusers();
        let html = `<form class=loginForm onsubmit="handleLoginSubmit(event)">
        <select id="user">`
        html += users.map(user => `<option value="${user.id}">${user.userName}</option>`).join("");
        html += `</select> 
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Go</button>
      </form>`
        HTMLElement.innerHTML = html;
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
        <button type="submit">Sign up</button>
      </form>`
    } catch (error) {
        console.error(error)
    }
}

renderEntrencePanel()
