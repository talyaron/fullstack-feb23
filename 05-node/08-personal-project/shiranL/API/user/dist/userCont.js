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
exports.allUsers = exports.logOut = exports.getLoggedInUser = exports.logIn = exports.addUser = void 0;
var userModel_1 = require("./userModel");
exports.addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, existingUser, user, userDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password)
                    throw new Error("Please complete all fields");
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    // User with the same email already exists, return an error response
                    return [2 /*return*/, res.send({ error: "User already exists with this email" })];
                }
                user = new userModel_1.UserModel({ email: email, password: password });
                return [4 /*yield*/, user.save()];
            case 2:
                userDB = _b.sent();
                console.log(userDB);
                res.send({ ok: true, userDB: userDB });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.logIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, existingUser, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password)
                    throw new Error("Please complete all fields");
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email })];
            case 1:
                existingUser = _b.sent();
                if (!existingUser) {
                    // User with the same email already exists, return an error response
                    return [2 /*return*/, res.send({ error: "User not found" })];
                }
                if (password != existingUser.password) {
                    // Passwords don't match, return an error response
                    return [2 /*return*/, res.status(401).json({ error: "Incorrect password" })];
                }
                // Log out all other users by setting their 'isLogOn' property to 'false'
                return [4 /*yield*/, userModel_1.UserModel.updateMany({ _id: { $ne: existingUser._id } }, { isLoggedIn: false })];
            case 2:
                // Log out all other users by setting their 'isLogOn' property to 'false'
                _b.sent();
                existingUser.isLoggedIn = true;
                return [4 /*yield*/, existingUser.save()];
            case 3:
                _b.sent();
                // Return a success response
                res.send({ ok: true, existingUser: existingUser });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getLoggedInUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var logInUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1.UserModel.findOne({ isLoggedIn: true })];
            case 1:
                logInUser = _a.sent();
                if (!logInUser)
                    return [2 /*return*/, res.send({ error: "User not found" })];
                res.send({ ok: true, logInUser: logInUser });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logOut = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1.UserModel.updateMany({}, { isLoggedIn: false })];
            case 1:
                _a.sent();
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.allUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers_1, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1.UserModel.find({})];
            case 1:
                allUsers_1 = _a.sent();
                // Return the list of not admin users as a response
                res.send({ ok: true, allUsers: allUsers_1 });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                res.send({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
