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
var physicianEmail = getEmailFromQuery();
renderPhisicianPage();
function renderPhisicianPage() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
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
                    console.log(data);
                    renderWelcomeP(data.physicians[0].lastName, document.querySelector("#root"));
                    debugger;
                    renderPhysicianActions(document.querySelector("#header"));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderWelcomeP(lastName, root) {
    try {
        root.innerHTML += "<div id = \"header\">\n        <h1>Welcome Dr. " + lastName + "</h1>\n        </div>\n        <div id=\"forms\"></div>";
    }
    catch (error) {
        console.error(error);
    }
}
function getEmailFromQuery() {
    var params = new URLSearchParams(window.location.search);
    return params.get("email");
}
function renderPhysicianActions(html) {
    html.innerHTML += "<div id=\"physicianActions\">\n    <button id=\"addPatient\" onclick=\"loadPatients()\">Patient</button>\n    <button id=\"addMedicine\" onclick=\"loadMedicines()\">Medicine</button>\n    <button id=\"addPrescription\" onclick=\"loadPrescriptions()\">Prescription</button>\n    <button id=\"logout\" onclick=\"logout()\">Logout</button>\n    </div>\n    ";
}
function loadPatients() {
    return __awaiter(this, void 0, void 0, function () {
        var responseP, dataP, physicianID_1, response, data, patients, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 1:
                    responseP = _a.sent();
                    return [4 /*yield*/, responseP.json()];
                case 2:
                    dataP = _a.sent();
                    physicianID_1 = dataP.physicians.find(function (physician) { return physician.email === physicianEmail; })._id;
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    console.log(data);
                    patients = data.patients.filter(function (patient) { return patient.physicianId === physicianID_1; });
                    renderPatients(patients);
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function renderPatients(patients) {
    var root = document.querySelector("#forms");
    root.innerHTML = "";
    root.innerHTML += "<h2>Patients</h2>\n    <table>\n    <tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Age</th>\n    <th>Phone Number</th>\n    <th>Weight</th>\n    <th>Height</th>\n    <th>Smoking</th>\n    <th>Address</th>\n    <th>Physician Id</th>\n    </tr>\n    </table>";
    var table = document.querySelector("table");
    patients.forEach(function (patient) {
        table.innerHTML += "<tr>\n        <td>" + patient.firstName + "</td>\n        <td>" + patient.lastName + "</td>\n        <td>" + patient.age + "</td>\n        <td>" + patient.phoneNum + "</td>\n        <td>" + patient.weight + "</td>\n        <td>" + patient.height + "</td>\n        <td>" + patient.smoking + "</td>\n        <td>" + patient.address + "</td>\n        <td>" + patient.physicianId + "</td>\n        </tr>";
    });
}
function loadMedicines() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
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
                    console.log(data);
                    renderMedicines(data.medicines);
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
function renderMedicines(medicines) {
    var root = document.querySelector("#forms");
    root.innerHTML = "";
    root.innerHTML += "<h2>Medicines</h2>\n    <table>\n    <tr>\n    <th>Name</th>\n    <th>Dosage Per Day</th>\n    <th>Max Duration</th>\n    </tr>\n    </table>";
    var table = document.querySelector("table");
    medicines.forEach(function (medicine) {
        table.innerHTML += "<tr>\n        <td>" + medicine.name + "</td>\n        <td>" + medicine.dosagePerDay + "</td>\n        <td>" + medicine.maxDuration + "</td>\n        </tr>";
    });
}
// async function loadPrescriptions() {
//     try {
//         const response = await fetch("/API/prescription/get-prescriptions");
//         const data = await response.json();
//         console.log(data);
//         renderPrescriptions(data.prescriptions);
//     } catch (error) {
//         console.error(error);
//     }
// }
// function renderPrescriptions(prescriptions: Prescription[]) {
//     const root = document.querySelector("#forms");
//     root.innerHTML = "";
//     root.innerHTML += `<div id="prescriptions">
//     <h2>Prescriptions</h2>
//     <table>
//     <tr>
//     <th>Physician Id</th>
//     <th>Patient Id</th>
//     <th>Medicine Id</th>
//     <th>Start Date</th>
//     <th>End Date</th>
//     </tr>
//     </table>
//     </div>`;
//     const table = document.querySelector("table");
//     prescriptions.forEach(prescription => {
//         table.innerHTML += `<tr>
//         <td>${prescription.physicianId}</td>
//         <td>${prescription.patientId}</td>
//         <td>${prescription.medicineId}</td>
//         <td>${prescription.startDate}</td>
//         <td>${prescription.endDate}</td>
//         </tr>`;
//     });
// }
function logout() {
    window.location.href = "index.html";
}
