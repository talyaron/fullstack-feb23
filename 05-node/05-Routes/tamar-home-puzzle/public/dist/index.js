"use strict";
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
exports.__esModule = true;
exports.getTasks = void 0;
//view (all render function):
//show single task
function renderTaskToHTML(task) {
    try {
        var html = "<div class=\"task\">\n                        <h3 class=\"task__title\">" + task.title + "</h3>\n                        <p class=\"task__description\">" + task.description + "</p> \n                        <p class=\"task__status\">" + task.status + "</p>\n                        <form id=\"" + task.id + "\" onsubmit=\"handleUpdateTask(event)\">\n                            <input type=\"text\" name=\"title\" value=\"" + task.title + "\" plasceholder=\"title\" />\n                            <input type=\"text\" name=\"description\" value=\"" + task.description + "\" plasceholder=\"description\" />\n                            <input type=\"text\" name=\"status\" value=\"" + task.status + "\" plasceholder=\"ststus\" />\n                            <select name=\"status\" id=\"status-select\">\n                                <option value=\"to-do\">To-Do</option>\n                                <option value=\"done\">Done</option>\n                                <br><br>\n                                <input type=\"text\" name=\"status\" value=\"" + task.status + " placeholder=\"Change\">\n                            </select>\n                            <button type=\"submit\">Update</button>\n                        </form>\n                        <button onclick=\"handelDeleteTask('" + task.id + "')\">Delete</button>\n                      </div>";
    }
    catch (error) {
        console.error(error);
    }
}
//show all tasks
function renderTasks(tasks, HTMLElement) {
    try {
        if (!HTMLDivElement)
            throw new Error("HTMLElement not found");
        console.log(tasks);
        if (!Array.isArray(tasks))
            throw new Error("tasks are not array");
        var tasksHTML = tasks.map(function (task) { return renderTaskToHTML(task); }).join("");
        HTMLElement.innerHTML = tasksHTML;
    }
    catch (error) {
        console.error(error);
    }
}
//controllers:
//users
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/users/get-users')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    users = result.users;
                    if (!Array.isArray(users))
                        throw new Error("users are not array");
                    console.log(users);
                    console.log(result);
                    return [2 /*return*/, users];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//get the specific user we want
function handelGetUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, id_1, users, user, root, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    name = ev.target.name.value;
                    id_1 = ev.target.id;
                    console.log(id_1, name);
                    if (!name)
                        throw new Error("please select your name");
                    return [4 /*yield*/, getUsers()];
                case 1:
                    users = _a.sent();
                    if (!users)
                        throw new Error("no users found");
                    console.log(users);
                    user = users.find(function (user) { return user.id === id_1; });
                    root = document.querySelector('#userTasksRoot');
                    renderTasks(user.tasks, root);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//tasks
function handleAddTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, task, response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    title = event.target.title.value;
                    description = event.target.description.value;
                    if (!title || !description)
                        throw new Error("Pleas complete all fields");
                    task = { title: title, description: description };
                    return [4 /*yield*/, fetch('/API/tasks/add-task', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(task)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
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
function getTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/tasks/get-tasks')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tasks = result.tasks;
                    if (!Array.isArray(tasks))
                        throw new Error("tasks are not array");
                    console.log(tasks);
                    console.log(result);
                    return [2 /*return*/, tasks];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getTasks = getTasks;
function handelGetTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTasks()];
                case 1:
                    tasks = _a.sent();
                    root = document.querySelector('#userTasksRoot');
                    renderTasks(tasks, root);
                    return [2 /*return*/];
            }
        });
    });
}
function handelDeleteTask(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, products, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/tasks/delet-task', {
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
                    products = result.products;
                    renderTasks(products, document.querySelector('#userTasksRoot'));
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
//update all task data
function handleUpdateTask(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, status, id, response, result, products, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.title.value;
                    description = ev.target.description.value;
                    status = ev.target.ststus.value;
                    id = ev.target.id;
                    console.log(id, title, description, status);
                    return [4 /*yield*/, fetch('/API/tasks/update-task-status', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, status: status })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    products = result.products;
                    renderTasks(products, document.querySelector('#userTasksRoot'));
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
