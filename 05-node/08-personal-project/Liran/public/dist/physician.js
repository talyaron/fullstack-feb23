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
        root.innerHTML = "<div id = \"header\">\n        <h1>Welcome Dr. " + lastName + "</h1>\n        </div>\n        <div id=\"forms\"></div>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderPhysicianActions(html) {
    try {
        html.innerHTML += "<div id=\"physicianActions\">\n        <button onclick=\"loadPatients()\">Patients</button>\n        <button onclick=\"loadMedicines()\">Medicines</button>\n        <button onclick=\"loadPrescriptions()\">Prescriptions</button>\n        <button onclick=\"updatePatientP()\">Update Patient</button>\n        <button onclick=\"logout()\">Logout</button>\n        </div>\n        ";
    }
    catch (error) {
        console.error(error);
    }
}
function updatePatientP() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, responseP, dataP, physicianID_1, patientList, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 3:
                    responseP = _a.sent();
                    return [4 /*yield*/, responseP.json()];
                case 4:
                    dataP = _a.sent();
                    physicianID_1 = dataP.physicians.find(function (physician) { return physician.email === physicianEmail; })._id;
                    patientList = data.patients.filter(function (patient) { return patient.physicianId === physicianID_1; });
                    console.log(data);
                    renderUpdatePatientP(patientList, document.querySelector("#forms"));
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
function loadPrescriptions() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, physician_1, patientResponse, patientData, patients_1, prescriptions, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetch("/API/prescription/get-prescriptions")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [4 /*yield*/, getPhysicianDB(physicianEmail)];
                case 3:
                    physician_1 = _a.sent();
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 4:
                    patientResponse = _a.sent();
                    return [4 /*yield*/, patientResponse.json()];
                case 5:
                    patientData = _a.sent();
                    patients_1 = patientData.patients.filter(function (patient) { return patient.physicianId === physician_1._id; });
                    prescriptions = data.prescriptions.filter(function (prescription) { return prescription.physician === patients_1[0].physicianId; });
                    debugger;
                    renderPrescriptions(prescriptions);
                    return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function renderPrescriptions(prescriptions) {
    return __awaiter(this, void 0, void 0, function () {
        var root, table_1, promises, error_4;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    root = document.querySelector("#forms");
                    root.innerHTML = "";
                    root.innerHTML += "<div id=\"prescriptions\">\n        <h2>Prescriptions</h2>\n        <table>\n        <tr>\n        <th>Physician</th>\n        <th>Patient</th>\n        <th>Medicine</th>\n        <th>Supply Date</th>\n        </tr>\n        </table>\n        </div>";
                    table_1 = document.querySelector("table");
                    promises = prescriptions.map(function (prescription) { return __awaiter(_this, void 0, void 0, function () {
                        var physicianName, patientName, medicineName;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getPhysicianName(prescription.physician)];
                                case 1:
                                    physicianName = _a.sent();
                                    return [4 /*yield*/, getPatientName(prescription.patient)];
                                case 2:
                                    patientName = _a.sent();
                                    return [4 /*yield*/, getMedicineName(prescription.medicine)];
                                case 3:
                                    medicineName = _a.sent();
                                    table_1.innerHTML += "<tr>\n            <td>" + physicianName + "</td>\n            <td>" + patientName + "</td>\n            <td>" + medicineName + "</td>\n            <td>" + formatDate(prescription.date) + "</td>\n            </tr>";
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function formatDate(date) {
    debugger;
    var dateNew = new Date(date);
    var day = String(dateNew.getDate()).padStart(2, '0'); // Ensure two digits for day
    var month = String(dateNew.getMonth() + 1).padStart(2, '0'); // Ensure two digits for month (January is 0-based)
    var year = dateNew.getFullYear();
    return day + "-" + month + "-" + year;
}
function getMedicineName(medicineId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, medicine, error_5;
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
                    medicine = data.medicines.find(function (medicine) { return medicine._id === medicineId; });
                    if (!medicine)
                        throw new Error("Medicine not found");
                    return [2 /*return*/, medicine.name];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadPatientInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var id_1, response, data, patient, idInput, firstNameInput, lastNameInput, ageInput, phoneNumInput, weightInput, heightInput, smokingCheckbox, addressInput, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id_1 = document.querySelector("#id").value;
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    patient = data.patients.find(function (patient) { return patient._id === id_1; });
                    idInput = document.querySelector("#id");
                    firstNameInput = document.querySelector("#firstName");
                    lastNameInput = document.querySelector("#lastName");
                    ageInput = document.querySelector("#age");
                    phoneNumInput = document.querySelector("#phoneNum");
                    weightInput = document.querySelector("#weight");
                    heightInput = document.querySelector("#height");
                    smokingCheckbox = document.querySelector("#smoking");
                    addressInput = document.querySelector("#address");
                    firstNameInput.value = patient.firstName;
                    lastNameInput.value = patient.lastName;
                    ageInput.value = patient.age.toString();
                    phoneNumInput.value = patient.phoneNum;
                    weightInput.value = patient.weight.toString();
                    heightInput.value = patient.height.toString();
                    smokingCheckbox.checked = patient.smoking;
                    addressInput.value = patient.address;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderUpdatePatientP(patients, html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_1, responseP, dataP, physicianID_2, response, data, patientsList, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    tempHtml_1 = "<h2>Update Patient</h2>\n        <form onsubmit=\"hundlePatientUpdate(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select patient</label><br>\n        <select id=\"id\" name=\"id\" onchange=\"loadPatientInfo()\">\n        ";
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 1:
                    responseP = _a.sent();
                    return [4 /*yield*/, responseP.json()];
                case 2:
                    dataP = _a.sent();
                    physicianID_2 = dataP.physicians.find(function (physician) { return physician.email === physicianEmail; })._id;
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    patientsList = data.patients.filter(function (patient) { return patient.physicianId === physicianID_2; });
                    patientsList.forEach(function (patient) {
                        tempHtml_1 += "<option value=\"" + patient._id + "\"> " + patient.firstName + " " + patient.lastName + "</option>";
                    });
                    tempHtml_1 += "</select>\n            </div>\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\" value=\"" + patientsList[0].firstName + "\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\" value=\"" + patientsList[0].lastName + "\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\" value=\"" + patientsList[0].age + "\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"text\" id=\"phoneNum\" name=\"phoneNum\" value=\"" + patientsList[0].phoneNum + "\">\n            </div><div class=\"input\">\n            <label for=\"weight\">Weight:</label><br>\n            <input type=\"number\" id=\"weight\" name=\"weight\" value=\"" + patientsList[0].weight + "\"> \n            </div><div class=\"input\">\n            <label for=\"height\">Height:</label><br>\n            <input type=\"number\" id=\"height\" name=\"height\" value=\"" + patientsList[0].height + "\">\n            </div><div class=\"input\">\n            <label for=\"smoking\">Smoking:</label><br>\n            <input type=\"checkbox\" id=\"smoking\" name=\"smoking\" value=\"" + patientsList[0].smoking + "\">\n            </div><div class=\"input\">\n            <label for=\"address\">Address:</label><br>\n            <input type=\"text\" id=\"address\" name=\"address\" value=\"" + patientsList[0].address + "\">\n            </div>";
                    tempHtml_1 += "<input type=\"submit\" value=\"UPDATE\">\n        </form>";
                    html.innerHTML = tempHtml_1;
                    return [3 /*break*/, 6];
                case 5:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function hundlePatientUpdate(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId, response, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target.id.value;
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.valueAsNumber;
                    phoneNum = event.target.phoneNum.value;
                    weight = event.target.weight.value;
                    height = event.target.height.value;
                    smoking = event.target.smoking.checked ? true : false;
                    address = event.target.address.value;
                    physicianId = null;
                    return [4 /*yield*/, fetch("/API/patient/update-patient", {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, firstName: firstName, lastName: lastName, age: age, phoneNum: phoneNum, weight: weight, height: height, smoking: smoking, address: address, physicianId: physicianId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Patient updated successfully");
                    window.location.href = "physician.html?physicianEmail=" + physicianEmail;
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadPatients() {
    return __awaiter(this, void 0, void 0, function () {
        var responseP, dataP, physicianID_3, response, data, patients, error_9;
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
                    console.log(dataP);
                    physicianID_3 = dataP.physicians.find(function (physician) { return physician.email === physicianEmail; })._id;
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    console.log(data);
                    patients = data.patients.filter(function (patient) { return patient.physicianId === physicianID_3; });
                    renderPatients(patients);
                    return [3 /*break*/, 6];
                case 5:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function renderPatients(patients) {
    try {
        var root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += "<h2>Patients</h2>\n     <table>\n     <tr>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>ID</th>\n     <th>Age</th>\n     <th>Phone Number</th>\n     <th>Weight</th>\n     <th>Height</th>\n     <th>Smoking</th>\n     <th>Address</th>\n     <th>Visit</th>\n     </tr>\n     </table>";
        var table_2 = document.querySelector("table");
        patients.forEach(function (patient) {
            table_2.innerHTML += "<tr>\n         <td>" + patient.firstName + "</td>\n         <td>" + patient.lastName + "</td>\n         <td>" + patient.patientId + "</td>\n         <td>" + patient.age + "</td>\n         <td>" + patient.phoneNum + "</td>\n         <td>" + patient.weight + "</td>\n         <td>" + patient.height + "</td>\n         <td>" + (patient.smoking ? "Yes" : "No") + "</td>\n         <td>" + patient.address + "</td>\n         <td><button onclick=\"StartVisit('" + patient._id + "')\">Open Visit</button></td>\n         </tr>";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function StartVisit(patientId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, patientID, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(patientId);
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    patientID = data.patients.find(function (patient) { return patient._id === patientId; });
                    console.log(patientID);
                    window.location.href = "visit.html?_id=" + patientID._id + "&physicianEmail=" + physicianEmail;
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadMedicines() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_11;
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
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderMedicines(medicines) {
    try {
        var root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += "<h2>Medicines</h2>\n        <table>\n        <tr>\n        <th>Name</th>\n        <th>Dosage Per Day</th>\n        <th>Max Duration</th>\n        </tr>\n        </table>";
        var table_3 = document.querySelector("table");
        medicines.forEach(function (medicine) {
            table_3.innerHTML += "<tr>\n            <td>" + medicine.name + "</td>\n            <td>" + medicine.dosagePerDay + "</td>\n            <td>" + medicine.maxDuration + "</td>\n            </tr>";
        });
    }
    catch (error) {
        console.error(error);
    }
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
