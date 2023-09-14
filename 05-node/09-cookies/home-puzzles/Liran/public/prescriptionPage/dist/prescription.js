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
var pEmail = getEmailFromQuery();
var patientId = getPatientIdFromQuery();
debugger;
var medicines = getMedicinesDB().then(function (medicines) {
    renderForm(medicines, document.querySelector("#root"));
});
function hundlePrescriptionSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var medicineId, response, result, medicine, responseP, resultP, physician, responsePa, resultPa, patient, date, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    event.preventDefault();
                    medicineId = document.querySelector("#medicine-select").value;
                    return [4 /*yield*/, fetch("/API/medicine/get-medicines?_id=" + medicineId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    medicine = result.medicines;
                    return [4 /*yield*/, fetch("/API/physician/get-physicians?email=" + pEmail)];
                case 3:
                    responseP = _a.sent();
                    return [4 /*yield*/, responseP.json()];
                case 4:
                    resultP = _a.sent();
                    physician = resultP.physician;
                    return [4 /*yield*/, fetch("/API/patient/get-patients?_id=" + patientId)];
                case 5:
                    responsePa = _a.sent();
                    return [4 /*yield*/, responsePa.json()];
                case 6:
                    resultPa = _a.sent();
                    patient = resultPa.patients;
                    debugger;
                    if (!patient)
                        throw new Error("Patient not found");
                    date = new Date();
                    addNewPrescription(medicine, date, patient, physician);
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function renderForm(medicines, root) {
    return __awaiter(this, void 0, void 0, function () {
        var html_1;
        return __generator(this, function (_a) {
            try {
                if (!medicines)
                    throw new Error("No medicines");
                if (!root)
                    throw new Error("No root");
                html_1 = "<form id=\"prescription-form\" onsubmit=\"hundlePrescriptionSubmit(event)\">\n        <div><label>Date</label>\n        <input type=\"date\" id=\"date\" value=\"" + new Date().toISOString().slice(0, 10) + "\" readonly></div>\n        <div>\n        <label>Medicine</label>\n        <select id=\"medicine-select\" onchange=\"loadMedicineInfo()\">";
                medicines.forEach(function (medicine) {
                    html_1 += "<option value=\"" + medicine._id + "\">" + medicine.name + "</option>";
                });
                html_1 += "</select>\n        </div>\n        <div><label>Dosage Per Day</label>\n        <input type=\"number\" id=\"dosage-per-day\" value=\"" + medicines[0].dosagePerDay + "\" readonly></div>\n        <div><label>Duration</label>\n        <input type=\"number\" id=\"duration\" value=\"" + medicines[0].maxDuration + "\" readonly></div>\n        <input type=\"submit\" value=\"Save Prescription\"></button>\n        </form>";
                root.innerHTML = html_1;
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function addNewPrescription(medicine, date, patient, physician) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(physician);
                    debugger;
                    return [4 /*yield*/, fetch("/API/prescription/add-prescription", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ date: date, patient: patient, medicine: medicine, physician: physician })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    if (result.error)
                        throw new Error(result.error);
                    alert("Prescription added successfully");
                    window.close();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadMedicineInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var medicineId_1, response, result, medicine, dosagePerDay, duration, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    medicineId_1 = document.querySelector("#medicine-select").value;
                    return [4 /*yield*/, fetch("/API/medicine/get-medicines")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    medicine = result.medicines.find(function (medicine) { return medicine._id === medicineId_1; });
                    dosagePerDay = document.querySelector("#dosage-per-day");
                    duration = document.querySelector("#duration");
                    dosagePerDay.value = medicine.dosagePerDay;
                    duration.value = medicine.maxDuration;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}