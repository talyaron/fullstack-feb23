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
exports.deleteUser = exports.updateUser = exports.getUserDetails = exports.allUsers = exports.logOut = exports.getLoggedInUser = exports.logIn = exports.addUser = void 0;
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
                _b.trys.push([0, 2, , 3]);
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
                // save user id with cockie
                res.cookie("user", existingUser._id, { maxAge: 1000 * 1000, httpOnly: true });
                // Return a success response
                res.send({ ok: true, existingUser: existingUser });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getLoggedInUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, userDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.cookies.user;
                if (!userId)
                    throw new Error("no user in cookies");
                return [4 /*yield*/, userModel_1.UserModel.findById(userId)];
            case 1:
                userDB = _a.sent();
                if (!userDB)
                    throw new Error("user dosnt exist in DB");
                res.send({ ok: true, logInUser: userDB });
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
    return __generator(this, function (_a) {
        try {
            // Delete the "user" cookie
            res.clearCookie("user");
            // Return a success response
            res.send({ ok: true });
        }
        catch (error) {
            console.error(error);
            res.send({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.allUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers_1, error_4;
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
                error_4 = _a.sent();
                console.error(error_4);
                res.send({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.query.userId;
                return [4 /*yield*/, userModel_1.UserModel.findById(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.send({ error: "User not found" })];
                }
                // Return the user details
                res.send({ ok: true, user: user });
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
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newEmail, newPassword, isAdmin, userId, existingUser, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, newEmail = _a.newEmail, newPassword = _a.newPassword, isAdmin = _a.isAdmin;
                userId = req.query.userId;
                return [4 /*yield*/, userModel_1.UserModel.findById(userId)];
            case 1:
                existingUser = _b.sent();
                if (!existingUser) {
                    return [2 /*return*/, res.send({ error: "User not found" })];
                }
                // Update the user's email, password, and isAdmin if provided
                if (newEmail) {
                    existingUser.email = newEmail;
                }
                if (newPassword) {
                    existingUser.password = newPassword;
                }
                if (isAdmin !== undefined) {
                    existingUser.isAdmin = isAdmin;
                }
                // Save the updated user
                return [4 /*yield*/, existingUser.save()];
            case 2:
                // Save the updated user
                _b.sent();
                res.send({ ok: true, existingUser: existingUser });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _b.sent();
                console.error(error_6);
                res.send({ error: error_6.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, existingUser, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = req.query.userId;
                return [4 /*yield*/, userModel_1.UserModel.findByIdAndDelete(userId)];
            case 1:
                existingUser = _a.sent();
                if (!existingUser)
                    return [2 /*return*/, res.send({ error: "User not found" })];
                res.send({ ok: true, message: "User deleted successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.error(error_7);
                res.send({ error: error_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
