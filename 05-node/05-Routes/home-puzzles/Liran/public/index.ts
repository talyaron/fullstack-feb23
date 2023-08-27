interface Task {
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
        alert("User added successfully");
        currentUser = user;
        renderLogin(document.querySelector('#form') as HTMLDivElement);


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
        <div id="panel"><div id="buttons"></div>
        <div id="form"></div></div>`
        renderTitle(document.querySelector('#title') as HTMLDivElement, `Welcome ${user.userName}`)
        renderUserButtons(document.querySelector('#buttons') as HTMLDivElement, user)
        //renderLogoutButton(document.querySelector('#form') as HTMLDivElement);
    } catch (error) {
        console.error(error)
    }
}

// function renderLogoutButton(HTMLElement: HTMLDivElement) { 
//     try {
//         if (!HTMLElement) throw new Error("HTMLElement not found")
//         HTMLElement.innerHTML += `<button id=logout onclick="handleLogout()">Logout</button>`
//     } catch (error) {
//         console.error(error)
//     }
// }

function handleLogOut() {
    try {
        debugger;
        currentUser = null;
        renderEntrencePanel();
    } catch (error) {
        console.error(error)
    }
}

function renderUserButtons(HTMLElement: HTMLDivElement, user: User) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<div id=userUI><button onclick="handleAddTask()">Add Task</button>
        <button onclick="handleShowTasks()">Show Tasks</button>
        <button onclick="handleUpdatePassword()">Update Password</button>
        <button onclick="handleUpdateEmail()">Update Email</button>
        <button onclick="handleDeleteUser()">Delete User</button>
        <button onclick="handleLogOut()">Log out</button></div>`
    } catch (error) {
        console.error(error)
    }
}

async function handleUpdateEmail() {
    try {
        if (!currentUser) throw new Error("User not found")
        const newEmail = prompt("Please enter new email");
        if (!newEmail) throw new Error("Please enter new email");
        const response = await fetch('/API/users/update-user-email', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id, email: newEmail })
        });
        const result = await response.json();
        console.log(result);
        alert("Email updated successfully");
    } catch (error) {
        console.error(error)
    }
}

async function handleDeleteUser() {
    try {
        if (!currentUser) throw new Error("User not found")
        const response = await fetch('/API/users/delete-user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id })
        });
        const result = await response.json();
        console.log(result);
        currentUser = null;
        renderEntrencePanel();
    } catch (error) {
        console.error(error)
    }
}

async function handleUpdatePassword() {
    try {
        if (!currentUser) throw new Error("User not found")
        const newPassword = prompt("Please enter new password");
        if (!newPassword) throw new Error("Please enter new password");
        const response = await fetch('/API/users/update-user-password', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id, password: newPassword })
        });
        const result = await response.json();
        console.log(result);
        alert("Password updated successfully");
        currentUser = null;
        renderEntrencePanel();
    } catch (error) {
        console.error(error)
    }
}

function handleAddTask() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Add Task")
        renderAddTaskForm(document.querySelector('#form') as HTMLDivElement)
    } catch (error) {
        console.error(error)
    }
}

function renderAddTaskForm(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = `<form id=addTaskForm onsubmit="handleAddTaskSubmit(event)">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <button type="submit">Add</button>
      </form>`
    } catch (error) {
        console.error(error)
    }
}

async function handleShowTasks() {
    try {

        renderTitle(document.querySelector('#title') as HTMLDivElement, "Show Tasks")
        renderTasks(document.querySelector('#form') as HTMLDivElement, currentUser.id)
    } catch (error) {
        console.error(error)
    }
}



async function handleDeleteTask(title: string) {
    try {
        if (!currentUser) throw new Error("User not found")
        const response = await fetch('/API/task/delete-task', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id, title })
        });
        const result = await response.json();
        console.log(result);
        renderTasks(document.querySelector('#form') as HTMLDivElement, currentUser.id)
    } catch (error) {
        console.error(error)
    }
}

async function handleUpdateStatus(title: string) {
    try {
        if (!currentUser) throw new Error("User not found")
        const response = await fetch('/API/task/update-task-status', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id, title: title, newStatus: "Done" })
        });
        const result = await response.json();
        console.log(result);
        renderTasks(document.querySelector('#form') as HTMLDivElement, currentUser.id)
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

async function handleAddTaskSubmit(event: any) {
    try {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        console.log(title, description)

        if (!title || !description) throw new Error("Please complete all fields")
        if (!currentUser) throw new Error("User not found")
        const status = "To-Do";
        const userID = currentUser.id;
        if (await checkIfTaskExist(title, userID)) throw new Error("Task already exist");
        const task = { title: title, description: description, status: status, id: userID };
        const response = await fetch('/API/task/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const result = await response.json();
        alert("Task added successfully");
        event.target.reset();
    } catch (error) {
        console.error(error);
    }
}

async function checkIfTaskExist(title: string, id: string): Promise<boolean> {
    try {
        const response = await fetch(`/API/task/get-tasks?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const results = await response.json();
        const { tasks } = results;
        if (!Array.isArray(tasks)) throw new Error("Tasks are not array");
        const task = tasks.findIndex((task) => task.title === title);
        if (task !== -1) {
            alert("Task already exist, please choose another title")
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}



function renderEntrencePanel() {
    try {
        renderTitle(document.querySelector('#title') as HTMLDivElement, "Welcome to TaskList")
        renderFirstButtons(document.querySelector('#buttons') as HTMLDivElement)
        clearForm(document.querySelector('#form') as HTMLDivElement);
    } catch (error) {
        console.error(error)
    }
}

function clearForm(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        HTMLElement.innerHTML = ""
    } catch (error) {
        console.error(error)
    }
}

async function renderTasks(HTMLElement: HTMLDivElement, id: string) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        const response = await fetch(`/API/task/get-tasks?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const results = await response.json();
        console.log(response);
        const { tasks } = results;
        if (!Array.isArray(tasks)) throw new Error("tasks are not array");
        let tasksHTML = ``;
        tasksHTML += tasks.map(task => renderTaskHTML(task)).join("")
        debugger;
        console.log(tasksHTML);
        HTMLElement.innerHTML = tasksHTML;
    } catch (error) {
        console.error(error)
    }
}


function renderTaskHTML(task: Task) {
    try {

        const html = `<div class="task">
        <h3>Title: ${task.title}</h3>
        <p>Description: ${task.description}</p>
        <p>Status: ${task.status}</p>
        <div id="taskButtons">
            <button onclick="handleDeleteTask('${task.title}')">Delete</button>
            <button onclick="handleUpdateStatus('${task.title}')">Mark As Done</button>
            <button onclick="handleUpdateDescription('${task.title}')">Update Description</button>
        </div>
      </div>`
        return html;
    } catch (error) {
        console.error(error)
        return ""
    }
}

async function handleUpdateDescription(title: string) {
    try {
        if (!currentUser) throw new Error("User not found")
        const newDescription = prompt("Please enter new description");
        if (!newDescription) throw new Error("Please enter new description");
        const response = await fetch('/API/task/update-task-description', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentUser.id, title: title, newDescription })
        });
        const result = await response.json();
        console.log(result);
        renderTasks(document.querySelector('#form') as HTMLDivElement, currentUser.id)
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



async function renderLogin(HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found")
        const users = await getusers();
        let html = `<form id=loginForm onsubmit="handleLoginSubmit(event)">
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
        HTMLElement.innerHTML = `<form id=registerForm onsubmit="handleRegisterSubmit(event)">
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
