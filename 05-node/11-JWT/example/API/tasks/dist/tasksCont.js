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
exports.getUserTasks = exports.updateTaskStatus = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var tasksModel_1 = require("./tasksModel");
function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var tasksDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tasksModel_1.TaskModel.find({})];
                case 1:
                    tasksDB = _a.sent();
                    res.send({ tasks: tasksDB });
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
exports.getTasks = getTasks;
function addTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, description, email, task, taskDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, title = _a.title, description = _a.description, email = _a.email;
                    if (!title || !description)
                        throw new Error("Please complete all fields");
                    if (!email)
                        throw new Error("no email");
                    task = new tasksModel_1.TaskModel({ title: title, description: description, email: email });
                    return [4 /*yield*/, task.save()];
                case 1:
                    taskDB = _b.sent();
                    console.log(taskDB);
                    // const newTask = new Task(title, description, TaskStatus.todo);
                    // tasks.push(newTask);
                    //find user
                    // const user = users.find((user: any) => user.email === email);
                    // if (!user) throw new Error("user not found");
                    // userTasks.push(new UserTasks(user, newTask));
                    // console.log(userTasks);
                    // const _userTasks = userTasks.filter((usertask) => usertask.user.email === email);
                    // const _tasks = _userTasks.map((usertask) => usertask.task); //returns only tasks of user
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addTask = addTask;
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, taskDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, tasksModel_1.TaskModel.findByIdAndDelete(id)];
                case 1:
                    taskDB = _a.sent();
                    // const index = tasks.findIndex((task) => task.id === id);
                    // if (index === -1) {
                    //     throw new Error("task not found");
                    // }
                    // tasks.splice(index, 1);
                    res.send({ taskDB: taskDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteTask = deleteTask;
function updateTaskStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, status, task, _status, taskDB, taskDB, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    _a = req.body, id = _a.id, status = _a.status;
                    return [4 /*yield*/, tasksModel_1.TaskModel.findById(id)];
                case 1:
                    task = _b.sent();
                    if (!task)
                        throw new Error("task not found");
                    _status = task.status;
                    if (!(_status === "done")) return [3 /*break*/, 3];
                    return [4 /*yield*/, tasksModel_1.TaskModel.findByIdAndUpdate(id, { status: tasksModel_1.TaskStatus.todo }, { "new": true })];
                case 2:
                    taskDB = _b.sent();
                    res.send({ taskDB: taskDB });
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, tasksModel_1.TaskModel.findByIdAndUpdate(id, { status: tasksModel_1.TaskStatus.done }, { "new": true })];
                case 4:
                    taskDB = _b.sent();
                    res.send({ taskDB: taskDB });
                    _b.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(500).send({ error: error_4.message });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.updateTaskStatus = updateTaskStatus;
function getUserTasks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, tasksDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, tasksModel_1.TaskModel.find({ email: email })];
                case 1:
                    tasksDB = _a.sent();
                    res.send({ tasks: tasksDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.status(500).send({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserTasks = getUserTasks;
