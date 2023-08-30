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
var toDoRoot = document.querySelector('#toDoTasks');
var doingRoot = document.querySelector('#doingTasks');
var doneRoot = document.querySelector('#doneTasks');
function getTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, usersTasks, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/tasks/get-tasks')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersTasks = result.usersTasks;
                    if (!Array.isArray(usersTasks))
                        throw new Error("tasks is not array");
                    renderTasks(usersTasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getTasks();
var emailUser = window.location.search.toString().replace('?email=', '');
function handleAddTask(ev, status) {
    return __awaiter(this, void 0, void 0, function () {
        var task, response, result, usersTasks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    task = {
                        title: ev.target.title.value,
                        description: ev.target.description.value,
                        status: status,
                        emailUser: emailUser
                    };
                    if (!status || !task.title || !task.description)
                        throw new Error("Please complete all details");
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
                    usersTasks = result.usersTasks;
                    console.log(usersTasks);
                    renderTasks(usersTasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteTask(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, usersTasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/tasks/delete-task', {
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
                    usersTasks = result.usersTasks;
                    renderTasks(usersTasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateTask(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, id, response, result, usersTasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.editTitle.value;
                    description = ev.target.editDescription.value;
                    id = ev.target.id;
                    return [4 /*yield*/, fetch('API/tasks/update-task', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: title, description: description, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersTasks = result.usersTasks;
                    renderTasks(usersTasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateTaskStatus(taskStatus, taskId) {
    return __awaiter(this, void 0, void 0, function () {
        var status, id, response, result, usersTasks, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    status = taskStatus;
                    id = taskId;
                    return [4 /*yield*/, fetch('API/tasks/update-task-status', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ status: status, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersTasks = result.usersTasks;
                    renderTasks(usersTasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAddTask(status) {
    try {
        var html = "<form onsubmit=\"handleAddTask(event, '" + status + "')\">\n        <input type=\"text\" name=\"title\" placeholder=\"Title\" required>\n        <textarea name=\"description\" cols=\"21\" rows=\"5\" placeholder=\"Description\" required></textarea>\n        <div>\n        <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n        <button onclick=\"getTasks()\" class=\"material-symbols-rounded\">close</button>\n        </div>\n        </form>";
        switch (status) {
            case 'toDo':
                toDoRoot.innerHTML += html;
                break;
            case 'doing':
                doingRoot.innerHTML += html;
                break;
            case 'done':
                doneRoot.innerHTML += html;
                break;
        }
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderTaskHtml(task) {
    try {
        var html = "<div class = \"task\" id=\"task" + task.id + "\">\n        <div class = \"task_header\">\n        <h3 >" + task.title + "</h3>\n        <button class=\"material-symbols-rounded\" onclick=\"renderUpdateTask('" + task.title + "','" + task.description + "','" + task.id + "')\">Edit</button>\n        </div>\n        <div class = \"task_body\">\n        <p>" + task.description + "</p>\n        </div>";
        switch (task.status) {
            case 'toDo':
                html += "<div class=\"btns\">\n                <div></div>\n                <button class=\"material-symbols-rounded\" onclick=\"handleDeleteTask('" + task.id + "')\">Delete</button>\n                <button class=\"material-symbols-rounded\" onclick=\"handleUpdateTaskStatus('doing','" + task.id + "')\">keyboard_double_arrow_right</button>\n                </div>\n                </div>";
                break;
            case 'doing':
                html += "<div class=\"btns\">\n                    <button class=\"material-symbols-rounded\" onclick=\"handleUpdateTaskStatus('toDo','" + task.id + "')\">keyboard_double_arrow_left</button>\n                    <button class=\"material-symbols-rounded\" onclick=\"handleDeleteTask('" + task.id + "')\">Delete</button>\n                    <button class=\"material-symbols-rounded\" onclick=\"handleUpdateTaskStatus('done','" + task.id + "')\">keyboard_double_arrow_right</button>\n                    </div>\n                    </div>";
                break;
            case 'done':
                html += "<div class=\"btns\">\n                        <button class=\"material-symbols-rounded\" onclick=\"handleUpdateTaskStatus('doing','" + task.id + "')\">keyboard_double_arrow_left</button>\n                        <button class=\"material-symbols-rounded\" onclick=\"handleDeleteTask('" + task.id + "')\">delete</button>\n                        <div></div>\n                        </div>\n                        </div>";
                break;
        }
        return html;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderTasks(usersTasks) {
    try {
        if (!Array.isArray(usersTasks))
            throw new Error("usersTasks is not array");
        var userTasks = usersTasks.filter(function (userTask) { return userTask.user.email === emailUser; });
        if (!Array.isArray(userTasks))
            throw new Error("userTasks");
        var toDoTasks = userTasks.filter(function (element) { return element.task.status === 'toDo'; });
        var toDoTasksHTML = toDoTasks.map(function (usertask) { return renderTaskHtml(usertask.task); }).join('');
        toDoRoot.innerHTML = toDoTasksHTML;
        var doingTasks = userTasks.filter(function (element) { return element.task.status === 'doing'; });
        var doingTasksHTML = doingTasks.map(function (usertask) { return renderTaskHtml(usertask.task); }).join('');
        doingRoot.innerHTML = doingTasksHTML;
        var doneTasks = userTasks.filter(function (element) { return element.task.status === 'done'; });
        var doneTasksHTML = doneTasks.map(function (usertask) { return renderTaskHtml(usertask.task); }).join('');
        doneRoot.innerHTML = doneTasksHTML;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderUpdateTask(title, description, id) {
    try {
        var html = "<div class=\"edit\">\n        <form id=\"" + id + "\" onsubmit=\"handleUpdateTask(event)\">\n        <label for=\"" + title + "\">Edit Title</label>\n        <textarea name=\"editTitle\" id=\"" + title + "\" cols=\"20\" rows=\"1\">" + title + "</textarea>\n        <label for=\"" + description + "\">Edit Description</label>\n        <textarea name=\"editDescription\" id=\"" + description + "\" cols=\"20\" rows=\"1\">" + description + "</textarea>\n        <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n        </div>";
        var editRoot = document.querySelector("#task" + id);
        editRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderNav() {
    return __awaiter(this, void 0, void 0, function () {
        var email, response, result, error, userName, html, root, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    email = { emailUser: emailUser };
                    return [4 /*yield*/, fetch('/API/users/get-user-name', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(email)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    error = result.error, userName = result.userName;
                    if (error)
                        throw new Error("Some of details are incorrect");
                    html = "<div class=\"nav\">\n        <p>Hello " + userName + "</p>\n        <a class=\"logout material-symbols-rounded\" href=\"./index.html\">Logout</a>\n    </div>";
                    root = document.querySelector('#nav');
                    root.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
renderNav();
