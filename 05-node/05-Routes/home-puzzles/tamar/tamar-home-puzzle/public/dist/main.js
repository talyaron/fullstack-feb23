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
//----hendles functions:-----------
//-----render functions:----------
function renderUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, Html, userHTML, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/users/get-user')]; //get the chosen user by id
                case 1:
                    response = _a.sent() //get the chosen user by id
                    ;
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    Html = document.querySelector("#root");
                    if (!Html)
                        throw new Error("no div element catches");
                    userHTML = "<div class=\"user\">\n                            <h1>" + results.name + "</h1>\n                            <div id=\"tasksRoot\"></div> \n                         </div>";
                    renderUserTasks();
                    Html.innerHTML = userHTML;
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
function renderUserTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, Html, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/userTask/get-tasks-of-user')]; //get the tasks of the user by user-id
                case 1:
                    response = _a.sent() //get the tasks of the user by user-id
                    ;
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    Html = document.querySelector("#tasksRoot");
                    if (!Html)
                        throw new Error("no div element catches");
                    renderTasks(results, Html);
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
//----controller function:---------
function getUserTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, results, userTasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/userTask/get-tasks-of-user')
                        //becaous the id pass from the login to main page
                        //the getTasksOfUser function in the server will have the id
                        //to use it to find the spesific user
                    ];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    results = _a.sent();
                    userTasks = results.userTasks;
                    if (!Array.isArray(userTasks))
                        throw new Error("User Tasks are not array");
                    console.log("userTasks:", userTasks);
                    console.log("results:", results);
                    return [2 /*return*/, userTasks];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//---call function:--
getUserTasks();