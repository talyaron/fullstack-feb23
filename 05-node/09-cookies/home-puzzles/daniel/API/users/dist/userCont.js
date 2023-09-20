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
exports.updateUser = exports.deleteUser = exports.getUser = exports.loginUser = exports.registerUser = void 0;
var userModel_1 = require("./userModel");
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, birthDate, phoneNumber, email, password, userExist, user, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, userName = _a.userName, birthDate = _a.birthDate, phoneNumber = _a.phoneNumber, email = _a.email, password = _a.password;
                if (!userName || !birthDate || !phoneNumber || !email || !password)
                    throw new Error("Please fill all fileds");
                return [4 /*yield*/, userModel_1.User.findOne({ userName: userName, email: email, password: password })];
            case 1:
                userExist = _b.sent();
                console.log(userExist);
                if (!!userExist) return [3 /*break*/, 3];
                user = new userModel_1.User({ userName: userName, birthDate: birthDate, phoneNumber: phoneNumber, email: email, password: password });
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                console.log(user);
                res.send({ ok: true, user: user });
                return [3 /*break*/, 4];
            case 3: throw new Error("User is already exists");
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
exports.loginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password)
                    throw new Error("Please fill all fileds");
                return [4 /*yield*/, userModel_1.User.findOne({ email: email, password: password })];
            case 1:
                userDB = _b.sent();
                if (!userDB)
                    throw new Error("No user found or password is incorrect");
                // maxAge-we need to use the number of sec before the cookie expires
                // httpOnly- just the server can access to it. If not using it the client will be able to access to it as well.
                res.cookie("user", userDB._id, { maxAge: 30000 * 1000, httpOnly: true });
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.send({ ok: false, message: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            try {
                user = req.user;
                res.send({ ok: true, user: user });
            }
            catch (error) {
                console.error(error);
                res.status(500).send(error.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getUser = getUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, userDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, userModel_1.User.findByIdAndDelete(id)];
                case 1:
                    userDB = _a.sent();
                    res.send({ ok: true });
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
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, email, password, userDB, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    debugger;
                    _a = req.body, id = _a.id, email = _a.email, password = _a.password;
                    if (!id)
                        throw new Error("Id is required");
                    return [4 /*yield*/, userModel_1.User.findByIdAndUpdate(id, { email: email, password: password })];
                case 1:
                    userDB = _b.sent();
                    return [4 /*yield*/, userDB.save()];
                case 2:
                    _b.sent();
                    res.status(200).send({ message: "User updated successfully" });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(500).send({ error: error_4.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
