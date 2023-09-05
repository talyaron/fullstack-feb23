// export { getEmailFromQuery };
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
    return urlParams.get('email');
}
var email = getEmailFromQuery();
console.log(email);
renderAdminPage();
function renderAdminPage() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians?email=" + email)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    renderWelcome(data.physicians[0].lastName, document.querySelector("#root"));
                    renderAdminActions(document.querySelector("#header"));
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
function renderAdminActions(root) {
    try {
        root.innerHTML += "<div id=\"admin-actions\">\n        <button id=\"add-physician\" onclick=\"hundleAddPhysician()\">Add Physician</button>\n        <button id=\"add-patient\" onclick=\"hundleAddPatient()\">Add Patient</button>\n        <button id=\"add-medicine\" onclick=\"hundleAddMedicine()\">Add Medicine</button>\n        <button id=\"update-physician\" onclick=\"hundleUpdatePhysician()\">Update Physician</button>\n        <button id=\"update-patient\" onclick=\"hundleUpdatePatient()\">Update Patient</button>\n        <button id=\"update-medicine\" onclick=\"hundleUpdateMedicine()\">Update Medicine</button>\n        <button id=\"delete-physician\" onclick=\"hundleDeletePhysician()\">Delete Physician</button>\n        <button id=\"delete-patient\" onclick=\"hundleDeletePatient()\">Delete Patient</button>\n        <button id=\"delete-medicine\" onclick=\"hundleDeleteMedicine()\">Delete Medicine</button>\n        <button id=\"physicianList\" onclick=\"hundlePhysicianList()\">Physician List</button>\n        <button id=\"patientList\" onclick=\"hundlePatientList()\">Patient List</button>\n        <button id=\"medicineList\" onclick=\"hundleMedicineList()\">Medicine List</button>\n        <button id=\"logout\" onclick=\"hundleLogout()\">Logout</button>\n    </div>\n        ";
    }
    catch (error) {
        console.error(error);
    }
}
function hundleLogout() {
    try {
        window.location.href = "index.html";
    }
    catch (error) {
        console.error(error);
    }
}
function hundlePhysicianList() {
    try {
        renderPhysicianList(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderPhysicianList(html) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, physiciansList, tempHtml_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    physiciansList = data.physicians;
                    tempHtml_1 = "<h2>Physician List</h2>\n        <table>\n        <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Age</th>\n        <th>Phone Number</th>\n        <th>Email</th>\n        <th>License Number</th>\n        <th>Admin</th>\n        </tr>";
                    physiciansList.forEach(function (physician) {
                        tempHtml_1 += "<tr>\n            <td>" + physician.firstName + "</td>\n            <td>" + physician.lastName + "</td>\n            <td>" + physician.age + "</td>\n            <td>" + physician.phoneNum + "</td>\n            <td>" + physician.email + "</td>\n            <td>" + physician.licenseNumber + "</td>\n            <td>" + physician.isAdmin + "</td>\n            </tr>";
                    });
                    tempHtml_1 += "</table>";
                    html.innerHTML = tempHtml_1;
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
function hundlePatientList() {
    try {
        renderPatientList(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderPatientList(html) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, responsePhysician, dataPhysician_1, physiciansList, patientsList, tempHtml_2, error_3;
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
                    responsePhysician = _a.sent();
                    return [4 /*yield*/, responsePhysician.json()];
                case 4:
                    dataPhysician_1 = _a.sent();
                    physiciansList = dataPhysician_1.physicians;
                    patientsList = data.patients;
                    tempHtml_2 = "<h2>Patient List</h2>\n        <table>\n        <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Age</th>\n        <th>Phone Number</th>\n        <th>Weight</th>\n        <th>Height</th>\n        <th>Smoking</th>\n        <th>Address</th>\n        <th>Physician</th>\n        </tr>";
                    patientsList.forEach(function (patient) {
                        tempHtml_2 += "<tr>\n            <td>" + patient.firstName + "</td>\n            <td>" + patient.lastName + "</td>\n            <td>" + patient.age + "</td>\n            <td>" + patient.phoneNum + "</td>\n            <td>" + patient.weight + "</td>\n            <td>" + patient.height + "</td>\n            <td>" + patient.smoking + "</td>\n            <td>" + patient.address + "</td>\n            <td>Dr. " + dataPhysician_1.physicians.find(function (p) { return p._id === patient.physicianId; }).lastName + "</td>\n            </tr>";
                    });
                    tempHtml_2 += "</table>";
                    html.innerHTML = tempHtml_2;
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function hundleMedicineList() {
    try {
        renderMedicineList(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderMedicineList(html) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, medicinesList, tempHtml_3, error_4;
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
                    medicinesList = data.medicines;
                    tempHtml_3 = "<h2>Medicine List</h2>\n        <table>\n        <tr>\n        <th>Name</th>\n        <th>Dosage Per Day</th>\n        <th>Max Duration</th>\n        </tr>";
                    medicinesList.forEach(function (medicine) {
                        tempHtml_3 += "<tr>\n            <td>" + medicine.name + "</td>\n            <td>" + medicine.dosagePerDay + "</td>\n            <td>" + medicine.maxDuration + "</td>\n            </tr>";
                    });
                    tempHtml_3 += "</table>";
                    html.innerHTML = tempHtml_3;
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleDeletePhysician() {
    try {
        renderDeletePhysician(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderDeletePhysician(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_4, physiciansList, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_4 = "<h2>Delete Physician</h2>\n        <form onsubmit=\"hundlePhysicianDeleteSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select physician</label><br>\n        <select id=\"id\" name=\"id\">\n        ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 1:
                    physiciansList = _a.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_4 += "<option value=\"" + physician._id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_4 += "</select>\n            </div>\n            <input type=\"submit\" value=\"DELETE\">\n            </form>";
                    html.innerHTML = tempHtml_4;
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function hundlePhysicianDeleteSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, data, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target.id.value;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/physician/delete-physician", {
                            method: "DELETE",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Physician deleted successfully");
                    window.location.href = "admin.html?email=" + email;
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
function hundleDeletePatient() {
    try {
        renderDeletePatient(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderDeletePatient(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_5, patientsList, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_5 = "<h2>Delete Patient</h2>\n        <form onsubmit=\"hundlePatientDeleteSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select patient</label><br>\n        <select id=\"id\" name=\"id\">\n        ";
                    return [4 /*yield*/, getPatientsList()];
                case 1:
                    patientsList = _a.sent();
                    patientsList.forEach(function (patient) {
                        tempHtml_5 += "<option value=\"" + patient._id + "\"> " + patient.firstName + " " + patient.lastName + "</option>";
                    });
                    tempHtml_5 += "</select>\n            </div>\n            <input type=\"submit\" value=\"DELETE\">\n            </form>";
                    html.innerHTML = tempHtml_5;
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function hundlePatientDeleteSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target.id.value;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/patient/delete-patient", {
                            method: "DELETE",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Patient deleted successfully");
                    window.location.href = "admin.html?email=" + email;
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
function hundleDeleteMedicine() {
    try {
        renderDeleteMedicine(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderDeleteMedicine(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_6, medicinesList, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_6 = "<h2>Delete Medicine</h2>\n        <form onsubmit=\"hundleMedicineDeleteSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select medicine</label><br>\n        <select id=\"id\" name=\"id\">\n        ";
                    return [4 /*yield*/, getMedicinesList()];
                case 1:
                    medicinesList = _a.sent();
                    medicinesList.forEach(function (medicine) {
                        tempHtml_6 += "<option value=\"" + medicine._id + "\"> " + medicine.name + "</option>";
                    });
                    tempHtml_6 += "</select>\n            </div>\n            <input type=\"submit\" value=\"DELETE\">\n            </form>";
                    html.innerHTML = tempHtml_6;
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function hundleMedicineDeleteSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, data, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target.id.value;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/medicine/delete-medicine", {
                            method: "DELETE",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Medicine deleted successfully");
                    window.location.href = "admin.html?email=" + email;
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
function renderWelcome(lastName, root) {
    try {
        root.innerHTML += "<div id = \"header\">\n        <h1>Welcome Dr. " + lastName + "</h1>\n        </div>\n        <div id=\"forms\"></div>";
    }
    catch (error) {
        console.error(error);
    }
}
function hundleAddPhysician() {
    try {
        renderAddPhysician(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddPhysician(html) {
    try {
        html.innerHTML = "<h2>Add Physician</h2>\n        <form onsubmit=\"hundlePhysicianSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"firstName\">First Name:</label><br>\n        <input type=\"text\" id=\"firstName\" name=\"firstName\">\n        </div><div class=\"input\">\n        <label for=\"lastName\">Last Name:</label><br>\n        <input type=\"text\" id=\"lastName\" name=\"lastName\">\n        </div> <div class=\"input\">\n        <label for=\"age\">Age:</label><br>\n        <input type=\"number\" id=\"age\" name=\"age\">\n        </div> <div class=\"input\">\n        <label for=\"phoneNum\">Phone Number:</label><br>\n        <input type=\"text\" id=\"phoneNum\" name=\"phoneNum\">\n        </div><div class=\"input\">\n        <label for=\"email\">Email:</label><br>\n        <input type=\"email\" id=\"email\" name=\"email\">\n        </div><div class=\"input\">\n        <label for=\"licenseNumber\">License Number:</label><br>\n        <input type=\"text\" id=\"licenseNumber\" name=\"licenseNumber\">\n        </div><div class=\"input\">\n        <label for=\"password\">Password:</label><br>\n        <input type=\"password\" id=\"password\" name=\"password\">\n        </div><div class=\"input\">\n        <label for=\"isAdmin\">Admin:</label><br>\n        <input type=\"checkbox\" id=\"isAdmin\" name=\"isAdmin\">\n        </div> \n        <input type=\"submit\" value=\"ADD\">\n        </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function hundlePhysicianSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, phoneNum, email_1, licenseNumber, password, isAdmin, response, data, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.value;
                    phoneNum = event.target.phoneNum.value;
                    email_1 = event.target.email.value;
                    licenseNumber = event.target.licenseNumber.value;
                    password = event.target.password.value;
                    isAdmin = event.target.isAdmin.checked;
                    if (!firstName || !lastName || !age || !phoneNum || !email_1 || !licenseNumber || !password)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/physician/add-physician", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ firstName: firstName, lastName: lastName, age: age, phoneNum: phoneNum, email: email_1, licenseNumber: licenseNumber, password: password, isAdmin: isAdmin })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Physician added successfully");
                    window.location.href = "admin.html?email=" + email_1;
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
function hundleAddPatient() {
    try {
        renderAddPatient(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddPatient(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_7, physiciansList, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_7 = "<h2>Add Patient</h2>\n        <form onsubmit=\"hundlePatientSubmit(event)\">\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"text\" id=\"phoneNum\" name=\"phoneNum\">\n            </div><div class=\"input\">\n            <label for=\"weight\">Weight:</label><br>\n            <input type=\"number\" id=\"weight\" name=\"weight\">\n            </div><div class=\"input\">\n            <label for=\"height\">Height:</label><br>\n            <input type=\"number\" id=\"height\" name=\"height\">\n            </div><div class=\"input\">\n            <label for=\"smoking\">Smoking:</label><br>\n            <input type=\"checkbox\" id=\"smoking\" name=\"smoking\">\n            </div><div class=\"input\">\n            <label for=\"address\">Address:</label><br>\n            <input type=\"text\" id=\"address\" name=\"address\">\n            </div><div class=\"input\">\n            <label for=\"physicianId\">Select physician</label><br>\n            <select id=\"physicianId\" name=\"physicianId\">\n            ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 1:
                    physiciansList = _a.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_7 += "<option value=\"" + physician._id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_7 += "</select>\n            </div>\n            <input type=\"submit\" value=\"ADD\">\n        </form>";
                    html.innerHTML = tempHtml_7;
                    return [3 /*break*/, 3];
                case 2:
                    error_12 = _a.sent();
                    console.error(error_12);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getPhysiciansList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, physiciansList, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    physiciansList = data.physicians;
                    return [2 /*return*/, physiciansList];
                case 3:
                    error_13 = _a.sent();
                    console.error(error_13);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundlePatientSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId, response, data, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.value;
                    phoneNum = event.target.phoneNum.value;
                    weight = event.target.weight.value;
                    height = event.target.height.value;
                    smoking = event.target.smoking.checked;
                    address = event.target.address.value;
                    physicianId = event.target.physicianId.value;
                    if (!firstName || !lastName || !age || !phoneNum || !weight || !height || !address || !physicianId)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/patient/add-patient", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ firstName: firstName, lastName: lastName, age: age, phoneNum: phoneNum, weight: weight, height: height, smoking: smoking, address: address, physicianId: physicianId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Patient added successfully");
                    window.location.href = "admin.html?email=" + email;
                    return [3 /*break*/, 4];
                case 3:
                    error_14 = _a.sent();
                    console.error(error_14);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleAddMedicine() {
    try {
        renderAddMedicine(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderAddMedicine(html) {
    try {
        html.innerHTML = "<h2>Add Medicine</h2>\n        <form onsubmit=\"hundleMedicineSubmit(event)\">\n            <div class=\"input\">\n            <label for=\"name\">Name:</label><br>\n            <input type=\"text\" id=\"name\" name=\"name\">\n            </div><div class=\"input\">\n            <label for=\"dosagePerDay\">Dosage Per Day:</label><br>\n            <input type=\"number\" id=\"dosagePerDay\" name=\"dosagePerDay\">\n            </div> <div class=\"input\">\n            <label for=\"maxDuration\">Max Duration:</label><br>\n            <input type=\"number\" id=\"maxDuration\" name=\"maxDuration\">\n            </div>\n            <input type=\"submit\" value=\"ADD\">\n        </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function hundleMedicineSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, dosagePerDay, maxDuration, response, data, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    name = event.target.name.value;
                    dosagePerDay = event.target.dosagePerDay.value;
                    maxDuration = event.target.maxDuration.value;
                    if (!name || !dosagePerDay || !maxDuration)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/medicine/add-medicine", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name: name, dosagePerDay: dosagePerDay, maxDuration: maxDuration })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Medicine added successfully");
                    window.location.href = "admin.html?email=" + email;
                    return [3 /*break*/, 4];
                case 3:
                    error_15 = _a.sent();
                    console.error(error_15);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleUpdatePhysician() {
    try {
        renderUpdatePhysician(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderUpdatePhysician(html) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_8, physiciansList, error_16;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    tempHtml_8 = "<h2>Update Physician</h2>\n        <form onsubmit=\"hundlePhysicianUpdateSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select physician</label><br>\n        <select id=\"id\" name=\"id\" onchange=\"loadDetails()\">\n        ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 1:
                    physiciansList = _b.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_8 += "<option value=\"" + physician._id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_8 += "</select>\n            </div>\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\" value=\"" + physiciansList[0].firstName + "\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\" value=\"" + physiciansList[0].lastName + "\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\" value=\"" + physiciansList[0].age + "\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"text\" id=\"phoneNum\" name=\"phoneNum\" value=\"" + physiciansList[0].phoneNum + "\">\n            </div><div class=\"input\">\n            <label for=\"email\">Email:</label><br>\n            <input type=\"email\" id=\"email\" name=\"email\">\n            </div><div class=\"input\">\n            <label for=\"licenseNumber\">License Number:</label><br>\n            <input type=\"text\" id=\"licenseNumber\" name=\"licenseNumber\" value=\"" + physiciansList[0].licenseNumber + "\">\n            </div><div class=\"input\">\n            <label for=\"password\">Password:</label><br>\n            <input type=\"password\" id=\"password\" name=\"password\" value=\"" + physiciansList[0].password + "\">\n            </div><div class=\"input\">\n            <label for=\"isAdmin\">Admin:</label><br>\n            <input type=\"checkbox\" id=\"isAdmin\" name=\"isAdmin\" " + (((_a = physiciansList[0]) === null || _a === void 0 ? void 0 : _a.isAdmin) ? "checked" : "") + ">\n            </div> \n            <input type=\"submit\" value=\"UPDATE\">\n            </form>";
                    html.innerHTML = tempHtml_8;
                    return [3 /*break*/, 3];
                case 2:
                    error_16 = _b.sent();
                    console.error(error_16);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var id_1, response, data, physician, idInput, firstNameInput, lastNameInput, ageInput, phoneNumInput, emailInput, licenseNumberInput, passwordInput, isAdminCheckbox, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id_1 = document.querySelector("#id").value;
                    return [4 /*yield*/, fetch("/API/physician/get-physicians")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    debugger;
                    physician = data.physicians.find(function (physician) { return physician._id === id_1; });
                    idInput = document.querySelector("#id");
                    firstNameInput = document.querySelector("#firstName");
                    lastNameInput = document.querySelector("#lastName");
                    ageInput = document.querySelector("#age");
                    phoneNumInput = document.querySelector("#phoneNum");
                    emailInput = document.querySelector("#email");
                    licenseNumberInput = document.querySelector("#licenseNumber");
                    passwordInput = document.querySelector("#password");
                    isAdminCheckbox = document.querySelector("#isAdmin");
                    firstNameInput.value = physician.firstName;
                    lastNameInput.value = physician.lastName;
                    ageInput.value = physician.age.toString();
                    phoneNumInput.value = physician.phoneNum;
                    emailInput.value = physician.email;
                    licenseNumberInput.value = physician.licenseNumber;
                    passwordInput.value = physician.password;
                    isAdminCheckbox.checked = physician.isAdmin;
                    return [3 /*break*/, 4];
                case 3:
                    error_17 = _a.sent();
                    console.error(error_17);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundlePhysicianUpdateSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, firstName, lastName, age, phoneNum, email_2, licenseNumber, password, isAdmin, response, data, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target[0].value;
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.valueAsNumber;
                    phoneNum = event.target.phoneNum.value;
                    email_2 = event.target.email.value;
                    licenseNumber = event.target.licenseNumber.value;
                    password = event.target.password.value;
                    isAdmin = event.target.isAdmin.checked;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/physician/update-physician", {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, firstName: firstName, lastName: lastName, age: age, phoneNum: phoneNum, email: email_2, licenseNumber: licenseNumber, password: password, isAdmin: isAdmin })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Physician updated successfully");
                    window.location.href = "admin.html?email=" + email_2;
                    return [3 /*break*/, 4];
                case 3:
                    error_18 = _a.sent();
                    console.error(error_18);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleUpdatePatient() {
    try {
        renderUpdatePatient(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderUpdatePatient(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_9, patientsList, physiciansList, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    tempHtml_9 = "<h2>Update Patient</h2>\n        <form onsubmit=\"hundlePatientUpdateSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select patient</label><br>\n        <select id=\"id\" name=\"id\" onchange=\"loadPatientDetails()\">\n        ";
                    return [4 /*yield*/, getPatientsList()];
                case 1:
                    patientsList = _a.sent();
                    debugger;
                    patientsList.forEach(function (patient) {
                        tempHtml_9 += "<option value=\"" + patient._id + "\"> " + patient.firstName + " " + patient.lastName + "</option>";
                    });
                    tempHtml_9 += "</select>\n            </div>\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\" value=\"" + patientsList[0].firstName + "\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\" value=\"" + patientsList[0].lastName + "\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\" value=\"" + patientsList[0].age + "\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"text\" id=\"phoneNum\" name=\"phoneNum\" value=\"" + patientsList[0].phoneNum + "\">\n            </div><div class=\"input\">\n            <label for=\"weight\">Weight:</label><br>\n            <input type=\"number\" id=\"weight\" name=\"weight\" value=\"" + patientsList[0].weight + "\">\n            </div><div class=\"input\">\n            <label for=\"height\">Height:</label><br>\n            <input type=\"number\" id=\"height\" name=\"height\" value=\"" + patientsList[0].height + "\">\n            </div><div class=\"input\">\n            <label for=\"smoking\">Smoking:</label><br>\n            <input type=\"checkbox\" id=\"smoking\" name=\"smoking\" " + (patientsList[0].smoking ? "checked" : "") + ">\n            </div><div class=\"input\">\n            <label for=\"address\">Address:</label><br>\n            <input type=\"text\" id=\"address\" name=\"address\" value=\"" + patientsList[0].address + "\">\n            </div><div class=\"input\">\n            <label for=\"physicianId\">Select physician</label><br>\n            <select id=\"physicianId\" name=\"physicianId\">\n            ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 2:
                    physiciansList = _a.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_9 += "<option value=\"" + physician._id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_9 += "</select>\n            </div>\n            <input type=\"submit\" value=\"UPDATE\">\n        </form>";
                    html.innerHTML = tempHtml_9;
                    return [3 /*break*/, 4];
                case 3:
                    error_19 = _a.sent();
                    console.error(error_19);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getPatientsList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, patientsList, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    patientsList = data.patients;
                    return [2 /*return*/, patientsList];
                case 3:
                    error_20 = _a.sent();
                    console.error(error_20);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadPatientDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var id_2, response, data, patient, idInput, firstNameInput, lastNameInput, ageInput, phoneNumInput, weightInput, heightInput, smokingCheckbox, addressInput, physicianIdInput, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id_2 = document.querySelector("#id").value;
                    return [4 /*yield*/, fetch("/API/patient/get-patients")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    patient = data.patients.find(function (patient) { return patient._id === id_2; });
                    idInput = document.querySelector("#id");
                    firstNameInput = document.querySelector("#firstName");
                    lastNameInput = document.querySelector("#lastName");
                    ageInput = document.querySelector("#age");
                    phoneNumInput = document.querySelector("#phoneNum");
                    weightInput = document.querySelector("#weight");
                    heightInput = document.querySelector("#height");
                    smokingCheckbox = document.querySelector("#smoking");
                    addressInput = document.querySelector("#address");
                    physicianIdInput = document.querySelector("#physicianId");
                    firstNameInput.value = patient.firstName;
                    lastNameInput.value = patient.lastName;
                    ageInput.value = patient.age.toString();
                    phoneNumInput.value = patient.phoneNum;
                    weightInput.value = patient.weight.toString();
                    heightInput.value = patient.height.toString();
                    smokingCheckbox.checked = patient.smoking;
                    addressInput.value = patient.address;
                    physicianIdInput.value = patient.physicianId;
                    return [3 /*break*/, 4];
                case 3:
                    error_21 = _a.sent();
                    console.error(error_21);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundlePatientUpdateSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId, response, data, error_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    debugger;
                    id = event.target[0].value;
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.value;
                    phoneNum = event.target.phoneNum.value;
                    weight = event.target.weight.value;
                    height = event.target.height.value;
                    smoking = event.target.smoking.checked;
                    address = event.target.address.value;
                    physicianId = event.target.physicianId.value;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/patient/update-patient", {
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
                    window.location.href = "admin.html?email=" + email;
                    return [3 /*break*/, 4];
                case 3:
                    error_22 = _a.sent();
                    console.error(error_22);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleUpdateMedicine() {
    try {
        renderUpdateMedicine(document.querySelector("#forms"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderUpdateMedicine(html) {
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_10, medicinesList, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_10 = "<h2>Update Medicine</h2>\n        <form onsubmit=\"hundleMedicineUpdateSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select medicine</label><br>\n        <select id=\"id\" name=\"id\" onchange=\"loadMedicineDetails()\">\n        ";
                    return [4 /*yield*/, getMedicinesList()];
                case 1:
                    medicinesList = _a.sent();
                    medicinesList.forEach(function (medicine) {
                        tempHtml_10 += "<option value=\"" + medicine._id + "\"> " + medicine.name + "</option>";
                    });
                    tempHtml_10 += "</select>\n            </div>\n            <div class=\"input\">\n            <label for=\"name\">Name:</label><br>\n            <input type=\"text\" id=\"name\" name=\"name\" value=\"" + medicinesList[0].name + "\">\n            </div><div class=\"input\">\n            <label for=\"dosagePerDay\">Dosage Per Day:</label><br>\n            <input type=\"number\" id=\"dosagePerDay\" name=\"dosagePerDay\" value=\"" + medicinesList[0].dosagePerDay + "\">\n            </div> <div class=\"input\">\n            <label for=\"maxDuration\">Max Duration:</label><br>\n            <input type=\"number\" id=\"maxDuration\" name=\"maxDuration\" value=\"" + medicinesList[0].maxDuration + "\">\n            </div>\n            <input type=\"submit\" value=\"UPDATE\">\n        </form>";
                    html.innerHTML = tempHtml_10;
                    return [3 /*break*/, 3];
                case 2:
                    error_23 = _a.sent();
                    console.error(error_23);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getMedicinesList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, medicinesList, error_24;
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
                    medicinesList = data.medicines;
                    return [2 /*return*/, medicinesList];
                case 3:
                    error_24 = _a.sent();
                    console.error(error_24);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadMedicineDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var id_3, response, data, medicine, idInput, nameInput, dosagePerDayInput, maxDurationInput, error_25;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id_3 = document.querySelector("#id").value;
                    return [4 /*yield*/, fetch("/API/medicine/get-medicines")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    medicine = data.medicines.find(function (medicine) { return medicine._id === id_3; });
                    idInput = document.querySelector("#id");
                    nameInput = document.querySelector("#name");
                    dosagePerDayInput = document.querySelector("#dosagePerDay");
                    maxDurationInput = document.querySelector("#maxDuration");
                    nameInput.value = medicine.name;
                    dosagePerDayInput.value = medicine.dosagePerDay.toString();
                    maxDurationInput.value = medicine.maxDuration.toString();
                    return [3 /*break*/, 4];
                case 3:
                    error_25 = _a.sent();
                    console.error(error_25);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundleMedicineUpdateSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, name, dosagePerDay, maxDuration, response, data, error_26;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    id = event.target[0].value;
                    name = event.target.name.value;
                    dosagePerDay = event.target.dosagePerDay.value;
                    maxDuration = event.target.maxDuration.value;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/medicine/update-medicine", {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, name: name, dosagePerDay: dosagePerDay, maxDuration: maxDuration })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    alert("Medicine updated successfully");
                    window.location.href = "admin.html?email=" + email;
                    return [3 /*break*/, 4];
                case 3:
                    error_26 = _a.sent();
                    console.error(error_26);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
