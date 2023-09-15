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
exports.deleteVisit = exports.addVisit = exports.getVisits = void 0;
var visitModel_1 = require("./visitModel");
exports.getVisits = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, physicianId, patientId, visitsDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = req.query, physicianId = _a.physicianId, patientId = _a._id;
                visitsDB = void 0;
                if (!patientId) return [3 /*break*/, 2];
                return [4 /*yield*/, visitModel_1.VisitModel.find({ 'patient._id': patientId })];
            case 1:
                visitsDB = _b.sent();
                return [3 /*break*/, 6];
            case 2:
                if (!!physicianId) return [3 /*break*/, 4];
                return [4 /*yield*/, visitModel_1.VisitModel.find({})];
            case 3:
                visitsDB = _b.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, visitModel_1.VisitModel.find({ 'physician._id': physicianId })];
            case 5:
                visitsDB = _b.sent();
                _b.label = 6;
            case 6:
                res.send({ visits: visitsDB });
                return [3 /*break*/, 8];
            case 7:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.addVisit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, date, summary, patient, physician, visit, visitDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, date = _a.date, summary = _a.summary, patient = _a.patient, physician = _a.physician;
                if (!date || !summary || !patient || !physician)
                    throw new Error("Please complete all fields");
                visit = new visitModel_1.VisitModel({ date: date, summary: summary, patient: patient, physician: physician });
                return [4 /*yield*/, visit.save()];
            case 1:
                visitDB = _b.sent();
                console.log(visitDB);
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
exports.deleteVisit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, visitDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.body.id;
                return [4 /*yield*/, visitModel_1.VisitModel.findByIdAndDelete(id)];
            case 1:
                visitDB = _a.sent();
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
}); };
