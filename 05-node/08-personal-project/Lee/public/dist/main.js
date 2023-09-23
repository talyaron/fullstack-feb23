"use strict";
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
exports.__esModule = true;
exports.handleDeleteRelatives = exports.getUserRelatives = void 0;
function renderRelatives(relativesData, targetElement) {
    targetElement.innerHTML = ''; // Clear the target element
    if (!relativesData || relativesData.length === 0) {
        targetElement.innerHTML = '<p>No relatives found.</p>';
        return;
    }
    var relativesList = document.createElement('ul');
    relativesList.style.listStyle = 'none';
    relativesData.forEach(function (relative) {
        var relativeItem = document.createElement('li');
        var birthDate = new Date(relative.birthDate);
        var formattedBirthDate = birthDate.getDate() + "-" + (birthDate.getMonth() + 1) + "-" + birthDate.getFullYear();
        relativeItem.innerHTML = "\n        <span style=\"font-weight: bold\">" + relative.fullName + "</span> is my:\n        <span style=\"font-weight: bold\">" + relative.relation + "</span> - born in:\n        <span style=\"font-weight: bold\">" + formattedBirthDate + "</span> - lives in:\n        <span style=\"font-weight: bold\">" + relative.country + "</span>\n        <button onclick=\"handleUpdateRelatives('" + relative.id + "')\">Update</button>\n        <button onclick=\"handleDeleteRelatives('" + relative.id + "')\">Delete</button>\n      ";
        relativesList.appendChild(relativeItem);
    });
    targetElement.appendChild(relativesList);
}
// A function to get the user's relatives from the server by email
function getUserRelatives(email) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/relatives/get-user-relatives?email=" + email)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    // Assuming you have a rendering function for relatives, e.g., renderRelatives
                    renderRelatives(data.relatives, document.querySelector("#relatives"));
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
exports.getUserRelatives = getUserRelatives;
function handleDeleteRelatives(relativeId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, errorData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    console.log(relativeId);
                    return [4 /*yield*/, fetch("/API/relatives/delete-relative/" + relativeId, {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 1:
                    response = _a.sent();
                    if (!(response.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    if (result && result.relativeDB) {
                        console.log("Relative deleted successfully.");
                        // Update the UI or take other actions here.
                    }
                    else {
                        console.error("Server response is missing 'relativeDB' property.");
                    }
                    return [3 /*break*/, 6];
                case 3:
                    if (!(response.status === 404)) return [3 /*break*/, 4];
                    console.error("Relative not found");
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, response.json()];
                case 5:
                    errorData = _a.sent();
                    console.error("Error:", errorData.error); // Display the specific error message from the server
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error("An unexpected error occurred:", error_2);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.handleDeleteRelatives = handleDeleteRelatives;
function handleGetUserAndRelatives() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/userWithRelatives")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
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
handleGetUserAndRelatives();
