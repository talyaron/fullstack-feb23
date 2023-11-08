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
exports.userLogedIn = exports.isAdmin = exports.getUserId = exports.checkUser = exports.login = exports.getIncome = exports.addIncome = exports.registerUser = void 0;
var usersModel_1 = require("./usersModel");
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email, password, userExist, user, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, userName = _a.userName, email = _a.email, password = _a.password;
                if (!userName || !email || !password)
                    throw new Error("Please complete all fields");
                return [4 /*yield*/, usersModel_1.UserModel.find({ userName: userName })];
            case 1:
                userExist = _b.sent();
                if (!(userExist.length === 0)) return [3 /*break*/, 3];
                user = new usersModel_1.UserModel({ userName: userName, email: email, password: password });
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.cookie("user", user._id, {
                    httpOnly: true,
                    secure: true,
                    expires: 1000 * 1800,
                    sameSite: "lax"
                });
                res.send({ message: "User added successfully" });
                return [3 /*break*/, 4];
            case 3:
                res.send({ message: "user is already registered" });
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addIncome = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, userIncome, updateIncome, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.cookie.user;
                userIncome = req.body.userIncome;
                if (!_id || !userIncome)
                    throw new Error("some of the parameters are missing");
                return [4 /*yield*/, usersModel_1.UserModel.findOneAndUpdate({
                        _id: _id,
                        userIncome: userIncome
                    })];
            case 1:
                updateIncome = _a.sent();
                // const income = new UserIncomeModel({ userName, userIncome });
                return [4 /*yield*/, updateIncome.save()];
            case 2:
                // const income = new UserIncomeModel({ userName, userIncome });
                _a.sent();
                res.send({ ok: true });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getIncome = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, userNameFromDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.cookies.user;
                // console.log(_id);
                if (!_id)
                    throw new Error("user id is missing");
                return [4 /*yield*/, usersModel_1.UserModel.findById({ _id: _id })];
            case 1:
                userNameFromDB = _a.sent();
                // console.log(userNameFromDB.userIncome);
                if (!userNameFromDB.userIncome) {
                    res.send({ message: "0" });
                }
                else {
                    res.send({ message: "" + userNameFromDB.userIncome });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, password, userExist, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, password = _a.password;
                if (!userName || !password)
                    throw new Error("Please complete all fields");
                return [4 /*yield*/, usersModel_1.UserModel.findOne({ userName: userName, password: password })];
            case 1:
                userExist = _b.sent();
                if (!userExist) {
                    res.send({ message: "user does not exist, please register" });
                }
                else if (userExist) {
                    res.cookie("user", userExist._id, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 1000 * 1800,
                        sameSite: "lax"
                    });
                    res.send({ userName: userExist.userName });
                }
                else {
                    throw new Error("Incorrect password, please try again or register");
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.checkUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, userExists, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.cookies.user;
                // console.log(_id);
                if (!_id)
                    throw new Error("user id is missing");
                return [4 /*yield*/, usersModel_1.UserModel.findById({ _id: _id })];
            case 1:
                userExists = _a.sent();
                // console.log(userExists.id);
                if (!userExists ||
                    userExists === undefined ||
                    userExists === null
                // userExists.length === 0
                )
                    res.send({ message: "user does not exist" });
                if (userExists)
                    res.send({ message: "user exist" });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.status(500).send(error_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, user, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.cookies.user;
                return [4 /*yield*/, usersModel_1.UserModel.findById({ _id: _id })];
            case 1:
                user = _a.sent();
                // console.log(user.id);
                res.send({ id: user.id });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                console.error(error_6);
                res.status(500).send(error_6.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userDB, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.cookies.user;
                    if (!userId)
                        throw new Error("User not found");
                    return [4 /*yield*/, usersModel_1.UserModel.findById(userId)];
                case 1:
                    userDB = _a.sent();
                    if (userDB.isAdmin) {
                        next();
                    }
                    else {
                        res.status(401).send("not authorized");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    res.status(500).send(error_7.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.isAdmin = isAdmin;
function userLogedIn(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userDB, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.cookies.user;
                    console.log(userId);
                    if (!userId)
                        throw new Error("User not found");
                    return [4 /*yield*/, usersModel_1.UserModel.findById(userId)];
                case 1:
                    userDB = _a.sent();
                    if (userDB) {
                        req.user = userDB;
                        console.log(req.user);
                        next();
                    }
                    else {
                        res.status(404).send("user not found in database");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.error(error_8);
                    res.status(500).send(error_8.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.userLogedIn = userLogedIn;
