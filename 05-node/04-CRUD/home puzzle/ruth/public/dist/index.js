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
    function Task(name, time, isDone) {
        if (isDone === void 0) { isDone = false; }
        this.name = name;
        this.time = time;
        this.isDone = isDone;
        this.id = require("uuid/v4");
    }
    return Task;
}());
function handleAddTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, time, postInit, response, newTask, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    name = event.target.taskName.value;
                    time = event.target.taskTime.value;
                    console.log({ name: name, time: time });
                    postInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name: name, time: time })
                    };
                    return [4 /*yield*/, fetch("/API/add-task", postInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    newTask = (_a.sent()).newTask;
                    renderTask(newTask, document.querySelector(".tasksListDiv"));
                    event.target.reset();
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
function renderTask(task, root) {
    if (root === void 0) { root = document.querySelector(".tasksListDiv"); }
    try {
        var html = "\n      <form class=\"tasksListDiv__task\" id =\"" + task.id + "\" onchange = \"handelChangeTask(event)\" >\n      <input type=\"checkbox\" class=\"checkMark\" name =\"isDone\" " + (task.isDone ? "checked" : "") + ">\n      <input type=\"text\" class=\"taskNameInList\" name=\"taskNameInList\" placeholder=\"\" value=\"" + task.name + "\">\n      <input type=\"time\" class=\"taskTimeInList\" name=\"taskTimeInList\" placeholder=\"\" value=\"" + task.time + "\">\n        <button  onclick=\"sayHallo(event)\" > update </button>\n        <button type=\"button\" onclick = \"handleDeleteTask(event)\"> delete </button>\n      </form>";
        root.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllTask(tasks, root) {
    if (root === void 0) { root = document.querySelector(".tasksListDiv"); }
    try {
        root.innerHTML = " ";
        root.innerHTML += tasks
            .map(function (task) {
            return "<form class=\"tasksListDiv__task\" id =\"" + task.id + "\" onchange = \"handelChangeTask(event)\" >\n          <input type=\"checkbox\" class=\"checkMark\" name =\"isDone\" " + (task.isDone ? "checked" : "") + ">\n      <input type=\"text\" class=\"taskNameInList\" name=\"taskNameInList\" placeholder=\"\" value=\"" + task.name + "\">\n      <input type=\"time\" class=\"taskTimeInList\" name=\"taskTimeInList\" placeholder=\"\" value=\"" + task.time + "\">\n      <button  onclick=\"sayHallo(event)\" > update </button>\n      <button type=\"button\" onclick = \"handleDeleteTask(event)\"> delete </button>\n    </form>";
        })
            .join(" ");
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var taskId, deleteInit, response, tasks, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    taskId = event.target.parentNode.id;
                    deleteInit = {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ taskId: taskId })
                    };
                    return [4 /*yield*/, fetch("/API/delete-task", deleteInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    tasks = (_a.sent()).tasks;
                    renderAllTask(tasks);
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
function handelChangeTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var inputChange, inputValue, taskId, patchInit, response, tasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    console.dir(event.srcElement.form.id);
                    console.log(event.target);
                    inputChange = event.target.name;
                    inputValue = event.target.value;
                    taskId = event.srcElement.form.id;
                    patchInit = {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ inputChange: inputChange, inputValue: inputValue, taskId: taskId })
                    };
                    return [4 /*yield*/, fetch("/API/patch-task", patchInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    tasks = (_a.sent()).tasks;
                    renderAllTask(tasks);
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
function sayHallo(event) {
    event.preventDefault();
    console.log("Hallo");
}
var inputsTime = document.querySelectorAll(".taskTimeInList");
var inputsName = document.querySelectorAll(".taskNameInList");
inputsName.forEach(function (input) {
    input.addEventListener("focus", function () {
        console.log("focus");
        input.classList.add("focused");
    });
    input.addEventListener("blur", function () {
        console.log("focus");
        input.classList.remove("focused");
    });
});
inputsTime.forEach(function (input) {
    input.addEventListener("focus", function () {
        console.log("focus");
        input.classList.add("focused");
    });
    input.addEventListener("blur", function () {
        console.log("focus");
        input.classList.remove("focused");
    });
});
function handleAllDoneTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, doneTasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/API/get-all-done-tasks")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    doneTasks = (_a.sent()).doneTasks;
                    renderAllTask(doneTasks);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAllTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/API/get-all-tasks")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    tasks = (_a.sent()).tasks;
                    renderAllTask(tasks);
                    return [2 /*return*/];
            }
        });
    });
}
