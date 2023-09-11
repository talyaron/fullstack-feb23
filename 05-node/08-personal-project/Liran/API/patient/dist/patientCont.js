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
exports.updatePatient = exports.deletePatient = exports.addPatient = exports.getPatients = void 0;
var patientModel_1 = require("./patientModel");
function getPatients(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, physicianId, patientId, patients, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    debugger;
                    _a = req.query, physicianId = _a.physicianId, patientId = _a.patientId;
                    patients = void 0;
                    if (!patientId) return [3 /*break*/, 2];
                    return [4 /*yield*/, patientModel_1.PatientModel.findOne({ _id: patientId })];
                case 1:
                    patients = _b.sent();
                    return [3 /*break*/, 6];
                case 2:
                    if (!!physicianId) return [3 /*break*/, 4];
                    return [4 /*yield*/, patientModel_1.PatientModel.find({})];
                case 3:
                    patients = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, patientModel_1.PatientModel.find({ physicianId: physicianId })];
                case 5:
                    // Fetch the physician with the specified email from the database using PhysicianModel
                    patients = _b.sent();
                    _b.label = 6;
                case 6:
                    // Send the fetched physician data as a JSON response
                    res.send({ patients: patients });
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
exports.getPatients = getPatients;
function addPatient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId, patient, patientDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, patientId = _a.patientId, age = _a.age, phoneNum = _a.phoneNum, weight = _a.weight, height = _a.height, smoking = _a.smoking, address = _a.address, physicianId = _a.physicianId;
                    if (!firstName || !lastName || !patientId || !age || !phoneNum || !weight || !height || !smoking || !address || !physicianId)
                        throw new Error("Please complete all fields");
                    patient = new patientModel_1.PatientModel({ firstName: firstName, lastName: lastName, patientId: patientId, age: age, phoneNum: phoneNum, weight: weight, height: height, smoking: smoking, address: address, physicianId: physicianId });
                    return [4 /*yield*/, patient.save()];
                case 1:
                    patientDB = _b.sent();
                    console.log(patientDB);
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
exports.addPatient = addPatient;
function deletePatient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, patientDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, patientModel_1.PatientModel.findByIdAndDelete(id)];
                case 1:
                    patientDB = _a.sent();
                    res.send({ patientDB: patientDB });
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
exports.deletePatient = deletePatient;
function updatePatient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId, patientDB, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, id = _a.id, firstName = _a.firstName, lastName = _a.lastName, patientId = _a.patientId, age = _a.age, phoneNum = _a.phoneNum, weight = _a.weight, height = _a.height, smoking = _a.smoking, address = _a.address, physicianId = _a.physicianId;
                    return [4 /*yield*/, patientModel_1.PatientModel.findByIdAndUpdate(id, { firstName: firstName, lastName: lastName, patientId: patientId, age: age, phoneNum: phoneNum, weight: weight, height: height, smoking: smoking, address: address, physicianId: physicianId })];
                case 1:
                    patientDB = _b.sent();
                    return [4 /*yield*/, patientDB.save()];
                case 2:
                    _b.sent();
                    res.status(200).send({ message: "Patient updated successfully" });
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
exports.updatePatient = updatePatient;
