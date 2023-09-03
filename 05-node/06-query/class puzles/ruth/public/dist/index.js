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
var Img = /** @class */ (function () {
    function Img(url, title) {
        this.url = url;
        this.title = title;
        this.id = Date.now().toString();
    }
    return Img;
}());
var User = /** @class */ (function () {
    function User(_a) {
        var email = _a.email, password = _a.password;
        this.email = email;
        this.password = password;
    }
    return User;
}());
function addImg(event) {
    try {
        event.preventDefault();
        var imgSrc = event.target.imgSrc.value;
        var imgTitle = event.target.title.value;
        if (!imgSrc || !imgTitle)
            throw new Error("img or title not found");
        var newImg = new Img(imgSrc, imgTitle);
        renderImg(newImg);
        addImageToUser(newImg);
    }
    catch (error) {
        console.error(error);
    }
}
function addImageToUser(newImg) {
    return __awaiter(this, void 0, void 0, function () {
        var userName, postInit, response, image, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    userName = getUserFromQuery();
                    if (!userName)
                        throw new Error("User not found");
                    postInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ userName: userName, newImg: newImg })
                    };
                    return [4 /*yield*/, fetch("/API/img/add-img-to-user", postInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    image = (_a.sent()).image;
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
function renderImg(newImg) {
    console.log(newImg.title);
    var html = "\n    <div class=\"imgBlock\" id=\"" + newImg.id + "\">\n    <img src=\"" + newImg.url + "\">\n    <h4>" + newImg.title + "</h4>\n    <div class=\"CRUD\">\n    <button onclick=\"handleEdit(" + newImg.id + ")\" class=\"editBtn\"><span class=\"material-symbols-outlined\"> edit </span></button>\n    <button onclick=\"handleDelete(" + newImg.id + ")\" class=\"deleteBtn\"><span class=\"material-symbols-outlined\"> delete </span></button>\n    </div>\n</div>";
    document.querySelector(".gallery").innerHTML += html;
}
function getUserFromQuery() {
    try {
        var urlStr = new URLSearchParams(window.location.search);
        return urlStr.get("email");
    }
    catch (error) {
        console.error(error.message);
    }
}
function getImgsByEmail() {
    return __awaiter(this, void 0, void 0, function () {
        var email, response, thisUserImgs, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    email = getUserFromQuery();
                    return [4 /*yield*/, fetch("API/img/get-imgs-by-user?email=" + email)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    thisUserImgs = (_a.sent()).thisUserImgs;
                    document.querySelector(".gallery").innerHTML += "";
                    thisUserImgs.forEach(function (userImg) { return renderImg(userImg.image); });
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
function handleDelete(id) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteInit, response, ok, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("delete: " + id);
                    deleteInit = {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id: id })
                    };
                    return [4 /*yield*/, fetch("/API/img/delete-img", deleteInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    if (!ok)
                        throw new Error("Error deleting");
                    document.getElementById("" + id).remove();
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
function handleEdit(id) {
    try {
        console.log("edit: " + id);
        var imgDiv = document.getElementById("" + id);
        var h4element = imgDiv.querySelector("h4");
        var title = imgDiv.querySelector("h4").innerText;
        console.log(title);
        h4element.innerHTML = "<form onsubmit=\"editImg(event, " + id + ")\">\n <input class =\"updateTitle\" name=\"updateTitle\" value=\"" + title + "\">\n </form>";
    }
    catch (error) {
        console.error(error);
    }
}
function editImg(event, imgId) {
    return __awaiter(this, void 0, void 0, function () {
        var newTitle, patchInit, response, _a, ok, title, imgDiv, formElement, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    newTitle = event.target.updateTitle.value;
                    console.log(newTitle);
                    patchInit = {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ imgId: imgId, newTitle: newTitle })
                    };
                    return [4 /*yield*/, fetch("API/img/update-title", patchInit)];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a = _b.sent(), ok = _a.ok, title = _a.title;
                    if (!ok || !title) {
                        throw new Error("something wrong in update-title");
                    }
                    imgDiv = document.getElementById("" + imgId);
                    formElement = imgDiv.querySelector("h4");
                    formElement.innerHTML = "" + title;
                    console.log("editImg");
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
