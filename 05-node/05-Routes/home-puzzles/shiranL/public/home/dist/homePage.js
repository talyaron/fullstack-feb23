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
// homepage.ts  
var correntUser = null;
// Get the username from the URL
function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
function getCorrentUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var response, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/users/get-user-details?userName=" + username, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    user = _a.sent();
                    // save the user in a global variable
                    correntUser = user;
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
function renderHelloUser() {
    return __awaiter(this, void 0, void 0, function () {
        var userName, correntUserDiv, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userName = getQueryParam('userName');
                    // Check if the userName is available
                    if (!userName)
                        throw new Error("Username not found.");
                    // Call the function to fetch user details
                    return [4 /*yield*/, getCorrentUser(userName)];
                case 1:
                    // Call the function to fetch user details
                    _a.sent();
                    correntUserDiv = document.getElementById("correntUserDiv");
                    correntUserDiv.innerHTML = "Hello " + correntUser.userName;
                    renderUserTasks();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
renderHelloUser();
// 
function handleAddUserTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var titel, discripton, taskUserId, taskObj, response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    titel = event.target.title.value;
                    discripton = event.target.taskDescription.value;
                    taskUserId = correntUser.id;
                    taskObj = { title: titel, description: discripton, id: taskUserId };
                    return [4 /*yield*/, fetch('/API/tasks/add-user-task', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(taskObj)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    if (result.success) {
                        alert("Task added successfully");
                        renderUserTasks();
                        console.log(result.userTasks);
                    }
                    else {
                        alert("Task not added");
                    }
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
// Function to fetch and render user tasks
function renderUserTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var userId, response, result, userTasksContainer_1, noTasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    // Fetch user tasks from the server
                    debugger;
                    userId = correntUser.id;
                    return [4 /*yield*/, fetch("/API/tasks/get-user-tasks/" + userId, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!(response.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    userTasksContainer_1 = document.getElementById('userTasksContainer');
                    // Clear existing tasks
                    userTasksContainer_1.innerHTML = '';
                    if (!result.userTasks.length) {
                        noTasks = document.createElement('p');
                        noTasks.innerText = 'No tasks found';
                        userTasksContainer_1.appendChild(noTasks);
                        return [2 /*return*/];
                    }
                    // Loop through the user's tasks and create HTML elements to display them
                    result.userTasks.forEach(function (userTask) {
                        var taskList = document.createElement('ul');
                        taskList.innerHTML = "<li>Title: " + userTask.titel + "</li><li>Description: " + userTask.discripton + "</li>";
                        userTasksContainer_1.appendChild(taskList);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    // Handle non-200 status codes (e.g., 404)
                    console.error("Failed to fetch user tasks. Status code: " + response.status);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    // Handle network or other errors
                    console.error(error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
