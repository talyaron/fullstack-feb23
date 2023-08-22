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
getfriends();
function handleAddfriends(event) {
    return __awaiter(this, void 0, void 0, function () {
        var fullName, email, phoneNumber, instegram, imgUrl, friend, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    fullName = event.target.fullName.value;
                    email = event.target.email.value;
                    phoneNumber = event.target.phoneNumber.value;
                    instegram = event.target.instegram.value;
                    imgUrl = event.target.imgUrl.value;
                    if (!fullName || !email || !phoneNumber) {
                        throw new Error('Please complete all first free fields');
                    }
                    friend = { fullName: fullName, email: email, phoneNumber: phoneNumber, instegram: instegram, imgUrl: imgUrl };
                    return [4 /*yield*/, fetch('/API/add-friends', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(friend)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
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
function getfriends() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, friends, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/get-friends')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    friends = results.friends;
                    if (!Array.isArray(friends))
                        throw new Error("friendss are not array");
                    console.log(friends);
                    console.log(results);
                    return [2 /*return*/, friends];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderfriendsHTML(friends) {
    try {
        var html = "<div class=\"friends\">\n        <img src=\"" + friends.imgUrl + "\" />\n        <h3>" + friends.fullName + "</h3>\n        <p>phoneNumber: " + friends.phoneNumber + "</p>\n        <p>instegram: " + friends.instegram + "</p>\n        <form id=\"" + friends.id + "\" onsubmit=\"handleUpdatefriends(event)\">\n        <input type=\"text\" name=\"email\" value=\"" + friends.email + "\" placeholder=\"*e-mail\">\n        <input type=\"text\" name=\"phoneNumber\"  value=\"" + friends.phoneNumber + "\" placeholder=\"Price\" />\n        <input type=\"text\" name=\"instegram\" value=\"" + friends.instegram + "\" placeholder=\"instegram accaunte\">\n        <input type=\"url\" name=\"imgUrl\" value=\"" + friends.imgUrl + "\" placeholder=\"my friend Image\">\n        <button type=\"submit\">Update</button></form>\n        <button onclick=\"handleDeletefriends('" + friends.id + "')\">Delete</button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderfriends(friends, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(friends);
        if (!Array.isArray(friends))
            throw new Error("friendss are not array");
        var friendssHTML = friends.map(function (friends) { return renderfriendsHTML(friends); }).join("");
        HTMLElement.innerHTML = friendssHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowFriends() {
    return __awaiter(this, void 0, void 0, function () {
        var friends, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getfriends()];
                case 1:
                    friends = _a.sent();
                    root = document.querySelector('#root');
                    renderfriends(friends, root);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeletefriends(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, friends, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/delete-friends', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    friends = result.friends;
                    renderfriends(friends, document.querySelector('#root'));
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
function handleUpdatefriends(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var phoneNumber, id, response, result, friendss, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    phoneNumber = ev.target.phoneNumber.valueAsNumber;
                    id = ev.target.id;
                    console.log(id, phoneNumber);
                    return [4 /*yield*/, fetch('/API/update-friends', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, phoneNumber: phoneNumber })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    friendss = result.friendss;
                    renderfriendss(friendss, document.querySelector('#root'));
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
