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
exports.getUserAndRelatives = exports.login = exports.registerUser = void 0;
var userModel_1 = require("./userModel");
//register user 
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, validationError;
    return __generator(this, function (_b) {
        try {
            _a = req.body, email = _a.email, password = _a.password;
            if (!email || !password)
                throw new Error("Email or Password incorrect");
            user = new userModel_1.UserModel({ email: email, password: password });
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
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
        return [2 /*return*/];
    });
}); };
exports.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password)
                    throw new Error("Please complete all fields");
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email, password: password }).exec()];
            case 1:
                user = _b.sent();
                if (!user)
                    throw new Error("some of the details are incorrect");
                res.cookie("user", user._id, { maxAge: 1000 * 100, httpOnly: true });
                res.send({ ok: true, email: user.email });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function getUserAndRelatives(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email })
                            .populate({
                            path: "familyMembers",
                            model: userModel_1.UserModel
                        })
                            .exec()];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error("User not found with the provided email");
                    }
                    return [2 /*return*/, user];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    throw error_2;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserAndRelatives = getUserAndRelatives;