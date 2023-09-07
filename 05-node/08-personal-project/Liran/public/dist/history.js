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
        var patient, visits, html_1, prescriptions, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!pId)
                        throw new Error("No patient id");
                    if (!root)
                        throw new Error("No root");
                    return [4 /*yield*/, getPatientDB(pId)];
                case 1:
                    patient = _a.sent();
                    return [4 /*yield*/, getVisitsDB(pId)];
                case 2:
                    visits = _a.sent();
                    html_1 = "<h1>" + patient.firstName + " " + patient.lastName + " " + patient.patientId + "</h1>\n        <h2>Visits</h2>\n        <table>\n        <tr>\n        <th>Date</th>\n        <th>Summary</th>\n        </tr>";
                    debugger;
                    visits.forEach(function (visit) {
                        html_1 += "<tr>\n            <td>" + getTimeFormated(visit.date.toString()) + "</td>\n            <td>" + visit.summary + "</td>\n            </tr>";
                    });
                    html_1 += "</table>";
                    html_1 += "<br><br>\n        <h2>Prescriptions</h2>";
                    return [4 /*yield*/, getPrescriptionsDB(pId)];
                case 3:
                    prescriptions = _a.sent();
                    prescriptions.forEach(function (prescription) {
                        html_1 += "<div class=\"prescription\">\n            <div><label>Date</label><span>" + prescription.date + "</span></div>\n            <div><label>Medicine</label><span>" + prescription.medicine + "</span></div>\n            </div>";
                    });
                    html_1 += "<br><br>\n        <button onclick=\"goBack()\">Back</button>";
                    root.innerHTML = html_1;
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
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
