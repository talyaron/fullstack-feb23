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
function handleAddUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var username, email, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    username = ev.target.username.value;
                    email = ev.target.email.value;
                    console.log(username, email);
                    return [4 /*yield*/, fetch('/API/users/add-user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ username: username, email: email })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    handleGetUsers();
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
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, fetchedUsers, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/get-users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    fetchedUsers = (_a.sent()).users;
                    console.log("handle get users", fetchedUsers);
                    renderUsers(fetchedUsers);
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
function renderUsers(users) {
    try {
        var html_1 = '<table border="1">';
        html_1 += "\n        <tr>\n            <th>Username</th>\n            <th>Email</th>\n            <th></th>\n            <th></th>\n         \n        </tr>\n    ";
        users.forEach(function (user) {
            html_1 += "\n            <tr >\n                <td>" + user.username + "</td>\n                <td>" + user.email + "</td>\n                <td><buttoN id=\"" + user._id + "\" onclick =\"handleEdit(event)\">Edit</button></td>\n                <td><buttoN id=\"" + user._id + "\" onclick =\"handleDelete(event)\">Delete</button></td>\n               \n                \n            </tr>\n        ";
        });
        html_1 += '</table>';
        var root = document.querySelector(".users");
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = event.target.id;
                    console.log(id);
                    return [4 /*yield*/, fetch("/api/users/" + id, {
                            method: 'DELETE'
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        handleGetUsers();
                        console.log('User deleted successfully');
                    }
                    else {
                        console.error('Error deleting user');
                    }
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
function handleEdit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, userData, html, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    id = event.target.id;
                    return [4 /*yield*/, fetch("/api/users/" + id, {
                            method: 'GET'
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    userData = _a.sent();
                    html = "<form id=\"" + id + "\" onsubmit='handleSave(event)'>";
                    html += "<input type=\"text\" name=\"username\" value=\"" + userData.users.username + "\"></input>\n                <input type=\"text\" name=\"email\" value=\"" + userData.users.email + "\"></input>\n                <input type=\"submit\"></input>";
                    html += "</form>";
                    document.querySelector(".userEdit").innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Error fetching user data');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function handleSave(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, id, username, email, data, response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    form = ev.target;
                    id = form.id;
                    username = form.username.value;
                    email = form.email.value;
                    data = { username: username, email: email, id: id };
                    return [4 /*yield*/, fetch("/api/users/" + id, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data) // Convert data to JSON and send in the request body
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        handleGetUsers();
                        document.querySelector(".userEdit").innerHTML = "";
                        console.log('User data updated successfully');
                    }
                    else {
                        // Handle errors here
                        console.error('Error updating user data');
                    }
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