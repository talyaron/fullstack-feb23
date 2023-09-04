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
// const start = async () => {
//     try {      
//         await renderAdminPage();
//     } catch (error) {
//         console.error(error);
//     }
// }
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
        root.innerHTML += "<div id=\"admin-actions\">\n        <button id=\"add-physician\" onclick=\"hundleAddPhysician()\">Add Physician</button>\n        <button id=\"add-patient\" onclick=\"hundleAddPatient()\">Add Patient</button>\n        <button id=\"add-medicine\" onclick=\"hundleAddMedicine()\">Add Medicine</button>\n        <button id=\"update-physician\" onclick=\"hundleUpdatePhysician()\">Update Physician</button>\n        <button id=\"update-patient\" onclick=\"hundleUpdatePatient()\">Update Patient</button>\n        <button id=\"update-medicine\" onclick=\"hundleUpdateMedicine()\">Update Medicine</button>\n    </div>\n        ";
    }
    catch (error) {
        console.error(error);
    }
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
        html.innerHTML = "<h2>Add Physician</h2>\n        <form onsubmit=\"hundlePhysicianSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"firstName\">First Name:</label><br>\n        <input type=\"text\" id=\"firstName\" name=\"firstName\">\n        </div><div class=\"input\">\n        <label for=\"lastName\">Last Name:</label><br>\n        <input type=\"text\" id=\"lastName\" name=\"lastName\">\n        </div> <div class=\"input\">\n        <label for=\"age\">Age:</label><br>\n        <input type=\"number\" id=\"age\" name=\"age\">\n        </div> <div class=\"input\">\n        <label for=\"phoneNum\">Phone Number:</label><br>\n        <input type=\"number\" id=\"phoneNum\" name=\"phoneNum\">\n        </div><div class=\"input\">\n        <label for=\"email\">Email:</label><br>\n        <input type=\"email\" id=\"email\" name=\"email\">\n        </div><div class=\"input\">\n        <label for=\"licenseNumber\">License Number:</label><br>\n        <input type=\"number\" id=\"licenseNumber\" name=\"licenseNumber\">\n        </div><div class=\"input\">\n        <label for=\"password\">Password:</label><br>\n        <input type=\"password\" id=\"password\" name=\"password\">\n        </div><div class=\"input\">\n        <label for=\"isAdmin\">Admin:</label><br>\n        <input type=\"checkbox\" id=\"isAdmin\" name=\"isAdmin\">\n        </div> \n        <input type=\"submit\" value=\"ADD\">\n        </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function hundlePhysicianSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, phoneNum, email_1, licenseNumber, password, isAdmin, response, data, error_2;
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
                    error_2 = _a.sent();
                    console.error(error_2);
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
        var tempHtml_1, physiciansList, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_1 = "<h2>Add Patient</h2>\n        <form onsubmit=\"hundlePatientSubmit(event)\">\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"number\" id=\"phoneNum\" name=\"phoneNum\">\n            </div><div class=\"input\">\n            <label for=\"weight\">Weight:</label><br>\n            <input type=\"number\" id=\"weight\" name=\"weight\">\n            </div><div class=\"input\">\n            <label for=\"height\">Height:</label><br>\n            <input type=\"number\" id=\"height\" name=\"height\">\n            </div><div class=\"input\">\n            <label for=\"smoking\">Smoking:</label><br>\n            <input type=\"checkbox\" id=\"smoking\" name=\"smoking\">\n            </div><div class=\"input\">\n            <label for=\"address\">Address:</label><br>\n            <input type=\"text\" id=\"address\" name=\"address\">\n            </div><div class=\"input\">\n            <label for=\"physicianId\">Select physician</label><br>\n            <select id=\"physicianId\" name=\"physicianId\">\n            ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 1:
                    physiciansList = _a.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_1 += "<option value=\"" + physician.id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_1 += "</select>\n            </div>\n            <input type=\"submit\" value=\"ADD\">\n        </form>";
                    html.innerHTML = tempHtml_1;
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getPhysiciansList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, physiciansList, error_4;
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
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hundlePatientSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId, response, data, error_5;
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
                    error_5 = _a.sent();
                    console.error(error_5);
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
        var name, dosagePerDay, maxDuration, response, data, error_6;
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
                    error_6 = _a.sent();
                    console.error(error_6);
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
    return __awaiter(this, void 0, void 0, function () {
        var tempHtml_2, physiciansList, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    tempHtml_2 = "<h2>Update Physician</h2>\n        <form onsubmit=\"hundlePhysicianUpdateSubmit(event)\">\n        <div class=\"input\">\n        <label for=\"id\">Select physician</label><br>\n        <select id=\"id\" name=\"id\">\n        ";
                    return [4 /*yield*/, getPhysiciansList()];
                case 1:
                    physiciansList = _a.sent();
                    physiciansList.forEach(function (physician) {
                        tempHtml_2 += "<option value=\"" + physician.id + "\"> Dr. " + physician.firstName + " " + physician.lastName + "</option>";
                    });
                    tempHtml_2 += "</select>\n            </div>\n            <div class=\"input\">\n            <label for=\"firstName\">First Name:</label><br>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\">\n            </div><div class=\"input\">\n            <label for=\"lastName\">Last Name:</label><br>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\">\n            </div> <div class=\"input\">\n            <label for=\"age\">Age:</label><br>\n            <input type=\"number\" id=\"age\" name=\"age\">\n            </div> <div class=\"input\">\n            <label for=\"phoneNum\">Phone Number:</label><br>\n            <input type=\"number\" id=\"phoneNum\" name=\"phoneNum\">\n            </div><div class=\"input\">\n            <label for=\"email\">Email:</label><br>\n            <input type=\"email\" id=\"email\" name=\"email\">\n            </div><div class=\"input\">\n            <label for=\"licenseNumber\">License Number:</label><br>\n            <input type=\"number\" id=\"licenseNumber\" name=\"licenseNumber\">\n            </div><div class=\"input\">\n            <label for=\"password\">Password:</label><br>\n            <input type=\"password\" id=\"password\" name=\"password\">\n            </div><div class=\"input\">\n            <label for=\"isAdmin\">Admin:</label><br>\n            <input type=\"checkbox\" id=\"isAdmin\" name=\"isAdmin\">\n            </div> \n            <input type=\"submit\" value=\"UPDATE\">\n            </form>";
                    html.innerHTML = tempHtml_2;
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
function hundlePhysicianUpdateSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, firstName, lastName, age, phoneNum, email_2, licenseNumber, password, isAdmin, response, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    debugger;
                    id = event.target.selecte[0].value;
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    age = event.target.age.value;
                    phoneNum = event.target.phoneNum.value;
                    email_2 = event.target.email.value;
                    licenseNumber = event.target.licenseNumber.value;
                    password = event.target.password.value;
                    isAdmin = event.target.isAdmin.checked;
                    if (!id)
                        throw new Error("missing some details");
                    return [4 /*yield*/, fetch("API/physician/update-physician", {
                            method: "PUT",
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
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
