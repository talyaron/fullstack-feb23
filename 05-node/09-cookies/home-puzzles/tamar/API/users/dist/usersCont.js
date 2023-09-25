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
exports.deleteUser = exports.getUser = exports.loginUser = exports.registerUser = void 0;
var usersModle_1 = require("./usersModle");
//register
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, email, password, user, userDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body //get data from claient
                , userName = _a.userName, email = _a.email, password = _a.password;
                if (!userName || !email || !password)
                    throw new Error("Please complete all fields");
                user = new usersModle_1.UserModel({ userName: userName, email: email, password: password }) //create new user from data
                ;
                return [4 /*yield*/, user.save()];
            case 1:
                userDB = _b.sent();
                console.log(userDB);
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.massage });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//login
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userName, email, password, userDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body //get data from claient
                    , userName = _a.userName, email = _a.email, password = _a.password;
                    if (!userName || !email || !password)
                        throw new Error("Please complete all fields");
                    return [4 /*yield*/, usersModle_1.UserModel.findOne({ email: email, password: password })]; //find the user in DB by email and password
                case 1:
                    userDB = _b.sent() //find the user in DB by email and password
                    ;
                    if (!userDB)
                        throw new Error("user not exist or password is inncorect");
                    console.log("userdb:", userDB);
                    //create cookie
                    res.cookie("user", userDB._id, { maxAge: 1000 * 1000, httpOnly: true }); //cookie name will be "user" and it contain the userId from DB
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send(error_2.message);
                    res.send({ ok: false, message: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.loginUser = loginUser;
//get user by cookie data
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, userDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.cookies.user;
                    if (!userId)
                        throw new Error("no user in cookies");
                    return [4 /*yield*/, usersModle_1.UserModel.findById(userId)];
                case 1:
                    userDB = _a.sent();
                    if (!userDB)
                        throw new Error("user dosn't exist in DB");
                    res.send({ ok: true, users: userDB });
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
exports.getUser = getUser;
//delete
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userId = req.cookies.user;
                    if (!userId)
                        throw new Error("no user in cookies");
                    //find user by id and delete
                    return [4 /*yield*/, usersModle_1.UserModel.findByIdAndDelete(userId)];
                case 1:
                    //find user by id and delete
                    _a.sent();
                    // Send ok if succead
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    res.status(500).send({ error: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
