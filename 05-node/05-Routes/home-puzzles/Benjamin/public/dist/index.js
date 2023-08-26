// You are building a basic task manager application. Each task has a unique ID, a title, a description, and a status (either "To-Do,"  "Done"). Your task is to implement the CRUD operations for managing tasks.
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
// **Exercise Tasks:**
// 1. **Create:**
//    Implement a function/method that allows the user to create a new task. The function should take input for the task's title, description, and status. It should assign a unique ID to the task and add it to the list of tasks.
// 2. **Read:**
//    Implement a function/method that allows the user to view tasks. The function should provide options to view all tasks, tasks by status, or a specific task by its ID.
// 3. **Update:**
//    Implement a function/method that allows the user to update a task. The function should take the task's ID as input and provide options to update the title, description, or status of the task.
// 4. **Delete:**
//    Implement a function/method that allows the user to delete a task. The function should take the task's ID as input and remove the task from the list of tasks.
// -----------------------------------------------------------------------------
var Task = /** @class */ (function () {
    function Task(_a) {
        var title = _a.title, category = _a.category, status = _a.status, id = _a.id;
        this.title = title;
        this.category = category;
        this.status = status;
        this.id = id;
    }
    return Task;
}());
function newTaskBtnClicked() {
    var newTaskWindowRoot = document.querySelector(".newTaskWindow");
    newTaskWindowRoot.style.opacity = "1";
    newTaskWindowRoot.style.top = "20vh";
}
function handleNewTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var title, category, status, task, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    title = event.target.title.value;
                    category = event.target.category.value;
                    status = "todo";
                    if (!title || !category) {
                        throw new Error("Please complete all fields");
                    }
                    task = { title: title, category: category, status: status };
                    return [4 /*yield*/, fetch("/API/add-task", {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(task)
                        })];
                case 1:
                    response = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getTasks();
handleGetTasks();
function getTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, tasks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/get-tasks")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    tasks = results.tasks;
                    console.log(tasks);
                    return [2 /*return*/, tasks];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderTasks(tasks, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(tasks);
        if (!Array.isArray(tasks))
            throw new Error("tasks are not array");
        var tasksHTML = tasks
            .map(function (task) { return renderTaskHTML(task); })
            .join("");
        HTMLElement.innerHTML = tasksHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function renderTaskHTML(task) {
    try {
        var html = "<div class=\"task\" data-task-id=\"" + task.id + "\">\n        <h3 class=\"task__header\">" + task.title + "</h3>\n        <p class=\"task__Category\">" + task.category + "</p>\n        <form onsubmit=\"updateStatus(event, '" + task.id + "')\">\n        <select id=\"status\" name=\"status\" aria-placeholder=\"status\">\n                <option value=\"todo\">todo</option>\n                <option value=\"doing\">doing</option>\n                <option value=\"done\">done</option>\n                <input type=\"submit\">\n            </select>\n        </form>    \n        <button class=\"task__delete\" onclick=\"handleDeletetask('" + task.id + "')\">Delete</button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleGetTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getTasks()];
                case 1:
                    tasks = _a.sent();
                    root = document.querySelector("#todoROOT");
                    renderTasks(tasks, root);
                    return [2 /*return*/];
            }
        });
    });
}
// --------------------------------
// update Status
function updateStatus(event, id) {
    return __awaiter(this, void 0, void 0, function () {
        var status, response, result, task, previousID, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    status = event.target.status.value;
                    return [4 /*yield*/, fetch("/API/change-status", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: id, status: status })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    debugger;
                    task = result.task, previousID = result.previousID;
                    renderTask(task, document.querySelector("#" + status + "ROOT"));
                    handleDeletetask(previousID);
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
function renderTask(task, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        var tasksHTML = renderTaskHTML(task);
        HTMLElement.innerHTML = tasksHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeletetask(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tasks, status, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/delete-task", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tasks = result.tasks, status = result.status;
                    renderTasks(tasks, document.querySelector("#" + status + "ROOT"));
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
