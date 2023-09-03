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
function getPictures() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, usersPictures, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/pictures/get-pictures')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersPictures = result.usersPictures;
                    if (!Array.isArray(usersPictures))
                        throw new Error("pictures is not array");
                    renderPictures(usersPictures);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getPictures();
var emailUser = window.location.search.toString().replace('?email=', '');
function handleAddPicture(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var arr_1, picture, response, result, usersPictures, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    arr_1 = [];
                    document.querySelectorAll('input[type=checkbox]:checked').forEach(function (ev) { return arr_1.push(ev.attributes[2].value); });
                    picture = {
                        title: ev.target.title.value,
                        imgUrl: ev.target.imgUrl.value,
                        location: ev.target.location.value,
                        tags: arr_1,
                        area: ev.target.area.value,
                        emailUser: emailUser
                    };
                    if (!picture.title || !picture.imgUrl || !picture.location || !picture.tags || !picture.area)
                        throw new Error("Please complete all details");
                    return [4 /*yield*/, fetch('/API/pictures/add-picture', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(picture)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersPictures = result.usersPictures;
                    renderPictures(usersPictures);
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
function handleDeletePicture(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, usersPictures, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/pictures/delete-picture', {
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
                    usersPictures = result.usersPictures;
                    renderPictures(usersPictures);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleUpdatePicture(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, imgUrl, location, tags_1, area, id, response, result, usersPictures, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.editTitle.value;
                    imgUrl = ev.target.editImgUrl.value;
                    location = ev.target.editLocation.value;
                    tags_1 = ev.target.editTags.value;
                    area = ev.target.editArea.value;
                    id = ev.target.id;
                    return [4 /*yield*/, fetch('API/pictures/update-picture', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: title, imgUrl: imgUrl, location: location, tags: tags_1, area: area, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    usersPictures = result.usersPictures;
                    renderPictures(usersPictures);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var tags = ['ים', 'מדבר', 'צבי', 'מעיין'];
function renderAddPicture() {
    try {
        var html_1 = "<form onsubmit=\"handleAddPicture(event)\">\n        <input type=\"text\" name=\"title\" placeholder=\"\u05E0\u05D5\u05E9\u05D0\" required>\n        <input type=\"url\" name=\"imgUrl\" placeholder=\"\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4\">\n        <input type=\"text\" name=\"location\" placeholder=\"\u05D4\u05D9\u05DB\u05DF \u05E6\u05D5\u05DC\u05DE\u05D4 \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4?\">\n        <div>\n        <p>\u05D1\u05D0\u05D9\u05D6\u05D4 \u05D0\u05D6\u05D5\u05E8 \u05D1\u05D0\u05E8\u05E5 \u05E6\u05D5\u05DC\u05DE\u05D4 \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4? </p>\n        <input type=\"radio\" name=\"area\" value=\"north\">\n        <label for=\"north\">\u05E6\u05E4\u05D5\u05DF</label>\n        <input type=\"radio\" name=\"area\" value=\"center\">\n        <label for=\"north\">\u05DE\u05E8\u05DB\u05D6</label>\n        <input type=\"radio\" name=\"area\" value=\"south\">\n        <label for=\"north\">\u05D3\u05E8\u05D5\u05DD</label>\n        </div>\n        <div class=\"tags\" id=\"tags\">\n        <p>\u05D1\u05D7\u05E8 \u05EA\u05D2\u05D9\u05D5\u05EA \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4:</p>";
        tags.forEach(function (tag) { return html_1 += " <div>\n        <input type=\"checkbox\" name=\"tags\" value=\"" + tag + "\">\n        <label for=\"" + tag + "\">" + tag + "</label>\n        </div>"; });
        html_1 += "<div id=\"bt\"><button onclick=\"renderAddTag()\">\u05E6\u05D5\u05E8 \u05EA\u05D2\u05D9\u05EA \u05D7\u05D3\u05E9\u05D4</button></div>\n\n        </div>\n       <div>\n            <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n            <button onclick=\"closeAdd()\" class=\"material-symbols-rounded\">close</button>\n        </div>\n        </form>";
        var root = document.querySelector('#add');
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderAddTag(ev) {
    try {
        var html = "\n        <form onsubmit=\"handleAddTag()\">\n<input type=\"text\" name=\"newTag\" placeholder=\"\u05D4\u05D6\u05DF \u05EA\u05D2\u05D9\u05EA \u05D7\u05D3\u05E9\u05D4\">\n<button type=\"submit\">\u05D4\u05D5\u05E1\u05E3</button>\n</form>";
        var tagsRoot = document.querySelector('#tags');
        tagsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function closeAdd() {
    try {
        var root = document.querySelector('#add');
        root.innerHTML = '';
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderPictureHtml(picture, user) {
    try {
        var html_2 = "<div class = \"task\" id=\"" + picture.id + "\">\n        <div class = \"task_header\">\n        <div></div>\n        <h3 >" + picture.title + "</h3>";
        if (emailUser === user.email) {
            html_2 += "<p>\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC\u05D9</p>\n    <button class=\"material-symbols-rounded\" onclick=\"renderUpdatePicture('" + picture.title + "','" + picture.location + "','" + picture.id + "')\">Edit</button>\n    <button class=\"material-symbols-rounded\" onclick=\"handleDeletePicture('" + picture.id + "')\">delete</button>\n    ";
        }
        else {
            html_2 += "<p>" + user.name + "</p>";
        }
        html_2 += "\n        </div>\n        <img src=\"" + picture.imgUrl + "\">\n        <div class = \"task_body\">\n        <p>" + picture.location + "</p>\n        <p> " + picture.publishDate + "</p>\n        </div>\n        <div class=\"tags\">";
        picture.tags.forEach(function (tag) { return html_2 += "<button>" + tag + "</button>"; });
        html_2 += "</div>\n        </div>";
        return html_2;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderPictures(usersPictures) {
    try {
        if (!Array.isArray(usersPictures))
            throw new Error("usersPictures is not array");
        console.log(usersPictures[0]);
        var allPicturesRoot = document.querySelector('#allPictures');
        var allPicturesHtml = usersPictures.map(function (userPicture) { return renderPictureHtml(userPicture.picture, userPicture.user); }).join('');
        allPicturesRoot.innerHTML = allPicturesHtml;
        // if (emailUser === 'admin@gmail.com') {
        //     const toDoTasks = usersTasks.filter(element => element.task.status === 'toDo')
        //     const toDoTasksHTML = toDoTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join('')
        //     toDoRoot.innerHTML = toDoTasksHTML
        //     const doingTasks = usersTasks.filter(element => element.task.status === 'doing')
        //     const doingTasksHTML = doingTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join('')
        //     doingRoot.innerHTML = doingTasksHTML
        //     const doneTasks = usersTasks.filter(element => element.task.status === 'done')
        //     const doneTasksHTML = doneTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join(``)
        //     doneRoot.innerHTML = doneTasksHTML
        // }
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderUpdatePicture(title, description, id) {
    try {
        var html = "<div class=\"edit\">\n        <form id=\"" + id + "\" onsubmit=\"handleUpdateTask(event)\">\n        <label for=\"" + title + "\">Edit Title</label>\n        <textarea name=\"editTitle\" id=\"" + title + "\" cols=\"20\" rows=\"1\">" + title + "</textarea>\n        <label for=\"" + description + "\">Edit Description</label>\n        <textarea name=\"editDescription\" id=\"" + description + "\" cols=\"20\" rows=\"1\">" + description + "</textarea>\n        <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n        </div>";
        var editRoot = document.querySelector("#task" + id);
        editRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function renderNav() {
    return __awaiter(this, void 0, void 0, function () {
        var email, html_3, root_1, response, result, error, userName, html, root, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    email = { emailUser: emailUser };
                    if (emailUser === 'admin@gmail.com') {
                        html_3 = "<div class=\"nav\">\n        <p>Admin</p>\n        <a class=\"logout material-symbols-rounded\" href=\"./index.html\">Logout</a>\n    </div>";
                        root_1 = document.querySelector('#nav');
                        root_1.innerHTML = html_3;
                    }
                    return [4 /*yield*/, fetch('/API/users/get-user-name', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(email)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    error = result.error, userName = result.userName;
                    if (error)
                        throw new Error("Some of details are incorrect");
                    html = "<div class=\"nav\">\n        <p>" + userName + "</p>\n        <a class=\"logout material-symbols-rounded\" href=\"./index.html\">Logout</a>\n    </div>";
                    root = document.querySelector('#nav');
                    root.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
renderNav();
