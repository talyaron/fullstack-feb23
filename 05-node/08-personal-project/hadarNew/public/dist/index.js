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
function handleAddexercise(event) {
    return __awaiter(this, void 0, void 0, function () {
        var exercise, sets, repetitions, weight, timer, _exercise, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    exercise = event.target.exercise.value;
                    sets = event.target.sets.value;
                    repetitions = event.target.repetitions.value;
                    weight = event.target.weight.value;
                    timer = event.target.timer.value;
                    if (!exercise || !sets || !repetitions || !weight || !timer)
                        throw new Error("Please complete all fields");
                    _exercise = { exercise: exercise, sets: sets, repetitions: repetitions, weight: weight, timer: timer };
                    return [4 /*yield*/, fetch("/API/img/add-exercise", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(_exercise)
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
//get exercises from server
function getExercises() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, exercises, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/img/get-exercises")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    exercises = result.exercises;
                    if (!Array.isArray(exercises))
                        throw new Error("exercises are not array");
                    return [2 /*return*/, exercises];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderExercisesHTML(exercise) {
    try {
        var html = "<div class=\"imgs\">\n           \n        </div>\n        <form class=\"exerciseForm\" id=" + exercise.id + " onsubmit=\"updateExercise(event)\">\n        <div> <p>exercise</p> <input type=\"text\" name=\"exercise\" value=\"" + exercise.exercise + "\" placeholder=\"exercise\" /> </div>\n        <div> <p>sets</p> <input type=\"number\" name=\"sets\" value=\"" + exercise.sets + "\" placeholder=\"sets\" /></div>\n        <div> <p>repetitions</p> <input type=\"number\" name=\"repetitions\" value=\"" + exercise.repetitions + "\" placeholder=\"repetitions\" /></div>\n        <div> <p>weight</p> <input type=\"number\" name=\"weight\" value=\"" + exercise.weight + "\" placeholder=\"weight\" /></div>\n        <div> <p>timer</p> <input type=\"number\" name=\"timer\" value=\"" + exercise.timer + "\" placeholder=\"timer\" /></div>\n        <button class=\"exerciseButton\" type=\"submit\">update</button>\n        <button class=\"exerciseButton\" onclick=\"handleDeleteExercise('" + exercise.id + "')\">Delete</button>\n        </form>\n        ";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderExercises(exercises, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElment is not found");
        if (!Array.isArray(exercises))
            throw new Error("exercises is not array");
        var exercisesHTML = exercises.map(function (exercise) { return renderExercisesHTML(exercise); }).join("");
        HTMLElement.innerHTML = exercisesHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetExercises() {
    return __awaiter(this, void 0, void 0, function () {
        var exercises, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getExercises()];
                case 1:
                    exercises = _a.sent();
                    root = document.querySelector("#root");
                    renderExercises(exercises, root);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteExercise(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, exercises, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/img/delete-exercise", {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    exercises = result.exercises;
                    renderExercises(exercises, document.querySelector("#root"));
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
function updateExercise(event) {
    return __awaiter(this, void 0, void 0, function () {
        var exercise, sets, repetitions, weight, timer, id, response, result, exercises, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    exercise = event.target.url.value;
                    sets = event.target.url.value;
                    repetitions = event.target.url.value;
                    weight = event.target.url.value;
                    timer = event.target.url.value;
                    id = event.target.id;
                    console.log(id, exercise, sets, repetitions, weight, timer);
                    return [4 /*yield*/, fetch("API/img/update-exercise", {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id: id, exercise: exercise, sets: sets, repetitions: repetitions, weight: weight, timer: timer })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    exercises = result.exercises;
                    renderExercises(exercises, document.querySelector("#root"));
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
