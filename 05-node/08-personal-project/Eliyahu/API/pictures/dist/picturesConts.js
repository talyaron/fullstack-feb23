"use strict";
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
exports.__esModule = true;
exports.updatePicture = exports.deletePicture = exports.addPicture = exports.getTags = exports.getPictures = void 0;
var picturesModels_1 = require("./picturesModels");
function getPictures(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var picturesDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, picturesModels_1.PictureModel.find({})];
                case 1:
                    picturesDB = _a.sent();
                    res.send({ pictures: picturesDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPictures = getPictures;
exports.getTags = function (req, res) {
    try {
        res.send({ tags: picturesModels_1.tags });
    }
    catch (error) {
        console.error(error.massage);
    }
};
function addPicture(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var picture, emailUser, title, imgUrl, location, tags_1, area, newTag, _picture, pictureDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    picture = req.body;
                    emailUser = picture.emailUser;
                    title = picture.title;
                    imgUrl = picture.imgUrl;
                    location = picture.location;
                    tags_1 = picture.tags;
                    area = picture.area;
                    newTag = picture.newTag;
                    if (newTag) {
                        picture.tags.push(newTag);
                        tags_1.push(newTag);
                    }
                    _picture = new picturesModels_1.PictureModel({ title: title, imgUrl: imgUrl, location: location, tags: tags_1, area: area });
                    return [4 /*yield*/, _picture.save()];
                case 1:
                    pictureDB = _a.sent();
                    console.log(pictureDB);
                    // const currentUser = users.find(user => user.email === emailUser)
                    // usersPictures.push(new UserPicture(currentUser, currentPicture))
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addPicture = addPicture;
exports.deletePicture = function (req, res) {
    try {
        var id_1 = req.body.id;
        var indexAtUsersPictures = picturesModels_1.usersPictures.findIndex(function (element) { return element.picture.id === id_1; });
        if (indexAtUsersPictures === -1) {
            throw new Error("picture not found");
        }
        picturesModels_1.usersPictures.splice(indexAtUsersPictures, 1);
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updatePicture = function (req, res) {
    try {
        var _a = req.body, title = _a.title, imgUrl = _a.imgUrl, location = _a.location, id_2 = _a.id;
        if (!title || !imgUrl || !location || !id_2)
            throw new Error("Please complete all details");
        var pictureUser = picturesModels_1.usersPictures.find(function (element) { return element.picture.id === id_2; });
        if (!pictureUser)
            throw new Error("Picture not found");
        pictureUser.picture.title = title;
        pictureUser.picture.imgUrl = imgUrl;
        pictureUser.picture.location = location;
        res.send({ usersPictures: picturesModels_1.usersPictures });
    }
    catch (error) {
        console.error(error.massage);
    }
};
