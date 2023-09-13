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
handleGetgetUserName();
function getAppointment(ev, status) {
    return __awaiter(this, void 0, void 0, function () {
        var fields, doctors, dates, appointment, response, result, usersTasks, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    fields = document.querySelector('#field');
                    doctors = document.querySelector('#doctor');
                    dates = document.querySelector('#date');
                    appointment = {
                        field: fields.value,
                        doctor: doctors.value,
                        date: dates.value
                    };
                    if (!appointment.field || !appointment.doctor || !appointment.date)
                        throw new Error("Please complete all details");
                    rendersucceeded();
                    return [4 /*yield*/, fetch('/API/Personal/get-appointment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(appointment)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersTasks = result.usersTasks;
                    console.log(usersTasks);
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
function rendersucceeded() {
    var html = "\n    <p>\u05E0\u05E7\u05D1\u05E2 \u05DC\u05DA \u05EA\u05D5\u05E8 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4</p>";
    var succeeded = document.querySelector('#succeeded');
    succeeded.innerHTML = html;
}
function getUserName() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, users, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/Personal/get-user-name")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    users = result.users;
                    console.log(users);
                    return [2 /*return*/, users];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleGetgetUserName() {
    return __awaiter(this, void 0, void 0, function () {
        var users, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserName()];
                case 1:
                    users = _a.sent();
                    root = document.querySelector("#root");
                    rendergetUserName(users, root);
                    return [2 /*return*/];
            }
        });
    });
}
function rendergetUserName(users, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(users);
        if (!Array.isArray(users))
            throw new Error("products are not array");
        var usersHTML = users
            .map(function (users) { return renderusersHTML(users); })
            .join("");
        HTMLElement.innerHTML = usersHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function renderusersHTML(users) {
    try {
        var html = "<h2 class=\"appointments\"> ," + users.name + " \u05E9\u05DC\u05D5\u05DD \n      \n\n    </h2>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function getUserappointments() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, appointments, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/Personal/get-user-appointments")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    appointments = result.appointments;
                    // console.log(result)
                    console.log(appointments);
                    // console.log(usersPictures)
                    return [2 /*return*/, appointments];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAppointmentsHTML(appointments) {
    try {
        var html = "<div class=\"appointments\">\u05E0\u05E7\u05D1\u05E2 \u05DC\u05DA  \u05EA\u05D5\u05E8 \u05D0\u05E6\u05DC \u05E8\u05D5\u05E4\u05D0 " + appointments.field + "\n       \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA " + appointments.date + " \n       \u05D0\u05E6\u05DC " + appointments.doctor + " \n\n    </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderAppointments(appointments, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        // console.log(appointments);
        if (!Array.isArray(appointments))
            throw new Error("products are not array");
        var appointmentsHTML = appointments
            .map(function (appointments) { return renderAppointmentsHTML(appointments); })
            .join("");
        HTMLElement.innerHTML = appointmentsHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetAppointments() {
    return __awaiter(this, void 0, void 0, function () {
        var PersonalAppointments, appointments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserappointments()];
                case 1:
                    PersonalAppointments = _a.sent();
                    appointments = document.querySelector("#appointments");
                    renderAppointments(PersonalAppointments, appointments);
                    return [2 /*return*/];
            }
        });
    });
}
