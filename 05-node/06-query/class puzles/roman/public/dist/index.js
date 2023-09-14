// import { images } from "../API/images/imagesModel";
// import { Image,images } from "../API/images/imagesModel";
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
var images = [];
function handleAddImage(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var image, response, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault(); // stop form from submitting
                    image = {
                        // get data from form
                        name: ev.target.name.value,
                        imgUrl: ev.target.imgUrl.value
                    };
                    console.log(image);
                    return [4 /*yield*/, fetch("/API/images/add-image", {
                            // send data to server
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(image)
                        })];
                case 1:
                    response = _a.sent();
                    handleGetImages();
                    return [4 /*yield*/, response.json()];
                case 2:
                    error = (_a.sent()).error;
                    if (error) {
                        throw new Error(error);
                    }
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
function handleGetImages() {
    return __awaiter(this, void 0, void 0, function () {
        var response, fetchedImages, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/images/get-images')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    fetchedImages = (_a.sent()).images;
                    // Update the local 'images' array with the fetched images
                    images.length = 0; // Clear the existing array
                    images.push.apply(// Clear the existing array
                    images, fetchedImages); // Add the fetched images to the array
                    renderImages(images, document.querySelector("#images"));
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
function renderImages(images, div) {
    div.innerHTML = "";
    images.forEach(function (image) {
        var html = "\n    <div class=\"image\" id=\"" + image.id + "\">\n      <img class=\"image__image\" src=\"" + image.imgUrl + "\" alt=\"" + image.name + "\">\n      <p class=\"image__name\">" + image.name + "</p>\n      <button class=\"image__btn\" onclick=\"handleEdit(" + image.id + ")\">EDIT</button>\n    ";
        div.innerHTML += html;
        return images;
    });
}
function handleEdit(id) {
    console.log("ID to find:", id);
    var editImage = images.find(function (image) {
        console.log("Image ID:", image.id);
        return image.id == id;
    });
    console.log(images);
    if (!editImage) {
        console.log("Image not found for id:", id);
        return;
    }
    var popup = document.querySelector(".popup");
    var html = "\n    <form onsubmit=\"handleSaveImage(event)\" id=" + editImage.id + ">\n      <input type=\"text\" name=\"name\" placeholder=\"" + editImage.name + "\" value=\"" + editImage.name + "\">\n      <input type=\"url\" name=\"imgUrl\" placeholder=\"" + editImage.imgUrl + "\" value=\"" + editImage.imgUrl + "\">\n      <input type=\"submit\" value=\"Save\">\n    </form>\n  ";
    popup.innerHTML = html;
    popup.style.display = 'block';
}
function handleSaveImage(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, newImgName, newImgUrl, response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault(); // Prevent the default form submission
                    id = event.target.id;
                    newImgName = event.target.name.value;
                    newImgUrl = event.target.imgUrl.value;
                    console.log(id);
                    return [4 /*yield*/, fetch('/API/images/update-image', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, newImgName: newImgName })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
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
