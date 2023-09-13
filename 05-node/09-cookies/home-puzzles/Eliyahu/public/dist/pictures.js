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
        var response, result, pictures, showAllBtn, error_1;
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
                    pictures = result.pictures;
                    if (!Array.isArray(pictures))
                        throw new Error("pictures is not array");
                    renderPictures(pictures);
                    showAllBtn = document.querySelector('#showAll');
                    showAllBtn.style.display = 'none';
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
function handleGetUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, user, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/get-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    user = data.user;
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// const emailUser = window.location.search.toString().replace('?email=', '')
function handleAddPicture(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var imageTags_1, _picture, response, result, pictures, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    imageTags_1 = [];
                    document.querySelectorAll('input[type=checkbox]:checked').forEach(function (ev) { return imageTags_1.push(ev.attributes[2].value); });
                    _picture = {
                        title: ev.target.title.value,
                        imgUrl: ev.target.imgUrl.value,
                        location: ev.target.location.value,
                        tags: imageTags_1,
                        // area: ev.target.area.value,
                        newTag: ev.target.newTag.value
                    };
                    if (!_picture.title || !_picture.imgUrl || !_picture.location || !_picture.tags)
                        throw new Error("Please complete all details");
                    return [4 /*yield*/, fetch("/API/pictures/add-picture", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(_picture)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    pictures = result.pictures;
                    renderPictures(pictures);
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
function handleDeletePicture(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, pictures, error_4;
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
                    pictures = result.pictures;
                    renderPictures(pictures);
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
function handleUpdatePicture(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, imgUrl, location, tags_1, testes, id, response, result, pictures, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    title = ev.target.editTitle.value;
                    imgUrl = ev.target.editImgUrl.value;
                    location = ev.target.editLocation.value;
                    tags_1 = [];
                    testes = document.querySelectorAll(".editTags");
                    testes.forEach(function (select) {
                        var output = select.value;
                        if (output) {
                            tags_1.push(output);
                        }
                    });
                    id = ev.target.id;
                    return [4 /*yield*/, fetch('API/pictures/update-picture', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ title: title, imgUrl: imgUrl, location: location, tags: tags_1, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    pictures = result.pictures;
                    renderPictures(pictures);
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
function renderAddPicture() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tags, html_1, root, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/pictures/get-tags')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tags = result.tags;
                    if (!Array.isArray(tags))
                        throw new Error("tags is not array");
                    html_1 = "<form onsubmit=\"handleAddPicture(event)\">\n        <input type=\"text\" name=\"title\" placeholder=\"\u05E0\u05D5\u05E9\u05D0\" required>\n        <input type=\"url\" name=\"imgUrl\" placeholder=\"\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4\">\n        <input type=\"text\" name=\"location\" placeholder=\"\u05D4\u05D9\u05DB\u05DF \u05E6\u05D5\u05DC\u05DE\u05D4 \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4?\">\n       \n        <div class=\"tags\" id=\"tags\">\n        <p>\u05D1\u05D7\u05E8 \u05EA\u05D2\u05D9\u05D5\u05EA \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4:</p>";
                    tags.forEach(function (tag) { return html_1 += " <div>\n        <input type=\"checkbox\" name=\"tags\" value=\"" + tag + "\">\n        <label for=\"" + tag + "\">" + tag + "</label>\n        </div>"; });
                    html_1 += "<input type=\"text\" name=\"newTag\" placeholder=\"\u05D4\u05D6\u05DF \u05EA\u05D2\u05D9\u05EA \u05D7\u05D3\u05E9\u05D4\">\n        </div>\n       <div>\n            <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n            <button onclick=\"closeAdd()\" class=\"material-symbols-rounded\">close</button>\n        </div>\n        </form>";
                    root = document.querySelector('#add');
                    root.innerHTML = html_1;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
function renderPictureHtml(picture, pictureEmail, userEmail) {
    try {
        var html_2 = "<div class = \"picture\" id=\"id" + picture._id + "\">\n        <div class = \"picture_header\">\n        <div></div>\n        <h3 >" + picture.title + "</h3>";
        // if (emailUser === 'admin@gmail.com') {
        //     html += `<p>${picture.userName}</p>
        //     <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.imgUrl}','${picture.location}','${picture._id}','${picture.tags.join(' ')}')">Edit</button>
        //     <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture._id}')">delete</button>
        //     `
        // } else {
        if (pictureEmail === userEmail) {
            html_2 += "<p>\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC\u05D9</p>\n                <button class=\"material-symbols-rounded\" onclick=\"renderUpdatePicture('" + picture.title + "','" + picture.imgUrl + "','" + picture.location + "','" + picture._id + "','" + picture.tags.join(' ') + "')\">Edit</button>\n                <button class=\"material-symbols-rounded\" onclick=\"handleDeletePicture('" + picture._id + "')\">delete</button>\n                ";
        }
        else {
            html_2 += "<p>" + picture.userName + "</p>";
        }
        // }
        html_2 += "\n        </div>\n        <img id=\"img" + picture._id + "\" onclick=\"handleShow('" + picture._id + "','" + picture.imgUrl + "' )\" src=\"" + picture.imgUrl + "\">\n        <div class = \"picture_body\">\n        <p>" + picture.location + "</p>\n        <p> " + picture.publishDate + "</p>\n        </div>\n        <div class=\"tags\">";
        picture.tags.forEach(function (tag) { return html_2 += "<button onclick=\"handleRenderByTag('" + tag + "')\">" + tag + "</button>"; });
        html_2 += "</div>\n        </div>";
        return html_2;
    }
    catch (error) {
        console.error(error.massage);
    }
}
function handleShow(id, imgUrl) {
    try {
        var divRoot = document.querySelector("#id" + id);
        divRoot.innerHTML += "<button id=\"btnClose\" onclick=\"getPictures()\" class=\"material-symbols-rounded\">close</button>";
        var imgRoot = document.querySelector("#img" + id);
        var btnCloseRoot = document.querySelector("#btnClose");
        divRoot.style.position = 'absolute';
        divRoot.style.top = '5%';
        divRoot.style.width = '80%';
        divRoot.style.height = '90%';
        divRoot.style.zIndex = '1';
        imgRoot.style.width = '85%';
        imgRoot.style.height = '80%';
        imgRoot.style.pointerEvents = 'none';
        imgRoot.style.marginTop = '5px';
        imgRoot.style.borderRadius = '5%';
        btnCloseRoot.style.position = 'absolute';
        btnCloseRoot.style.left = '1%';
        btnCloseRoot.style.top = '50%';
    }
    catch (error) {
        console.error(error.massage);
    }
}
function handleRenderByUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, pictures, showAllBtn, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/pictures/get-pictures-by-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    pictures = result.pictures;
                    if (!Array.isArray(pictures))
                        throw new Error("pictures is not array");
                    renderPictures(pictures);
                    showAllBtn = document.querySelector('#showAll');
                    showAllBtn.style.display = 'inline-flex';
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleRenderByTag(tag) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, pictures, showAllBtn, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/pictures/get-pictures-by-tag?tag=" + tag)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    pictures = result.pictures;
                    if (!Array.isArray(pictures))
                        throw new Error("pictures is not array");
                    // const picturesByTag = pictures.filter(el => el.picture.tags.includes(tag))
                    renderPictures(pictures);
                    showAllBtn = document.querySelector('#showAll');
                    showAllBtn.style.display = 'inline-flex';
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderPictures(pictures) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, user_1, allPicturesRoot, allPicturesHtml, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/get-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    user_1 = data.user;
                    if (!Array.isArray(pictures))
                        throw new Error("usersPictures is not array");
                    allPicturesRoot = document.querySelector('#allPictures');
                    allPicturesHtml = pictures.map(function (picture) { return renderPictureHtml(picture, picture.email, user_1.email); }).join('');
                    allPicturesRoot.innerHTML = allPicturesHtml;
                    closeAdd();
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderUpdatePicture(title, imgUrl, location, id, tagsAsString) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, tags_2, html, chosenTags, editRoot, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/pictures/get-tags')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    tags_2 = result.tags;
                    if (!Array.isArray(tags_2))
                        throw new Error("tags is not array");
                    html = "<div class=\"edit\">\n        <form id=\"" + id + "\" onsubmit=\"handleUpdatePicture(event)\">\n        <label for=\"" + title + "\">\u05E2\u05E8\u05D9\u05DB\u05EA \u05E0\u05D5\u05E9\u05D0</label>\n        <textarea name=\"editTitle\" id=\"" + title + "\" cols=\"20\" rows=\"1\">" + title + "</textarea>\n        <label for=\"" + imgUrl + "\">\u05E2\u05E8\u05D9\u05DB\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8</label>\n        <textarea name=\"editImgUrl\" id=\"" + imgUrl + "\" cols=\"20\" rows=\"1\">" + imgUrl + "</textarea>\n        <label for=\"" + location + "\">\u05E2\u05E8\u05D9\u05DB\u05EA \u05DE\u05D9\u05E7\u05D5\u05DD</label>\n        <textarea name=\"editLocation\" id=\"" + location + "\" cols=\"20\" rows=\"1\">" + location + "</textarea>\n        ";
                    chosenTags = tagsAsString.split(' ');
                    html += chosenTags.map(function (tag) {
                        var html = "\n        <label>\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05D2\u05D9\u05D5\u05EA</label>\n\n            <select class=\"editTags\" id = \"editTags\" name=\"editTags\">\n            <option value=\"" + tag + "\">" + tag + "</option>";
                        var otherTags = tags_2.filter(function (ta) { return ta !== tag; });
                        html += otherTags.map(function (t) {
                            var ht = "<option value=\"" + t + "\">" + t + "</option>";
                            return ht;
                        }).join('');
                        html += "<option value=\"\">\u05DE\u05D7\u05E7 \u05EA\u05D2\u05D9\u05EA</option>\n            </select> ";
                        return html;
                    }).join('');
                    html += "\n        <button type=\"submit\" class=\"material-symbols-rounded\">check</button>\n        </div>";
                    editRoot = document.querySelector("#id" + id);
                    editRoot.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _a.sent();
                    console.error(error_10.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderNav() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, ok, user, html, root, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/get-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    ok = data.ok, user = data.user;
                    if (!ok)
                        throw new Error("Some of details are incorrect");
                    html = "<div class=\"nav\">\n        <p>" + user.name + "</p>\n        <a class=\"logout material-symbols-rounded\" href=\"./index.html\">Logout</a>\n    </div>";
                    root = document.querySelector('#nav');
                    root.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    console.error(error_11.massage);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
renderNav();
