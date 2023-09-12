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
function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('physicianEmail');
}
function getPhysicianEmailFromQuery() {
    try {
        var params = new URLSearchParams(window.location.search);
        return params.get("physicianEmail");
    }
    catch (error) {
        console.error(error);
    }
}
function getSummaryIdFromQuery() {
    try {
        var params = new URLSearchParams(window.location.search);
        return params.get("VisitId");
    }
    catch (error) {
        console.error(error);
    }
}
function getPatientIdFromQuery() {
    try {
        var params = new URLSearchParams(window.location.search);
        return params.get("_id");
    }
    catch (error) {
        console.error(error);
    }
}
function getSummaryFromDB(visitId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, visit, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/visit/get-visits")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    visit = result.visits.find(function (visit) { return visit._id === visitId; });
                    return [2 /*return*/, visit.summary];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPrescriptionFromDB(prescriptionId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, prescription, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/prescription/get-prescriptions")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    prescription = result.prescriptions.find(function (prescription) { return prescription._id === prescriptionId; });
                    return [2 /*return*/, prescription];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getTimeFormated(date) {
    try {
        debugger;
        if (!date)
            throw new Error("No date");
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var formattedDate = day.toString().padStart(2, '0') + "-" + month.toString().padStart(2, '0') + "-" + year;
        // const formattedDateAsDate = new Date(formattedDate);
        return formattedDate;
    }
    catch (error) {
        console.error(error);
    }
}
function getPhysicianDB(pEmail) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, physician, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians?email=" + pEmail)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    debugger;
                    physician = result.physician;
                    if (!physician)
                        throw new Error("Physician not found");
                    return [2 /*return*/, physician];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getVisitsDB(pId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, visits, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/visit/get-visits")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    visits = result.visits.filter(function (visit) { return visit.patient === pId; });
                    return [2 /*return*/, visits];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPrescriptionsDB(pId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, prescriptions, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/prescription/get-prescriptions")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    prescriptions = result.prescriptions.filter(function (prescription) { return prescription.patient === pId; });
                    return [2 /*return*/, prescriptions];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPatientDB(pId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, patient, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    debugger;
                    return [4 /*yield*/, fetch("/API/patient/get-patients?patientId=" + pId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    debugger;
                    patient = result.patients[0];
                    if (!patient)
                        throw new Error("Patient not found");
                    return [2 /*return*/, patient];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPatientName(patientId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, patient, patientName, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/patient/get-patients?patientId=" + patientId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    patient = data.patients[0];
                    debugger;
                    patientName = patient ? patient[0].firstName + " " + patient[0].lastName : "patient not found";
                    return [2 /*return*/, patientName];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPhysicianName(physicianEmail) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, physician, physicianName, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians?email=" + physicianEmail)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    debugger;
                    physician = data.physician;
                    physicianName = physician[0].firstName + " " + physician[0].lastName;
                    return [2 /*return*/, physicianName];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getMedicineName(medicineId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, medicineName, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/medicine/get-medicines?_id=${medicineId}")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    medicineName = data.medicines.name;
                    return [2 /*return*/, medicineName];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getMedicinesDB() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, medicines, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/medicine/get-medicines")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    medicines = data.medicines;
                    return [2 /*return*/, medicines];
                case 3:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
