// Utilizing a singular entity, the user shall have the capacity to seamlessly
//  incorporate images into the designated webpage, leveraging the server infrastructure for this purpose.
//   Furthermore, the user will possess the capability to perform comprehensive CRUD operations on their
//    respective images,
//  thereby ensuring a comprehensive and refined user experience.
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
function handleAddImg(event) {
    return __awaiter(this, void 0, void 0, function () {
        var imgUrl, img, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    imgUrl = event.target.imgUrl.value;
                    if (!imgUrl)
                        throw new Error("Please enter an image URL");
                    img = { imgUrl: imgUrl };
                    return [4 /*yield*/, fetch('/API/img/add-img', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(img)
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
                    console.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getImgs() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, images, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/img/get-img')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    images = result.images;
                    if (!Array.isArray(images))
                        throw new Error("images are not array");
                    console.log(images);
                    console.log(result);
                    return [2 /*return*/, images];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderImgHtml(img) {
    try {
        var html = "<div class=\"img-container\">\n        <h2>Image Url</h2>\n        <img src = \"" + img.imgUrl + "\">\n        </div>\n        <form id=\"" + img.id + "\" onsubmit=\"handleUpdateImg(event)\">\n              <input type=\"url\" name=\"imgUrl\" value=\"" + img.imgUrl + "\" placeholder=\"Image url\">\n              <button type=\"submit\">Update</button>\n        </form>\n        <button onclick=\"handleDeleteImg('" + img.id + "')\">Delete</button>\n        ";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderImages(images, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(images);
        if (!Array.isArray(images))
            throw new Error("images are not array");
        var imagesHTML = images.map(function (img) { return renderImgHtml(img); }).join("");
        HTMLElement.innerHTML = imagesHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetImg() {
    return __awaiter(this, void 0, void 0, function () {
        var images, rootImg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getImgs()];
                case 1:
                    images = _a.sent();
                    rootImg = document.querySelector("#rootImg");
                    renderImages(images, rootImg);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteImg(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, images, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/img/delete-img', {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    images = result.images;
                    renderImages(images, document.querySelector("#rootImg"));
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
function handleUpdateImg(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var imgUrl, id, response, result, images, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    imgUrl = ev.target.imgUrl.value;
                    id = ev.target.id;
                    console.log(id, imgUrl);
                    return [4 /*yield*/, fetch('/API/img/update-img', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id, imgUrl: imgUrl })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    images = result.images;
                    renderImages(images, document.querySelector("#rootImg"));
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
