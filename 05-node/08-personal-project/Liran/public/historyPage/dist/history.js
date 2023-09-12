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
var phyId = getEmailFromQuery();
var patId = getPatientIdFromQuery();
renderPatientHistory(patId, document.querySelector("#root"));
function renderPatientHistory(pId, root) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, visits, medicines, html_1, responsePrescriptions, resultPrescriptions, prescriptions, htmlRows, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    if (!pId)
                        throw new Error("No patient id");
                    if (!root)
                        throw new Error("No root");
                    return [4 /*yield*/, fetch("/API/visit/get-visits?_id=" + pId)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    debugger;
                    visits = result.visits;
                    return [4 /*yield*/, getMedicinesDB()];
                case 3:
                    medicines = _a.sent();
                    html_1 = "<h1>" + visits[0].patient.firstName + " " + visits[0].patient.lastName + "<br>ID: " + visits[0].patient.patientId + "</h1>\n        <div id=\"visits\">\n        <h2>Visits</h2>\n        <table>\n        <tr>\n        <th>Date</th>\n        <th>Summary</th>\n        </tr>";
                    visits.forEach(function (visit) {
                        html_1 += "<tr>\n            <td>" + getTimeFormated(new Date(visit.date)) + "</td>\n            <td>" + visit.summary + "</td>\n            </tr>";
                    });
                    html_1 += "</table>\n        </div>";
                    html_1 += "<div id=\"prescriptions\">\n        <h2>Prescriptions</h2>\n        <table>\n        <tr>\n        <th>Date</th>\n        <th>Medicine</th>\n        </tr>";
                    return [4 /*yield*/, fetch("/API/prescription/get-prescriptions?_id=" + pId)];
                case 4:
                    responsePrescriptions = _a.sent();
                    return [4 /*yield*/, responsePrescriptions.json()];
                case 5:
                    resultPrescriptions = _a.sent();
                    prescriptions = resultPrescriptions.prescriptions;
                    debugger;
                    htmlRows = prescriptions.map(function (prescription) {
                        var medName = prescription.medicine.name;
                        var formattedDate = getTimeFormated(new Date(prescription.date));
                        return "<tr>\n                <td>" + formattedDate + "</td>\n                <td>" + medName + "</td>\n            </tr>";
                    });
                    html_1 += htmlRows.join('');
                    html_1 += "</table>\n        <br><br>\n        </div>\n        <button onclick=\"goBack()\">Back</button>";
                    root.innerHTML = html_1;
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function goBack() {
    try {
        window.close();
        window.location.href = "physician.html?physicianId=" + phyId;
    }
    catch (error) {
        console.error(error);
    }
}
