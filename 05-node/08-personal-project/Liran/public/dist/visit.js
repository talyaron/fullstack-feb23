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
var patientID = getPatientIdFromQuery();
var physicianEmail2 = getEmailFromQuery();
var patientData = getPatientData(patientID)
    .then(function (patient) {
    renderVisitForm(patient, document.querySelector("#root"));
});
function renderVisitForm(patient, root) {
    try {
        debugger;
        if (!patient)
            throw new Error("Patient not found");
        if (!root)
            throw new Error("Root not found");
        var html = "<div id=\"forms\">\n        <form onsubmit=\"submitVisitForm(event)\"> \n        <div>\n            <label>Date:</label>\n            <input type=\"date\" id=\"visit-date\" name=\"visit-date\" value=\"" + new Date().toISOString().split("T")[0] + "\" readonly></div>\n            <div><label>First Name:</label>\n            <input type=\"text\" id=\"visit-first-name\" name=\"visit-first-name\" value=\"" + patient.firstName + "\" readonly></div>\n            <div><label>Last Name:</label>\n            <input type=\"text\" id=\"visit-last-name\" name=\"visit-last-name\" value=\"" + patient.lastName + "\" readonly></div>\n            <div><label>Age:</label>\n            <input type=\"number\" id=\"visit-age\" name=\"visit-age\" value=\"" + patient.age + "\" readonly></div>\n            <div><label>Phone Number:</label>\n            <input type=\"tel\" id=\"visit-phone-number\" name=\"visit-phone-number\" value=\"" + patient.phoneNum + "\" readonly></div>\n            <div><label>Weight:</label>\n            <input type=\"number\" id=\"visit-weight\" name=\"visit-weight\" value=\"" + patient.weight + "\" readonly></div>\n            <div><label>Height:</label>\n            <input type=\"number\" id=\"visit-height\" name=\"visit-height\" value=\"" + patient.height + "\" readonly></div>\n            <div><label>Smoking:</label>\n            <input type=\"checkbox\" id=\"visit-smoking\" name=\"visit-smoking\" value=\"" + patient.smoking + "\" disabled></div>\n            <div><label>Visit Summary:</label>\n            <textarea id=\"visit-description\" name=\"visit-description\" rows=\"14\" cols=\"50\" required></textarea></div>\n            <div><button type=\"button\" onclick=\"writePrescription(" + patient.patientId + ")\">Write Prescription</button></div>\n            <div><button type=\"button\">History</button></div>\n            <div><button type=\"submit\">Close Visit</button></div>\n        </form></div>\n        <button onclick=\"window.location.href = 'physician.html?physicianEmail=" + physicianEmail2 + "'\">Back</button>";
        root.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function writePrescription(patientId) {
    return __awaiter(this, void 0, void 0, function () {
        var popupURL, popupWidth, popupHeight, left, top, popupWindow;
        return __generator(this, function (_a) {
            try {
                popupURL = "prescription.html?patientId=" + patientId + "&physicianEmail=" + physicianEmail2;
                popupWidth = 400;
                popupHeight = 300;
                left = (window.innerWidth - popupWidth) / 2;
                top = (window.innerHeight - popupHeight) / 2;
                popupWindow = window.open(popupURL, "PopupWindow", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + left + ",top=" + top);
                // Focus the popup window (optional)
                if (popupWindow) {
                    popupWindow.focus();
                }
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function getPatientData(patientId) {
    return __awaiter(this, void 0, void 0, function () {
        var id_1, response, result, patients, patient, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, patientId];
                case 1:
                    id_1 = _a.sent();
                    return [4 /*yield*/, fetch("/api/patient/get-patients", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    patients = result.patients;
                    debugger;
                    patient = patients.find(function (patient) { return patient.patientId === id_1; });
                    debugger;
                    return [2 /*return*/, patient];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
