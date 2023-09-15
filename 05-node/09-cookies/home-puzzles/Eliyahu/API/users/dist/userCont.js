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
exports.getUser = exports.getUserName = exports.loginAdmin = exports.login = exports.registerUser = void 0;
var userModels_1 = require("./userModels");
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, password, userExist, _user, userDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                    if (!email || !password || !name)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, userModels_1.UserModel.findOne({ email: email })];
                case 1:
                    userExist = _b.sent();
                    if (userExist) {
                        throw new Error("This email address already exist");
                    }
                    _user = new userModels_1.UserModel({ name: name, email: email, password: password });
                    return [4 /*yield*/, _user.save()];
                case 2:
                    userDB = _b.sent();
                    res.send({ user: userDB, ok: true });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registerUser = registerUser;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, userModels_1.UserModel.findOne({ email: email })];
                case 1:
                    userDB = _b.sent();
                    if (!userDB)
                        throw new Error("user not exist or password is inncorect");
                    res.cookie("user", userDB._id, { maxAge: 1000 * 60 * 30, httpOnly: true });
                    res.send({ ok: true, email: email });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    res.status(500).send(error_2.message);
                    res.send({ ok: false, message: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
exports.loginAdmin = function (req, res) {
    try {
        var adminEmail = req.body.adminEmail;
        var admin = 'Admin';
        if (!adminEmail)
            throw new Error("Missing email Aamin");
        res.send({ ok: true, adminEmail: adminEmail, admin: admin });
    }
    catch (error) {
        console.error(error.message);
    }
};
function getUserName(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, userDB, name, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.query.email;
                    if (!email)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, userModels_1.UserModel.findOne({ email: email })];
                case 1:
                    userDB = _a.sent();
                    name = userDB.name;
                    res.send({ ok: true, name: name });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserName = getUserName;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.cookies.user;
                    if (!userId)
                        throw new Error("no user in cookies");
                    return [4 /*yield*/, userModels_1.UserModel.findById(userId)];
                case 1:
                    userDB = _a.sent();
                    if (!userDB)
                        throw new Error("user dosnt exist in DB");
                    res.send({ ok: true, user: userDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.status(500).send(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUser = getUser;
