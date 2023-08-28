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
var User = /** @class */ (function () {
    function User(userName, password, phoneNumber, email) {
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.id = "id-" + new Date().getTime() + "-" + Math.random();
    }
    return User;
}());
var currentUser = null;
function handleLoginSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var selectedUser, userId_1, password, response, results, users, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    selectedUser = document.querySelector("#user") || new HTMLSelectElement();
                    if (!selectedUser)
                        throw new Error("User not found");
                    userId_1 = selectedUser.value;
                    password = event.target.password.value;
                    if (!userId_1 || !password)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, fetch('/API/users/get-users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    users = results.users;
                    if (!Array.isArray(users))
                        throw new Error("users are not array");
                    user = users.find(function (user) { return user.id === userId_1; });
                    if (!user)
                        throw new Error("User not found");
                    if (user.password !== password) {
                        alert("Password is incorrect");
                        throw new Error("Password is incorrect");
                    }
                    currentUser = user;
                    renderUserPage(document.querySelector('#root'), user);
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
function handleRegisterSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var userName, password, phoneNumber, email, user, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    userName = event.target.userName.value;
                    password = event.target.password.value;
                    phoneNumber = event.target.phoneNumber.value;
                    email = event.target.email.value;
                    if (!userName || !password || !phoneNumber || !email)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, checkIfUserExist(userName)];
                case 1:
                    if (_a.sent())
                        throw new Error("User already exist");
                    user = new User(userName, password, phoneNumber, email);
                    return [4 /*yield*/, fetch('/API/users/add-user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    alert("User added successfully");
                    currentUser = user;
                    renderLogin(document.querySelector('#form'));
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function checkIfUserExist(userName) {
    return __awaiter(this, void 0, Promise, function () {
        var response, results, users, user, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/users/get-users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    users = results.users;
                    if (!Array.isArray(users))
                        throw new Error("users are not array");
                    user = users.findIndex(function (user) { return user.userName === userName; });
                    if (user !== -1) {
                        alert("Name already exist, please choose another name");
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getusers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, users, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/users/get-users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    users = results.users;
                    if (!Array.isArray(users))
                        throw new Error("products are not array");
                    return [2 /*return*/, users];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleLogOut() {
    try {
        debugger;
        currentUser = null;
        renderEntrencePanel();
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateEmail() {
    return __awaiter(this, void 0, void 0, function () {
        var newEmail, response, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    newEmail = prompt("Please enter new email");
                    if (!newEmail)
                        throw new Error("Please enter new email");
                    return [4 /*yield*/, fetch('/API/users/update-user-email', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id, email: newEmail })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    alert("Email updated successfully");
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    return [4 /*yield*/, fetch('/API/users/delete-user', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    currentUser = null;
                    renderEntrencePanel();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePassword() {
    return __awaiter(this, void 0, void 0, function () {
        var newPassword, response, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    newPassword = prompt("Please enter new password");
                    if (!newPassword)
                        throw new Error("Please enter new password");
                    return [4 /*yield*/, fetch('/API/users/update-user-password', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id, password: newPassword })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    alert("Password updated successfully");
                    currentUser = null;
                    renderEntrencePanel();
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddTask() {
    try {
        renderTitle(document.querySelector('#title'), "Add Task");
        renderAddTaskForm(document.querySelector('#form'));
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowTasks() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                renderTitle(document.querySelector('#title'), "Show Tasks");
                renderTasks(document.querySelector('#form'), currentUser.id);
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleDeleteTask(title) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    return [4 /*yield*/, fetch('/API/task/delete-task', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id, title: title })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    renderTasks(document.querySelector('#form'), currentUser.id);
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateStatus(title) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    return [4 /*yield*/, fetch('/API/task/update-task-status', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id, title: title, newStatus: "Done" })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    renderTasks(document.querySelector('#form'), currentUser.id);
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
function handleUpdateDescription(title) {
    return __awaiter(this, void 0, void 0, function () {
        var newDescription, response, result, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!currentUser)
                        throw new Error("User not found");
                    newDescription = prompt("Please enter new description");
                    if (!newDescription)
                        throw new Error("Please enter new description");
                    return [4 /*yield*/, fetch('/API/task/update-task-description', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: currentUser.id, title: title, newDescription: newDescription })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    renderTasks(document.querySelector('#form'), currentUser.id);
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
function handleAddTaskSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, status, userID, task, response, result, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    title = event.target.title.value;
                    description = event.target.description.value;
                    if (!title || !description)
                        throw new Error("Please complete all fields");
                    if (!currentUser)
                        throw new Error("User not found");
                    status = "To-Do";
                    userID = currentUser.id;
                    return [4 /*yield*/, checkIfTaskExist(title, userID)];
                case 1:
                    if (_a.sent())
                        throw new Error("Task already exist");
                    task = { title: title, description: description, status: status, id: userID };
                    return [4 /*yield*/, fetch('/API/task/add-task', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(task)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    alert("Task added successfully");
                    event.target.reset();
                    return [3 /*break*/, 5];
                case 4:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function checkIfTaskExist(title, id) {
    return __awaiter(this, void 0, Promise, function () {
        var response, results, tasks, task, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/task/get-tasks?id=" + id, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    tasks = results.tasks;
                    if (!Array.isArray(tasks))
                        throw new Error("Tasks are not array");
                    task = tasks.findIndex(function (task) { return task.title === title; });
                    if (task !== -1) {
                        alert("Task already exist, please choose another title");
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                case 3:
                    error_12 = _a.sent();
                    console.error(error_12);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderUserButtons(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<div id=userUI><button onclick=\"handleAddTask()\">Add Task</button>\n        <button onclick=\"handleShowTasks()\">Show Tasks</button>\n        <button onclick=\"handleUpdatePassword()\">Update Password</button>\n        <button onclick=\"handleUpdateEmail()\">Update Email</button>\n        <button onclick=\"handleDeleteUser()\">Delete User</button>\n        <button onclick=\"handleLogOut()\">Log out</button></div>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderUserPage(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<div id=\"title\"></div>\n        <div id=\"panel\"><div id=\"buttons\"></div>\n        <div id=\"form\"></div></div>";
        renderTitle(document.querySelector('#title'), "Welcome " + user.userName);
        renderUserButtons(document.querySelector('#buttons'), user);
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddTaskForm(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<form id=addTaskForm onsubmit=\"handleAddTaskSubmit(event)\">\n        <input type=\"text\" name=\"title\" placeholder=\"Title\" />\n        <input type=\"text\" name=\"description\" placeholder=\"Description\" />\n        <button type=\"submit\">Add</button>\n      </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderEntrencePanel() {
    try {
        renderTitle(document.querySelector('#title'), "Welcome to TaskList");
        renderFirstButtons(document.querySelector('#buttons'));
        clearForm(document.querySelector('#form'));
    }
    catch (error) {
        console.error(error);
    }
}
function renderTasks(HTMLElement, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, tasks, tasksHTML, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!HTMLElement)
                        throw new Error("HTMLElement not found");
                    return [4 /*yield*/, fetch("/API/task/get-tasks?id=" + id, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    tasks = results.tasks;
                    if (!Array.isArray(tasks))
                        throw new Error("tasks are not array");
                    tasksHTML = "";
                    tasksHTML += tasks.map(function (task) { return renderTaskHTML(task); }).join("");
                    debugger;
                    HTMLElement.innerHTML = tasksHTML;
                    return [3 /*break*/, 4];
                case 3:
                    error_13 = _a.sent();
                    console.error(error_13);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderTaskHTML(task) {
    try {
        var html = "<div class=\"task\">\n        <h3>Title: " + task.title + "</h3>\n        <p>Description: " + task.description + "</p>\n        <p>Status: " + task.status + "</p>\n        <div id=\"taskButtons\">\n            <button onclick=\"handleDeleteTask('" + task.title + "')\">Delete</button>\n            <button onclick=\"handleUpdateStatus('" + task.title + "')\">Mark As Done</button>\n            <button onclick=\"handleUpdateDescription('" + task.title + "')\">Update Description</button>\n        </div>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
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
function renderLogin(HTMLElement) {
    return __awaiter(this, void 0, void 0, function () {
        var users, html, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!HTMLElement)
                        throw new Error("HTMLElement not found");
                    return [4 /*yield*/, getusers()];
                case 1:
                    users = _a.sent();
                    html = "<form id=loginForm onsubmit=\"handleLoginSubmit(event)\">\n        <select id=\"user\">";
                    html += users.map(function (user) { return "<option value=\"" + user.id + "\">" + user.userName + "</option>"; }).join("");
                    html += "</select> \n        <input type=\"password\" name=\"password\" placeholder=\"Password\" />\n        <button type=\"submit\">Go</button>\n      </form>";
                    HTMLElement.innerHTML = html;
                    return [3 /*break*/, 3];
                case 2:
                    error_14 = _a.sent();
                    console.error(error_14);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderRegister(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "<form id=registerForm onsubmit=\"handleRegisterSubmit(event)\">\n        <input type=\"text\" name=\"userName\" placeholder=\"User Name\" />\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" />\n        <input type=\"text\" name=\"phoneNumber\" placeholder=\"Phone Number\" />\n        <input type=\"text\" name=\"email\" placeholder=\"Email\" />\n        <button type=\"submit\">Sign up</button>\n      </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function clearForm(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        HTMLElement.innerHTML = "";
    }
    catch (error) {
        console.error(error);
    }
}
renderEntrencePanel();