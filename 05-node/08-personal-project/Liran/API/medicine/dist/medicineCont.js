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
exports.updateMedicine = exports.deleteMedicine = exports.addMedicine = exports.getMedicines = void 0;
// import { tasks, TaskStatus, Task, userTasks, UserTasks, TaskModel } from './tasksModel';
var medicineModel_1 = require("./medicineModel");
function getMedicines(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, _id, medicines, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    _a = req.query, name = _a.name, _id = _a._id;
                    medicines = void 0;
                    if (!name) return [3 /*break*/, 2];
                    return [4 /*yield*/, medicineModel_1.MedicineModel.findOne({ name: name })];
                case 1:
                    medicines = _b.sent();
                    return [3 /*break*/, 6];
                case 2:
                    if (!_id) return [3 /*break*/, 4];
                    return [4 /*yield*/, medicineModel_1.MedicineModel.findOne({ _id: _id })];
                case 3:
                    medicines = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, medicineModel_1.MedicineModel.find({})];
                case 5:
                    medicines = _b.sent();
                    _b.label = 6;
                case 6:
                    res.send({ medicines: medicines });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.error(error_1);
                    res.status(500).send({ error: error_1.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.getMedicines = getMedicines;
function addMedicine(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, dosagePerDay, maxDuration, medicine, medicineDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, name = _a.name, dosagePerDay = _a.dosagePerDay, maxDuration = _a.maxDuration;
                    if (!name || !dosagePerDay || !maxDuration)
                        throw new Error("Please complete all fields");
                    medicine = new medicineModel_1.MedicineModel({ name: name, dosagePerDay: dosagePerDay, maxDuration: maxDuration });
                    return [4 /*yield*/, medicine.save()];
                case 1:
                    medicineDB = _b.sent();
                    console.log(medicineDB);
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
exports.addMedicine = addMedicine;
function deleteMedicine(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, medicineDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, medicineModel_1.MedicineModel.findByIdAndDelete(id)];
                case 1:
                    medicineDB = _a.sent();
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
exports.deleteMedicine = deleteMedicine;
function updateMedicine(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, dosagePerDay, maxDuration, medicine, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, id = _a.id, name = _a.name, dosagePerDay = _a.dosagePerDay, maxDuration = _a.maxDuration;
                    if (!id)
                        throw new Error("id is required");
                    return [4 /*yield*/, medicineModel_1.MedicineModel.findByIdAndUpdate(id, { name: name, dosagePerDay: dosagePerDay, maxDuration: maxDuration })];
                case 1:
                    medicine = _b.sent();
                    return [4 /*yield*/, medicine.save()];
                case 2:
                    _b.sent();
                    res.status(200).send({ message: "Medicine updated successfully" });
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
exports.updateMedicine = updateMedicine;
