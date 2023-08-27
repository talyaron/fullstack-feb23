// import { Task } from "../API/tasks/tasksModels";
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
var Task = /** @class */ (function () {
    function Task(user, title, description, status) {
        this.user = user;
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString();
    }
    return Task;
}());
var toDoRoot = document.querySelector('#toDoTasks');
var doingRoot = document.querySelector('#doingTasks');
var doneRoot = document.querySelector('#doneTasks');
// async function gatTasks() {
//     try {
//         const response = await fetch('API/tasks/get-tasks')
//         const result = await response.json()
//         const { tasks } = result
//         if (!Array.isArray(tasks)) throw new Error("tasks is not array");
//         return tasks;
//     } catch (error) {
//         console.error(error.massage);
//     }
// }
function handleAddTask(ev, user, status) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, task, response, result, tasks, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.title.value;
                    description = ev.target.description.value;
                    console.log(description);
                    if (!user || !status || !title || !description)
                        throw new Error("Please complete all details");
                    console.log(user);
                    console.log(status);
                    console.log(title);
                    task = new Task(user, title, description, status);
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
                    tasks = result.tasks;
                    console.log(tasks);
                    renderTasks(tasks);
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
function handleDeleteTask(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tasks, error_2;
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
                    tasks = result.tasks;
                    renderTasks(tasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateTaskTitle(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, id, response, result, tasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.title.value;
                    id = ev.target.id;
                    return [4 /*yield*/, fetch('API/tasks/update-task-title', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: title, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tasks = result.tasks;
                    renderTasks(tasks);
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
function handleUpdateTaskDescription(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var description, id, response, result, tasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    description = ev.target.description.value;
                    id = ev.target.id;
                    return [4 /*yield*/, fetch('API/tasks/update-task-description', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ description: description, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tasks = result.tasks;
                    renderTasks(tasks);
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
        var status, id, response, result, tasks, error_5;
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
                    tasks = result.tasks;
                    renderTasks(tasks);
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
        var html = "<form onsubmit=\"handleAddTask(event, 'eli', '" + status + "')\">\n        <input type=\"text\" name=\"title\" placeholder=\"Title\" required>\n        <textarea name=\"description\" cols=\"21\" rows=\"5\" placeholder=\"Description\" required></textarea>\n        <button type=\"submit\">ADD</button>\n    </form>";
        switch (status) {
            case 'toDo':
                toDoRoot.innerHTML = html;
                break;
            case 'doing':
                doingRoot.innerHTML = html;
                break;
            case 'done':
                doneRoot.innerHTML = html;
                break;
        }
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderTaskHtml(task) {
    try {
        var html = "<div class = \"task\">\n        <div class = \"task_header\">\n        <h3>" + task.title + "</h3>\n        <button onclick=\"renderUpdateTaskTitle()\">Edit</button>\n        </div>\n        <div class = \"task_body\">\n        <p>" + task.description + "</p>\n        <button onclick=\"renderUpdateTaskDescription()\">Edit</button>\n        </div>\n        <button onclick=\"handleDeleteTask(" + task.id + ")\">Delete</button>\n        </div>";
        return html;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderTasks(tasks) {
    try {
        if (!Array.isArray(tasks))
            throw new Error("tasks is not array");
        var toDoTasks = tasks.filter(function (task) { return task.status === 'toDo'; });
        var toDoTasksHTML = toDoTasks.map(function (task) { return renderTaskHtml(task); }).join('');
        toDoRoot.innerHTML = toDoTasksHTML;
        var doingTasks = tasks.filter(function (task) { return task.status === 'doing'; });
        var doingTasksHTML = doingTasks.map(function (task) { return renderTaskHtml(task); }).join('');
        doingRoot.innerHTML = doingTasksHTML;
        var doneTasks = tasks.filter(function (task) { return task.status === 'done'; });
        var doneTasksHTML = doneTasks.map(function (task) { return renderTaskHtml(task); }).join('');
        doneRoot.innerHTML = doneTasksHTML;
    }
    catch (error) {
        console.error(error.massage);
    }
}
