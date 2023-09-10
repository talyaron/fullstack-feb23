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
exports.getDoneHabits = exports.deleteHabit = exports.habitDone = exports.getUserHabits = exports.addNewHabit = void 0;
var habitsModel_1 = require("./habitsModel");
exports.addNewHabit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, categorie, time, userEmail, habit;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("hey!");
                _a = req.body, name = _a.name, categorie = _a.categorie, time = _a.time, userEmail = _a.userEmail;
                if (!name || !categorie || !time)
                    throw new Error("please complete all fields");
                return [4 /*yield*/, habitsModel_1.HabitModelDB.create({
                        name: name,
                        categorie: categorie,
                        time: time,
                        status: "todo",
                        email: userEmail
                    })];
            case 1:
                habit = _b.sent();
                console.log(habit);
                res.send(true);
                return [2 /*return*/];
        }
    });
}); };
exports.getUserHabits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, tasks, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                console.log(email);
                return [4 /*yield*/, habitsModel_1.HabitModelDB.find({ email: email })];
            case 1:
                tasks = _a.sent();
                res.send(tasks);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.habitDone = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, categorie, status, email, task, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, categorie = _a.categorie, status = _a.status, email = _a.email;
                return [4 /*yield*/, habitsModel_1.DoneHabitModelDB.create({
                        name: name,
                        categorie: categorie,
                        email: email
                    })];
            case 1:
                task = _b.sent();
                res.send(true);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteHabit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, categorie, status, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, categorie = _a.categorie, status = _a.status;
                return [4 /*yield*/, habitsModel_1.HabitModelDB.deleteOne({ name: name })];
            case 1:
                _b.sent();
                console.log("task deleted!");
                res.send(true);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getDoneHabits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, doneHabits, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                return [4 /*yield*/, habitsModel_1.DoneHabitModelDB.find({ email: email })];
            case 1:
                doneHabits = _a.sent();
                console.log(doneHabits);
                res.send(doneHabits);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
