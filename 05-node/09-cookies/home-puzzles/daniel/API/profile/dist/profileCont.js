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
exports.updateDetails = exports.getUserDetail = exports.addDetail = exports.getDetail = void 0;
var profileModel_1 = require("./profileModel");
exports.getDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var detailDB, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, profileModel_1.Profile.find({})];
            case 1:
                detailDB = _a.sent();
                res.send({ details: detailDB });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, status, birthDate, phoneNumber, detail, detailDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, userName = _a.userName, status = _a.status, birthDate = _a.birthDate, phoneNumber = _a.phoneNumber;
                console.log({ userName: userName, status: status, birthDate: birthDate, phoneNumber: phoneNumber });
                if (!userName || !status || !birthDate || !phoneNumber)
                    throw new Error("Please fill all fileds");
                detail = new profileModel_1.Profile({ userName: userName, status: status, birthDate: birthDate, phoneNumber: phoneNumber });
                return [4 /*yield*/, detail.save()];
            case 1:
                detailDB = _b.sent();
                console.log(detailDB);
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, detailsDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                if (!email) {
                    throw new Error("email is required");
                }
                return [4 /*yield*/, profileModel_1.Profile.find({ email: email })];
            case 1:
                detailsDB = _a.sent();
                res.send({ Profile: detailsDB });
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
exports.updateDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userName, status, birthDate, phoneNumber, id, detailDB, _b, _c, _d, error_4;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                _a = req.body, userName = _a.userName, status = _a.status, birthDate = _a.birthDate, phoneNumber = _a.phoneNumber, id = _a.id;
                return [4 /*yield*/, profileModel_1.Profile.findById(id)];
            case 1:
                detailDB = _e.sent();
                if (!detailDB)
                    throw new Error("Detail not found");
                _b = detailDB;
                return [4 /*yield*/, profileModel_1.Profile.findByIdAndUpdate(id, { userName: userName })];
            case 2:
                _b.userName = _e.sent();
                // detailDB.status = await Profile.findByIdAndUpdate(id, {status});
                _c = detailDB;
                return [4 /*yield*/, profileModel_1.Profile.findByIdAndUpdate(id, { birthDate: birthDate })];
            case 3:
                // detailDB.status = await Profile.findByIdAndUpdate(id, {status});
                _c.birthDate = _e.sent();
                _d = detailDB;
                return [4 /*yield*/, profileModel_1.Profile.findByIdAndUpdate(id, { phoneNumber: phoneNumber })];
            case 4:
                _d.phoneNumber = _e.sent();
                res.send({ Profile: profileModel_1.Profile });
                return [3 /*break*/, 6];
            case 5:
                error_4 = _e.sent();
                console.error(error_4);
                res.send({ error: error_4 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
