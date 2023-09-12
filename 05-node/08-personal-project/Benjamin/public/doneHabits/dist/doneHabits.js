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
getDoneHabits();
function getDoneHabits() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debugger;
                    return [4 /*yield*/, fetch("/API/habits/getDoneHabits?email=" + email)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    exportData(data);
                    return [2 /*return*/];
            }
        });
    });
}
var DoneHabit = /** @class */ (function () {
    function DoneHabit(name, categorie, timeDone) {
        this.name = name;
        this.categorie = categorie;
        this.timeDone = timeDone;
    }
    return DoneHabit;
}());
function exportData(data) {
    data.forEach(function (obj) {
        var name = obj.name;
        var categorie = obj.categorie;
        var date = obj.timeDone;
        console.log(date);
        var root = document.querySelector(".doneHabits");
        renderData(name, categorie, date, root);
    });
}
function renderData(name, categorie, date, root) {
    console.log(name, categorie, date);
    var dateObject = new Date(date);
    var year = dateObject.getFullYear();
    var month = dateObject.getMonth() + 1;
    var day = dateObject.getDate();
    var html = "<div class=\"doneHabits__habit\">\n    <h1 class=\"doneHabits__habit__header\">" + name + "</h1>\n    <h2 class=\"doneHabits__habit__categorie\">" + categorie + "</h2>\n    <h2 class=\"doneHabits__habit__date\">" + day + "/" + month + "/" + year + "</h2>\n</div>";
    root.innerHTML += html;
}
function backToMain() {
    window.location.href = "../main/main.html?email=" + email;
}
