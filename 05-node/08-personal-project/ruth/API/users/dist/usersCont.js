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
exports.register = exports.login = void 0;
var console_1 = require("console");
var usersModel_1 = require("./usersModel");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password)
                        throw new Error("some of the parameters not valid");
                    return [4 /*yield*/, usersModel_1["default"].find({ email: email, password: password })];
                case 1:
                    user = _b.sent();
                    if (!user)
                        throw new Error("Incorrect email or password");
                    res.send({ user: user, ok: true });
                    console_1.log(email + " ! ! ! -- LOGIN SUCCESSFUL ! ! !");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, newUser, userDB, error_2, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 4, , 6]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password)
                        throw new Error("invalid email or password");
                    return [4 /*yield*/, usersModel_1["default"].findOne({ email: email })];
                case 1:
                    if (_d.sent())
                        throw new Error("this email already used");
                    return [4 /*yield*/, new usersModel_1["default"]({ email: email, password: password })];
                case 2:
                    newUser = _d.sent();
                    return [4 /*yield*/, newUser.save()];
                case 3:
                    userDB = _d.sent();
                    res.send({ success: true });
                    console_1.log(newUser.email + " ! ! ! -- REGISTER SUCCESSFUL -- ! ! !");
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _d.sent();
                    _c = (_b = console).log;
                    return [4 /*yield*/, usersModel_1["default"].find({})];
                case 5:
                    _c.apply(_b, [_d.sent()]);
                    console.error(error_2.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
