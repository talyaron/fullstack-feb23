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
exports.getAllUsersAndRelatives = exports.getUserAndRelatives = exports.login = exports.registerUser = void 0;
var userModel_1 = require("./userModel");
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var SECRET = process.env.SECRET;
var secret = SECRET;
var saltRounds = 10;
//register user 
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, hash, existingUser, user, validationError, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password)
                    throw new Error("Email or Password incorrect");
                return [4 /*yield*/, bcrypt.hash(password, saltRounds)
                    // Check if a user with the same email already exists
                ];
            case 1:
                hash = _b.sent();
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email }).exec()];
            case 2:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(400).json({ error: "User with this email already exists." })];
                }
                user = new userModel_1.UserModel({ email: email, password: hash });
                validationError = user.validateSync();
                if (validationError) {
                    console.error("Validation error:", validationError);
                    res.status(400).json({ error: validationError.message });
                }
                else {
                    // Data is valid, proceed with saving
                    user.save()
                        .then(function (userDB) {
                        console.log("User saved:", userDB);
                        res.status(201).json({ ok: true, user: userDB });
                    })["catch"](function (saveError) {
                        console.error("Error saving user:", saveError);
                        res.status(500).json({ error: "Failed to save user." });
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).json({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userDB, isAdmin, cookie, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    throw new Error("Please complete all fields");
                }
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email }).exec()];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new Error("User not found");
                isAdmin = userDB.isAdmin;
                cookie = {
                    uid: userDB._id
                };
                console.log("User found: " + userDB.email);
                console.log("isAdmin: " + isAdmin);
                token = jwt.encode(cookie, secret);
                console.log(token);
                res.cookie("user", token, { httpOnly: true, maxAge: 900000 });
                res.send({ ok: true, email: userDB.email, isAdmin: isAdmin });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(401).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function getUserAndRelatives(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usersWithRelatives, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1.UserModel.find({})
                            .populate({
                            path: "familyMembers",
                            model: userModel_1.UserModel
                        })
                            .exec()];
                case 1:
                    usersWithRelatives = _a.sent();
                    if (!usersWithRelatives || usersWithRelatives.length === 0) {
                        return [2 /*return*/, res.status(404).json({ error: "No users and relatives found." })];
                    }
                    return [2 /*return*/, res.json({ users: usersWithRelatives })]; // Return the user and relatives as JSON
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).json({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserAndRelatives = getUserAndRelatives;
function getAllUsersAndRelatives(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var users_1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1.UserModel.find({})
                            .populate({
                            path: "familyMembers",
                            model: userModel_1.UserModel
                        })
                            .exec()];
                case 1:
                    users_1 = _a.sent();
                    return [2 /*return*/, res.json({ users: users_1 })]; // Return all users and relatives as JSON
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.status(500).json({ error: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllUsersAndRelatives = getAllUsersAndRelatives;
