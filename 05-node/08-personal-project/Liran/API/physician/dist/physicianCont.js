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
exports.updatePhysician = exports.deletePhysician = exports.addPhysician = exports.getPhysicians = void 0;
var physicianModel_1 = require("./physicianModel");
function getPhysicians(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var physiciansDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, physicianModel_1.PhysicianModel.find({})];
                case 1:
                    physiciansDB = _a.sent();
                    res.send({ physicians: physiciansDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPhysicians = getPhysicians;
function addPhysician(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin, physician, physicianDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age, phoneNum = _a.phoneNum, email = _a.email, licenseNumber = _a.licenseNumber, password = _a.password, isAdmin = _a.isAdmin;
                    if (!firstName || !lastName || !age || !phoneNum || !email || !licenseNumber || !password)
                        throw new Error("Please complete all fields");
                    physician = new physicianModel_1.PhysicianModel({ firstName: firstName, lastName: lastName, age: age, phoneNum: phoneNum, email: email, licenseNumber: licenseNumber, isAdmin: isAdmin, password: password });
                    return [4 /*yield*/, physician.save()];
                case 1:
                    physicianDB = _b.sent();
                    console.log(physicianDB);
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
    });
}
exports.addPhysician = addPhysician;
function deletePhysician(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, physicianDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, physicianModel_1.PhysicianModel.findByIdAndDelete(id)];
                case 1:
                    physicianDB = _a.sent();
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
exports.deletePhysician = deletePhysician;
function updatePhysician(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin, physicianDB, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    debugger;
                    _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, age = _a.age, phoneNum = _a.phoneNum, email = _a.email, licenseNumber = _a.licenseNumber, password = _a.password, isAdmin = _a.isAdmin;
                    if (!id)
                        throw new Error("id is required");
                    return [4 /*yield*/, physician.save()];
                case 1: return [4 /*yield*/, _b.sent()];
                case 2:
                    physicianDB = _b.sent();
                    res.status(200).send({ message: "Physician updated successfully" });
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
exports.updatePhysician = updatePhysician;
