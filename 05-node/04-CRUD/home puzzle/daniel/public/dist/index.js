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
function handleAddFriend(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, phoneNumber, instagram, friend, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    name = event.target.name.value;
                    email = event.target.email.value;
                    phoneNumber = event.target.phoneNumber.valueAsNumber;
                    instagram = event.target.instagram.value;
                    if (!name || !email || !phoneNumber || !instagram) {
                        throw new Error("Please complete all fields");
                    }
                    friend = { name: name, email: email, phoneNumber: phoneNumber, instagram: instagram };
                    return [4 /*yield*/, fetch('/API/add-friend', //the res from the server
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(friend) //the req
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
function getFriends() {
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
                        throw new Error("friends are not array");
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
// When rendering we don't need to use async before function
function renderFriendHTML(friend) {
    try {
        var html = "<div class=\"friend\">\n        <h2>Name: " + friend.name + "</h2>\n        <p>Instagram: " + friend.instagram + "</p>\n        <p>Email: " + friend.email + "</p>\n        <p>Phone number: " + friend.phoneNumber + "</p>\n        <button class=\"delete\" onclick=\"handleDeleteFriend('" + friend.id + "')\">Delete</button>\n        </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderFriends(friends, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(friends);
        if (!Array.isArray(friends))
            throw new Error("Friends are not array");
        var friendsHTML = friends.map(function (friend) { return renderFriendHTML(friend); }).join("");
        HTMLElement.innerHTML = friendsHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetFriends() {
    return __awaiter(this, void 0, void 0, function () {
        var friends, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getFriends()];
                case 1:
                    friends = _a.sent();
                    root = document.querySelector("#root");
                    renderFriends(friends, root);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteFriend(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, friends, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/delete-friend", {
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
                    renderFriends(friends, document.querySelector("#root"));
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
// We need to use event in function when it get us some info
