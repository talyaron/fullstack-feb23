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
var _this = this;
//login form
var loginModal = document.getElementById('loginModal');
var loginForm = document.getElementById('loginForm');
var loginButton = document.getElementById('loginButton');
function showLoginModal() {
    loginModal.style.display = 'block';
}
function hideLoginModal() {
    loginModal.style.display = 'none';
}
loginButton.addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var matchingUser = users.find(function (user) { return user.username === username && user.password === password; });
    if (matchingUser) {
        hideLoginModal();
    }
    else {
        alert('Invalid credentials. Please try again.');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    showLoginModal();
});
var users = [
    { username: 'doriel', password: 'admin' },
    { username: 'eti', password: 'admin1' },
];
//Age
var getAge = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, userAge, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.time('fetching age');
                return [4 /*yield*/, fetch('/myAge')];
            case 1:
                response = _a.sent();
                console.timeEnd('fetching age');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                userAge = document.querySelector('#age');
                userAge.innerHTML = data.myAge;
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error:', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getAge();
// Create a function to get the name from the server and populate the input field
var getName = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, userInput, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.time('fetching name');
                return [4 /*yield*/, fetch('/firstName')];
            case 1:
                response = _a.sent();
                console.timeEnd('fetching name');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                userInput = document.querySelector('.userName');
                userInput.value = data.firstName;
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error('Error:', error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getName();
//Description
var myDescription = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, userDescription, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.time('fetching description');
                return [4 /*yield*/, fetch('/myDescription')];
            case 1:
                response = _a.sent();
                console.timeEnd('fetching description');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                userDescription = document.querySelector('#description');
                userDescription.innerHTML = data.myDescription;
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error('Error:', error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
myDescription();
