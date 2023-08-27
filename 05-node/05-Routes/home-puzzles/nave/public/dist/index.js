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
getTask();
function handleAddTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, status, tasks, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    title = event.target.title.value;
                    description = event.target.description.value;
                    status = event.target.status.value;
                    if (!title || !description || !status) {
                        throw new Error('Please complete all fields');
                    }
                    tasks = { title: title, description: description, status: status };
                    return [4 /*yield*/, fetch('/API/task/add-task', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(tasks)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, tasks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/task/get-task')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    tasks = results.tasks;
                    if (!Array.isArray(tasks))
                        throw new Error("tasks are not array");
                    console.log(tasks);
                    console.log(results);
                    return [2 /*return*/, tasks];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderTaskHTML(task) {
    try {
        var html = "<div class=\"task\">\n      <h1>" + task.title + "</h1>\n     <h3>" + task.description + "</h3>\n        <p>status: " + task.status + "</p>\n        <form id=\"" + task.id + "\" onsubmit=\"handleUpdateTask(event)\">\n          <input type=\"text\" name=\"title\"  value=\"" + task.title + "\" placeholder=\"title\" />\n          <button type=\"submit\">Update</button>\n        </form>\n        <button onclick=\"handleDeleteTask('" + task.id + "')\">Delete</button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderTasks(tasks, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(tasks);
        if (!Array.isArray(tasks))
            throw new Error("tasks are not array");
        var tasksHTML = tasks.map(function (task) { return renderTaskHTML(task); }).join("");
        HTMLElement.innerHTML = tasksHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTask()];
                case 1:
                    tasks = _a.sent();
                    root = document.querySelector('#root');
                    renderTasks(tasks, root);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteProduct(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/task/delete-task', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    tasks = result.tasks;
                    renderTasks(tasks, document.querySelector('#root'));
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateTaskDescription(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var Description, id, response, result, tasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    Description = ev.target.Description.value;
                    id = ev.target.id;
                    console.log(id, Description);
                    return [4 /*yield*/, fetch('/API/task/update-task-description', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, Description: Description })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    tasks = result.tasks;
                    renderTasks(tasks, document.querySelector('#root'));
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// interface task {
//   title: string;
//   description: string;
//   status: string;
// }
// class User {
//   id?: string;
//   constructor(
//     public userName: string,
//     public password: string,
//     public phoneNumber: string,
//     public email: string
//   ) {
//     this.id = `id-${new Date().getTime()}-${Math.random()}`;
//   }
// }
// let currentUser: User | null = null;
// async function handleLoginSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const selectedUser: HTMLSelectElement = document.querySelector("#user") || new HTMLSelectElement();
//       if (!selectedUser) throw new Error("User not found")
//       const userId = selectedUser.value;
//       const password = event.target.password.value;
//       if (!userId || !password) throw new Error("Please complete all fields")
//       const response = await fetch('/API/users/get-users')
//       const results = await response.json();
//       const { users } = results;
//       if (!Array.isArray(users)) throw new Error("users are not array");
//       const user = users.find((user) => user.id === userId);
//       if (!user) throw new Error("User not found");
//       if (user.password !== password) {
//           alert("Password is incorrect");
//           throw new Error("Password is incorrect");
//       }
//       currentUser = user;
//       renderUserPage(document.querySelector('#root') as HTMLDivElement, user);
//   }
//   catch (error) {
//       console.error(error);
//   }
// }
// async function handleRegisterSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const userName = event.target.userName.value;
//       const password = event.target.password.value;
//       const phoneNumber = event.target.phoneNumber.value;
//       const email = event.target.email.value;
//       if (!userName || !password || !phoneNumber || !email) throw new Error("Please complete all fields")
//       if (await checkIfUserExist(userName)) throw new Error("User already exist");
//       const user = new User(userName, password, phoneNumber, email);
//       const response = await fetch('/API/user/add-user', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(user)
//       });
//       const result = await response.json();
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }
// }
// async function checkIfUserExist(userName: string): Promise<boolean> {
//   try {
//       const response = await fetch('/API/user/get-users')
//       const results = await response.json();
//       const { users } = results;
//       if (!Array.isArray(users)) throw new Error("users are not array");
//       const user = users.findIndex((user) => user.userName === userName);
//       if (user !== -1) {
//           alert("Name already exist, please choose another name")
//           return true;
//       }
//       return false;
//   } catch (error) {
//       console.error(error);
//   }
// }
// async function getusers() {
//   try {
//       const response = await fetch('/API/user/get-users')
//       console.log(response)
//       const results = await response.json();
//       const { users } = results;
//       if (!Array.isArray(users)) throw new Error("users are not array");
//       console.log(users)
//       console.log(results)
//       return users;
//   } catch (error) {
//       console.error(error);
//       return []
//   }
// }
// function renderUserPage(HTMLElement: HTMLDivElement, user: User) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div id="title"></div>
//       <div id="panel"><div id="buttons"></div>
//       <div id="form"></div></div>`
//       renderTitle(document.querySelector('#title') as HTMLDivElement, `Welcome ${user.userName}`)
//       renderUserButtons(document.querySelector('#buttons') as HTMLDivElement, user)
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderUserButtons(HTMLElement: HTMLDivElement, user: User) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div id=userUI><button onclick="handleAddTask()">Add Note</button>
//       <button onclick="handleShowNotes()">Show Notes</button>
//       <button onclick="handleUpdatePassword()">Update Password</button>
//       <button onclick="handleUpdateEmail()">Update Email</button>
//       <button onclick="handleDeleteUser()">Delete User</button></div>`
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function handleUpdateEmail() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const newEmail = prompt("Please enter new email");
//       if (!newEmail) throw new Error("Please enter new email");
//       const response = await fetch('/API/users/update-user-email', {
//           method: 'PATCH',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id, email: newEmail })
//       });
//       const result = await response.json();
//       console.log(result);
//       alert("Email updated successfully");
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function handleDeleteUser() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const response = await fetch('/API/users/delete-user', {
//           method: 'DELETE',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id })
//       });
//       const result = await response.json();
//       console.log(result);
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function handleUpdatePassword() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const newPassword = prompt("Please enter new password");
//       if (!newPassword) throw new Error("Please enter new password");
//       const response = await fetch('/API/users/update-user-password', {
//           method: 'PATCH',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id, password: newPassword })
//       });
//       const result = await response.json();
//       console.log(result);
//       alert("Password updated successfully");
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }
// function handleAddTask() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Add Note")
//       renderAddNoteForm(document.querySelector('#form') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderAddNoteForm(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<form class=addNoteForm onsubmit="handleAddTaskSubmit(event)">
//       <input type="text" name="title" placeholder="Title" />
//       <input type="text" name="description" placeholder="Description" />
//       <button type="submit">Add</button>
//     </form>`
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function handleShowNotes() {
//   try {
//       debugger;
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Show Notes")
//       renderNotes(document.querySelector('#form') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function renderNotes(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       const response = await fetch('/API/note/get-notes')
//       const results = await response.json();
//       console.log(response);
//       const { notes } = results;
//       if (!Array.isArray(notes)) throw new Error("notes are not array");
//       let notesHTML = ``;
//       notesHTML += notes.map(note => renderNoteHTML(note)).join("")
//       console.log(notesHTML);
//       HTMLElement.innerHTML = notesHTML;
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderNoteHTML(task: task) {
//   try {
//       debugger;
//       const html = `<div class="task">
//       <h3>${task.title}</h3>
//       <p>${task.description}</p>
//       <p>${task.status}</p>
//       <button onclick="handleDeleteTask('${task.title}')">Delete</button>
//     </div>`
//       return html;
//   } catch (error) {
//       console.error(error)
//       return ""
//   }
// }
// async function handleAddTaskSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const title = event.target.title.value;
//       const description = event.target.description.value;
//       if (!title || !description) throw new Error("Please complete all fields")
//       if (!currentUser) throw new Error("User not found")
//       const status = "To-Do";
//       const userID = currentUser.id;
//       const note = { title: title, description: description, status: status, id: userID };
//       const response = await fetch('/API/note/add-note', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(note)
//       });
//       const result = await response.json();
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }
// }
// function renderEntrencePanel() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Welcome to NoteList")
//       renderFirstButtons(document.querySelector('#buttons') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderTitle(HTMLElement: HTMLDivElement, title: string) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<h1>${title}</h1>`
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderFirstButtons(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div><button onclick="handleLogin()">Login</button>
//       <button onclick="handleRegister()">Register</button></div>`
//   } catch (error) {
//       console.error(error)
//   }
// }
// function handleLogin() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Login")
//       renderLogin(document.querySelector('#panel') as HTMLDivElement);
//   } catch (error) {
//       console.error(error)
//   }
// }
// function handleRegister() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Register")
//       renderRegister(document.querySelector('#form') as HTMLDivElement);
//   } catch (error) {
//       console.error(error)
//   }
// }
// async function renderLogin(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       const users = await getusers();
//       let html = `<form class=loginForm onsubmit="handleLoginSubmit(event)">
//       <select id="user">`
//       html += users.map(user => `<option value="${user.id}">${user.userName}</option>`).join("");
//       html += `</select> 
//       <input type="password" name="password" placeholder="Password" />
//       <button type="submit">Go</button>
//     </form>`
//       HTMLElement.innerHTML = html;
//   } catch (error) {
//       console.error(error)
//   }
// }
// function renderRegister(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<form class=registerForm onsubmit="handleRegisterSubmit(event)">
//       <input type="text" name="userName" placeholder="User Name" />
//       <input type="password" name="password" placeholder="Password" />
//       <input type="text" name="phoneNumber" placeholder="Phone Number" />
//       <input type="text" name="email" placeholder="Email" />
//       <button type="submit">Sign up</button>
//     </form>`
//   } catch (error) {
//       console.error(error)
//   }
// }
// renderEntrencePanel()
